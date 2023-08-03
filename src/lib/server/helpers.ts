import { data } from "$lib/server/data"
import { SIMULATE_DELAY } from "$env/static/private"

const DELAY = SIMULATE_DELAY === "true"

export function get_announcements(courseId: string) {
    return data.announcements.filter((item) => item.courseId === courseId)
}

export function get_courses() {
    return data.courses
}

export async function fetch_courses() {
    const fetched_courses = get_courses().slice(0, 3)
    const courses: any = {}

    fetched_courses.forEach((course) => (courses[course.id] = course))
    await delay(3000)
    return courses
}

export async function delay(ms: number) {
    if (!DELAY) return
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export function get_course_map() {
    const mp: Map<string, { name: string }> = new Map()
    data.courses.forEach((course) => {
        mp.set(course.id, { name: course.name })
    })
    return mp
}
