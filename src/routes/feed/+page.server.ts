import { redirect } from "@sveltejs/kit"

export const load = async ({ locals }) => {
    const session = await locals.getSession()
    if (!session?.user) throw redirect(307, "/")
    return { session }
}
