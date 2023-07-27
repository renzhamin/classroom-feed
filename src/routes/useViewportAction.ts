import type { Action } from "svelte/action"
let intersectionObserver: IntersectionObserver

function ensureIntersectionObserver() {
    if (intersectionObserver) return

    intersectionObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const eventName = entry.isIntersecting
                    ? "enterViewport"
                    : "exitViewport"
                entry.target.dispatchEvent(new CustomEvent(eventName))
            })
        },
        {
            threshold: 1,
        }
    )
}

const viewport: Action = (element: HTMLElement) => {
    ensureIntersectionObserver()

    intersectionObserver.observe(element)

    return {
        destroy() {
            intersectionObserver.unobserve(element)
        },
    }
}

export default viewport
