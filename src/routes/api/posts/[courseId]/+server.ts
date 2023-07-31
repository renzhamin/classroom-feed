import { delay, get_announcements } from "$lib/helpers"
import { json, error } from "@sveltejs/kit"

export const GET = async ({ params, setHeaders }) => {
    /* throw error(429, { message: "rate exceeded" }) */
    await delay(3000)
    let courseId = Number(params.courseId)
    const announcements = get_announcements(courseId.toString()).slice(0, 1)
    /* setHeaders({ */
    /*     "cache-control": "public, max-age=60", */
    /* }) */
    return json({ data: announcements }, { status: 200 })
}
