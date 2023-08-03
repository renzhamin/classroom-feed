import { browser } from "$app/environment"

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

    const formatter = Intl.DateTimeFormat(currentLocale, {
        ...options,
        timeZone: currentTimeZone,
    })

    const formattedDate = formatter.format(dateObject)

    return formattedDate
}

export const localStore = {
    get: (key: string, fallback?: any) => {
        if (!browser || !key) return fallback
        let value = localStorage.getItem(key)
        if (!value) return fallback
        return JSON.parse(value)
    },

    set: (key: string, value: any) => {
        if (!browser || (!value && !(typeof value === "boolean"))) return
        if (value instanceof Array && value.length == 0) return
        if (value instanceof Map) value = [...value]
        if (typeof value === "object") {
            value = JSON.stringify(value)
        }
        localStorage.setItem(key, value)
    },
}

export async function set_fetch_error(data: any) {
    let fetch_error = ""
    if (data.status == 429) {
        data = await data.json()
        fetch_error = `Rate limitied until ${format_date(data.reset)}`
    } else if (data.status == 503) {
        data = await data.json()
        fetch_error = data.message
    }

    return fetch_error
}
