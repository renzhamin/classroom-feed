import { building } from "$app/environment"
import { Redis } from "@upstash/redis"
import { Ratelimit } from "@upstash/ratelimit"
import { type Handle, error } from "@sveltejs/kit"
import {
    UPSTASH_REDIS_REST_TOKEN,
    UPSTASH_REDIS_REST_URL,
    RATE_LIMIT,
} from "$env/static/private"

let redis: Redis
let ratelimit: Ratelimit

if (!building) {
    redis = new Redis({
        url: UPSTASH_REDIS_REST_URL,
        token: UPSTASH_REDIS_REST_TOKEN,
    })

    ratelimit = new Ratelimit({
        redis,
        limiter: Ratelimit.slidingWindow(10, "60 s"),
    })
}

export const handle = (async ({ event, resolve }) => {
    if (RATE_LIMIT === "true" && event.url.pathname.startsWith("/api")) {
        const limit_id = event.getClientAddress()
        const { success, reset } = await ratelimit.limit(limit_id)
        const reset_time = Intl.DateTimeFormat("en-US", {
            timeZone: "UTC",
            dateStyle: "medium",
            timeStyle: "short",
        }).format(new Date(reset))
        if (!success) {
            throw error(429, `Rate Limited until ${reset_time} UTC`)
        }
    }

    const response = await resolve(event)
    return response
}) satisfies Handle
