import { writable } from "svelte/store"

import { get_course_map, localStore } from "./helpers"

let course_map: Map<string, { name: string }>
let course_map_init = false

if (!course_map_init) {
    course_map = get_course_map()
    course_map_init = true
}

export const all_courses = Array.from(course_map.keys())
export { course_map }

export const sel_courses = writable(
    localStore.get("sel_courses", [...all_courses])
)
export const sidebar_visible = writable(
    localStore.get("sidebar_visible", false)
)
