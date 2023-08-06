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

export const GET = async ({ setHeaders, cookies, locals, fetch }) => {
    try {
        const session = await locals.getSession()
        const access_token = session.access_token

        let courses: any

        if (CACHE) {
            let diff = -1
            const id = `user:${session.user.email}`
            const last_fetched = cookies.get(id)
            if (last_fetched) {
                diff = Date.now() - Number(last_fetched)
                diff = diff / 1000
            }

            if (diff < cache_exp) {
                courses = await redis.get(id)
            }

            if (!courses) {
                courses = await fetch_courses(access_token, fetch)
                redis.set(id, courses, { ex: cache_exp })
                cookies.set(id, Date.now().toString())
            }
        } else {
            courses = await fetch_courses(access_token, fetch)
        }

        setHeaders({
            "cache-control": "max-age=300",
        })
        return json({ data: courses }, { status: 200 })
    } catch (err) {
        return json({ message: err.message }, { status: 503 })
    }
}

async function fetch_courses(access_token: string, fetch) {
    let fetched_courses = await fetch(
        "https://classroom.googleapis.com/v1/courses?courseStates=ACTIVE",
        {
            headers: {
                Authorization: `Bearer ${access_token}`,
            },
        }
    )

    fetched_courses = await fetched_courses.json()

    if (!fetched_courses.courses) {
        return {}
    }

    const courses = {}

    fetched_courses.courses.forEach((course) => {
        courses[course.id] = course
    })

    return courses
}
