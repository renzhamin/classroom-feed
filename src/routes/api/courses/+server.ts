import { delay, get_courses } from "$lib/helpers"
import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

export const GET = (async ({ setHeaders }) => {
    /* await delay(3000) */
    const fetched_courses = get_courses()
    const courses: any = {}

    fetched_courses.forEach((course) => (courses[course.id] = course))

    setHeaders({
        "cache-control": "public, max-age=60",
    })
    return json({ data: courses }, { status: 200 })
}) satisfies RequestHandler
