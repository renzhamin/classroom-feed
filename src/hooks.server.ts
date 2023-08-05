import { building } from "$app/environment"
import { Redis } from "@upstash/redis"
import { Ratelimit } from "@upstash/ratelimit"
import { type Handle, json, redirect, error } from "@sveltejs/kit"
import { sequence } from "@sveltejs/kit/hooks"
import Google from "@auth/core/providers/google"
import { SvelteKitAuth } from "@auth/sveltekit"
import { GOOGLE_ID, GOOGLE_SECRET, AUTH_SECRET } from "$env/static/private"

import {
    UPSTASH_REDIS_REST_TOKEN,
    UPSTASH_REDIS_REST_URL,
    RATE_LIMIT,
} from "$env/static/private"

let redis: Redis
let ratelimit: Ratelimit

if (RATE_LIMIT === "true") {
    const cache: Map<string, number> = new Map()

    if (!building) {
        redis = new Redis({
            url: UPSTASH_REDIS_REST_URL,
            token: UPSTASH_REDIS_REST_TOKEN,
        })

        ratelimit = new Ratelimit({
            redis,
            limiter: Ratelimit.slidingWindow(10, "120 s"),
            ephemeralCache: cache,
        })
    }
}

const checks = (async ({ event, resolve }) => {
    const session = await event.locals.getSession()

    const hit_api = event.url.pathname.startsWith("/api")

    if (!session) {
        if (hit_api) {
            throw error(401, "You are not signed in")
        }
    }

    if (RATE_LIMIT === "true" && hit_api) {
        try {
            const limiter_id = session.user.email
            const { success, limit, reset, remaining } = await ratelimit.limit(
                limiter_id
            )
            const rate_limit_headers = {
                "X-RateLimit-Limit": limit.toString(),
                "X-RateLimit-Remaining": remaining.toString(),
                "X-RateLimit-Reset": reset.toString(),
            }

            event.setHeaders(rate_limit_headers)

            if (limit <= 0) {
                return json(
                    {
                        message: "Redis cache quota exceeded. Contact Admin",
                    },
                    { status: 503 }
                )
            }

            const time_to_reset = Math.max(30, ~~((reset - Date.now()) / 1000))
            if (!success) {
                return json(
                    { reset },
                    {
                        status: 429,
                        headers: {
                            "cache-control": `private, max-age=${time_to_reset.toString()}, immutable`,
                            ...rate_limit_headers,
                        },
                    }
                )
            }
        } catch (err) {
            console.error("ERROR IN hooks.server Handle", err)
        }
    }

    const response = await resolve(event)
    return response
}) satisfies Handle

const authMiddleWare = SvelteKitAuth({
    secret: AUTH_SECRET,
    providers: [
        Google({
            clientId: GOOGLE_ID,
            clientSecret: GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    scope: "https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/classroom.courses.readonly https://www.googleapis.com/auth/classroom.announcements.readonly https://www.googleapis.com/auth/classroom.rosters.readonly",
                },
            },
        }),
    ],
    callbacks: {
        async redirect() {
            return "/feed"
        },
        async jwt({ token, account }) {
            if (account) {
                // Save the access token and refresh token in the JWT on the initial login
                return {
                    ...token,
                    access_token: account.access_token,
                    expires_at: Math.floor(
                        Date.now() / 1000 + account.expires_in
                    ),
                    refresh_token: account.refresh_token,
                }
            } else if (Date.now() < Number(token.expires_at) * 1000) {
                // If the access token has not expired yet, return it
                return token
            } else {
                // If the access token has expired, try to refresh it
                try {
                    // https://accounts.google.com/.well-known/openid-configuration
                    // We need the `token_endpoint`.
                    // @ts-ignore
                    const searchParams = new URLSearchParams({
                        client_id: GOOGLE_ID,
                        client_secret: GOOGLE_SECRET,
                        grant_type: "refresh_token",
                        refresh_token: token.refresh_token,
                    })

                    const response = await fetch(
                        "https://oauth2.googleapis.com/token",
                        {
                            headers: {
                                "Content-Type":
                                    "application/x-www-form-urlencoded",
                            },
                            body: searchParams,
                            method: "POST",
                        }
                    )

                    const tokens = await response.json()

                    if (!response.ok) throw tokens

                    return {
                        ...token, // Keep the previous token properties
                        access_token: tokens.access_token,
                        expires_at: Math.floor(
                            Date.now() / 1000 + tokens.expires_in
                        ),
                        // Fall back to old refresh token, but note that
                        // many providers may only allow using a refresh token once.
                        refresh_token:
                            tokens.refresh_token ?? token.refresh_token,
                    }
                } catch (error) {
                    console.error("Error refreshing access token", error)
                    // The error property will be used client-side to handle the refresh token error
                    return { ...token, error: "RefreshAccessTokenError" }
                }
            }
        },
        async session({ session, token }) {
            // @ts-ignore
            session.error = token.error
            // @ts-ignore
            session.access_token = token.access_token
            // @ts-ignore
            session.refresh_token = token.refresh_token
            return session
        },
    },
})

export const handle = sequence(authMiddleWare, checks)
