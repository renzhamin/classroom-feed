import { writable } from "svelte/store"

export const course_map = writable<Map<string, { name: string }>>(
    new Map([["616614896696", { name: "Elective" }]])
)

export const sel_courses = writable<Array<string>>(["616614896696"])

export const sidebar_visible = writable<boolean>(false)
