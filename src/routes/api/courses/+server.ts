import { fetch_courses } from "$lib/server/helpers"
import { json } from "@sveltejs/kit"

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

export const GET = async ({ getClientAddress, cookies, url }) => {
    /* throw error(429) */
    /* await delay(3000) */

    /* setHeaders({ */
    /*     "cache-control": "max-age=60", */
    /* }) */

    let courses: any

    if (CACHE) {
        let diff = -1
        const id = `user:${getClientAddress()}`
        const last_fetched = cookies.get(id)
        if (last_fetched) {
            diff = Date.now() - Number(last_fetched)
            diff = diff / 1000
        }

        if (diff < cache_exp) {
            courses = await redis.get(id)
        }

        if (!courses) {
            courses = await fetch_courses()
            redis.set(id, courses, { ex: cache_exp })
            cookies.set(id, Date.now().toString())
        }
    } else {
        courses = await fetch_courses()
    }

    return json({ data: courses }, { status: 200 })
}
