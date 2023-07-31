import { delay, get_announcements } from "$lib/helpers"
import { json, error } from "@sveltejs/kit"
import type { Post } from "$lib/data"
import type { RequestHandler } from "./$types"

export const GET = (async ({ params, setHeaders, cookies }) => {
    /* throw error(429, { message: "rate exceeded" }) */
    await delay(3000)
    let courseId = Number(params.courseId)
    const posts: Post[] = get_announcements(courseId.toString()).slice(0, 1)

    /* setHeaders({ */
    /*     "cache-control": "public, max-age=60", */
    /* }) */
    let updated = true
    if (posts?.length) {
        const last_post_fetch = new Date(cookies.get("last_post_fetch"))
        const latest_post_time = new Date(posts[0].updateTime)
        if (!!last_post_fetch && !!latest_post_time) {
            updated = latest_post_time > last_post_fetch
        }
    }
    const cur_time = new Date()
    cookies.set("last_post_fetch", cur_time.toUTCString())

    return json({ data: posts, updated }, { status: 200 })
}) satisfies RequestHandler
