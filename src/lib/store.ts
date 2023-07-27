import { writable } from "svelte/store"

export const course_map = writable<Map<string, { name: string }>>(new Map())

export const sel_courses = writable<Array<string>>([])

export const sidebar_visible = writable(true)
