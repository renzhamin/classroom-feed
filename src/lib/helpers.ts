import { data } from "./data"
import { browser } from "$app/environment"

export function get_announcements(courseId: string) {
    return data.announcements.filter((item) => item.courseId === courseId)
}

export function get_courses() {
    return data.courses
}

const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
}

export function format_date(inputDateString: string) {
    const dateObject = new Date(inputDateString)

    const currentLocale = Intl.DateTimeFormat().resolvedOptions().locale
    const currentTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

    const formatter = new Intl.DateTimeFormat(currentLocale, {
        ...options,
        timeZone: currentTimeZone,
    })

    const formattedDate = formatter.format(dateObject)

    return formattedDate
}

export async function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export function get_course_map() {
    const mp: Map<string, { name: string }> = new Map()
    data.courses.forEach((course) => {
        mp.set(course.id, { name: course.name })
    })
    return mp
}

export const localStore = {
    get: (key: string, fallback?: any) => {
        if (!browser || !key) return fallback
        let value = localStorage.getItem(key)
        if (!value) return fallback
        if (value === "true") return true
        if (value === "false") return false
        if (value[0] == "{") return JSON.parse(value)
        return value
    },

    set: (key: string, value: any) => {
        if (!browser || !value) return
        if (typeof value === "object") {
            value = JSON.stringify(value)
        }
        localStorage.setItem(key, value)
    },
}
