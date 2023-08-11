export type Post = {
    courseId: string
    id: string
    text: string
    updateTime: string
    alternateLink: string
    materials?: (DriveFile | YoutubeVideo | Link | Form)[]
    [key: string]: any
}

export type Course = {
    id: string
    name: string
    [key: string]: any
}

type DriveFile = {
    driveFile: {
        driveFile: {
            title: string
            alternateLink: string
        }
    }
}

type YoutubeVideo = {
    youtubeVideo: {
        title: string
        alternateLink: string
    }
}

type Link = {
    link: {
        title: string
        url: string
    }
}

type Form = {
    form: {
        title: string
        formUrl: string
    }
}
