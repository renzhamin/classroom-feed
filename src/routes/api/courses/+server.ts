import { delay, fetch_courses, get_courses } from "$lib/helpers"
import { json } from "@sveltejs/kit"

export const GET = async ({ setHeaders }) => {
    /* await delay(3000) */

    /* setHeaders({ */
    /*     "cache-control": "max-age=60", */
    /* }) */
    const courses = await fetch_courses()
    return json({ data: courses }, { status: 200 })
}
