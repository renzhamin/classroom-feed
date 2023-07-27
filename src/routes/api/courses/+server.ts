import { delay, get_courses } from "$lib/helpers"
import { json } from "@sveltejs/kit"
import type { RequestHandler } from "./$types"

export const GET = (async ({ setHeaders }) => {
    /* await delay(3000) */
    const courses = get_courses()
    setHeaders({
        "cache-control": "public, max-age=60",
    })
    return json({ data: courses }, { status: 200 })
}) satisfies RequestHandler
