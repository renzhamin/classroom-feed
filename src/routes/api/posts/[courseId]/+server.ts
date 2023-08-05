import type { Post } from "$lib/server/data"
import { delay, get_announcements } from "$lib/server/helpers"
import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

import {
    UPSTASH_REDIS_REST_TOKEN,
    UPSTASH_REDIS_REST_URL,
    CACHING_ENABLED,
} from "$env/static/private"
import { Redis } from "@upstash/redis"

let redis: Redis
const CACHE = CACHING_ENABLED === "true"

if (CACHE) {
    redis = new Redis({
        url: UPSTASH_REDIS_REST_URL,
        token: UPSTASH_REDIS_REST_TOKEN,
    })
}

const cache_exp = 120

function get_posts(courseId: string) {
    return get_announcements(courseId).slice(0, 1)
}

export const GET = (async ({ params, cookies, setHeaders }) => {
    let courseId = params.courseId
    let posts: Post[]
    const last_fetched = Number(cookies.get(courseId))

    if (CACHE) {
        let diff = -1

        if (last_fetched) {
            diff = Date.now() - last_fetched
            diff = diff / 1000
        }
        if (diff < cache_exp) {
            // Check Cache
            posts = await redis.get(courseId)
        }
        if (!posts) {
            // Cache Miss
            posts = get_posts(courseId)
            redis.set(courseId, posts, { ex: cache_exp })
            cookies.set(courseId, Date.now().toString())
        }
    } else {
        await delay(3000)
        posts = get_posts(courseId)
    }

    setHeaders({
        "cache-control": "public, max-age=60",
    })

    let updated = false
    if (posts?.length) {
        const latest_post_time = new Date(posts[0].updateTime).getTime()
        if (!!last_fetched && !!latest_post_time) {
            updated = latest_post_time > last_fetched
        }
    }
    cookies.set(courseId, Date.now().toString())

    return json({ data: posts, updated }, { status: 200 })
}) satisfies RequestHandler
