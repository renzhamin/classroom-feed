import type { PageServerLoad } from "./$types"
import { fetch_courses } from "$lib/helpers"

export const load = (async () => {
    return {
        streamed: {
            courses: fetch_courses(),
        },
    }
}) satisfies PageServerLoad
