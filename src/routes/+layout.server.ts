export const load = async (event) => {
    const session = await event.locals.getSession()
    console.log("SESSION", session)
    return {
        session,
    }
}
