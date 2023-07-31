import { building } from "$app/environment"
import { Redis } from "@upstash/redis"
import { Ratelimit } from "@upstash/ratelimit"
import { type Handle, json } from "@sveltejs/kit"
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
            limiter: Ratelimit.slidingWindow(6, "120 s"),
            ephemeralCache: cache,
        })
    }
}

export const handle = (async ({ event, resolve }) => {
    if (RATE_LIMIT === "true" && event.url.pathname.startsWith("/api")) {
        try {
            const limiter_id = event.getClientAddress()
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
