export type Post = {
    courseId: string
    id: string
    text: string
    updateTime: string
    alternateLink: string
    [key: string]: any
}

export type Course = {
    id: string
    name: string
    [key: string]: any
}
