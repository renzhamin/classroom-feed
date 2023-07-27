import { writable } from "svelte/store"

export const all_courses = writable<{
    [key: string]: { id: string; name: string }
}>()

export const sel_courses = writable<Array<string>>()

export const sidebar_visible = writable(true)
