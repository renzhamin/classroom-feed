const courses = [
    {
        id: "1",
        name: "Machine Learning",
    },
    {
        id: "2",
        name: "Data Structure",
    },
    {
        id: "3",
        name: "Web Development",
    },
    {
        id: "4",
        name: "Artificial Intelligence",
    },
    {
        id: "5",
        name: "Database Management",
    },
    {
        id: "6",
        name: "Mobile App Development",
    },
    {
        id: "7",
        name: "Computer Networks",
    },
    {
        id: "8",
        name: "Software Engineering",
    },
    {
        id: "9",
        name: "Operating Systems",
    },
    {
        id: "10",
        name: "Cybersecurity",
    },
    {
        id: "11",
        name: "Cloud Computing",
    },
    {
        id: "12",
        name: "Game Development",
    },
    {
        id: "13",
        name: "Data Science",
    },
    {
        id: "14",
        name: "Robotics",
    },
    {
        id: "15",
        name: "Computer Graphics",
    },
    {
        id: "16",
        name: "Natural Language Processing",
    },
    {
        id: "17",
        name: "Big Data Analytics",
    },
    {
        id: "18",
        name: "Blockchain Technology",
    },
    {
        id: "19",
        name: "Internet of Things",
    },
    {
        id: "20",
        name: "Augmented Reality",
    },
    {
        id: "21",
        name: "Virtual Reality",
    },
    {
        id: "22",
        name: "Data Mining",
    },
    {
        id: "23",
        name: "Computer Vision",
    },
    {
        id: "24",
        name: "Quantum Computing",
    },
    {
        id: "25",
        name: "Network Security",
    },
    {
        id: "26",
        name: "Parallel Computing",
    },
    {
        id: "27",
        name: "Distributed Systems",
    },
    {
        id: "28",
        name: "Embedded Systems",
    },
    {
        id: "29",
        name: "Human-Computer Interaction",
    },
    {
        id: "30",
        name: "Computer Architecture",
    },
    {
        id: "31",
        name: "Software Testing",
    },
    {
        id: "32",
        name: "Artificial Neural Networks",
    },
    {
        id: "33",
        name: "Cloud Security",
    },
    {
        id: "34",
        name: "Wireless Communication",
    },
    {
        id: "35",
        name: "Cryptography",
    },
    {
        id: "36",
        name: "Geographic Information Systems",
    },
    {
        id: "37",
        name: "Bioinformatics",
    },
    {
        id: "38",
        name: "Computer Ethics",
    },
    {
        id: "39",
        name: "Data Warehousing",
    },
    {
        id: "40",
        name: "Information Retrieval",
    },
    {
        id: "41",
        name: "Cloud Database Management",
    },
    {
        id: "42",
        name: "Computer Animation",
    },
    {
        id: "43",
        name: "Network Programming",
    },
    {
        id: "44",
        name: "Software Development Methodologies",
    },
    {
        id: "45",
        name: "Computer Algebra Systems",
    },
]

export const data: { announcements: Post[]; courses: Course[] } = {
    courses,
    announcements: [
        {
            courseId: "1",
            id: "1-1",
            text: "This is nothing but a test announcement.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDAz",
            creationTime: "2023-07-25T11:18:02.968Z",
            updateTime: "2023-07-25T11:18:02.941Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "102228857692621657049",
        },
        {
            courseId: "1",
            id: "1-2",
            text: "This is a different announcement for testing purposes.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA0",
            creationTime: "2023-07-25T13:35:46.572Z",
            updateTime: "2023-07-25T13:35:46.572Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "102228857692621657049",
        },
        {
            courseId: "1",
            id: "1-3",
            text: "Important announcement: Please read carefully.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA1",
            creationTime: "2023-07-25T15:42:31.128Z",
            updateTime: "2023-07-25T15:42:31.128Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "102228857692621657049",
        },
        {
            courseId: "1",
            id: "1-4",
            text: "Urgent: Assignment submission deadline extended.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA2",
            creationTime: "2023-07-26T06:50:19.760Z",
            updateTime: "2023-07-26T06:50:19.760Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "102228857692621657049",
        },
        {
            courseId: "1",
            id: "1-5",
            text: "Reminder: Guest lecture tomorrow at 10 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA3",
            creationTime: "2023-07-26T13:27:58.213Z",
            updateTime: "2023-07-26T13:27:58.213Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "102228857692621657049",
        },
        {
            courseId: "1",
            id: "1-6",
            text: "Welcome to the course! First lecture at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA4",
            creationTime: "2023-07-26T12:05:30.531Z",
            updateTime: "2023-07-26T12:05:30.531Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "102228857692621657049",
        },
        {
            courseId: "1",
            id: "1-7",
            text: "Reminder: Submit your assignment by 11:59 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA5",
            creationTime: "2023-07-27T09:30:15.224Z",
            updateTime: "2023-07-27T09:30:15.224Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "102228857692621657049",
        },
        {
            courseId: "1",
            id: "1-8",
            text: "Important: Guest speaker tomorrow at 2 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA6",
            creationTime: "2023-07-28T14:40:42.782Z",
            updateTime: "2023-07-28T14:40:42.782Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "102228857692621657049",
        },
        {
            courseId: "1",
            id: "1-9",
            text: "Urgent: Class canceled for today.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA7",
            creationTime: "2023-07-29T10:15:20.945Z",
            updateTime: "2023-07-29T10:15:20.945Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "102228857692621657049",
        },
        {
            courseId: "1",
            id: "1-10",
            text: "Reminder: Group project presentation next week.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA8",
            creationTime: "2023-07-30T12:35:05.217Z",
            updateTime: "2023-07-30T12:35:05.217Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "102228857692621657049",
        },
        {
            courseId: "2",
            id: "2-1",
            text: "The class is postponed to 2:45pm.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDAz",
            creationTime: "2023-07-25T11:18:02.968Z",
            updateTime: "2023-07-25T11:19:02.941Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "102228857692621657049",
        },
        {
            courseId: "2",
            id: "2-2",
            text: "Reminder: Quiz tomorrow at 10 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA0",
            creationTime: "2023-07-25T14:30:55.283Z",
            updateTime: "2023-07-25T14:30:55.283Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "102228857692621657049",
        },
        {
            courseId: "2",
            id: "2-3",
            text: "Update: Please bring your lab equipment.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA1",
            creationTime: "2023-07-25T17:55:10.732Z",
            updateTime: "2023-07-25T17:55:10.732Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "102228857692621657049",
        },
        {
            courseId: "2",
            id: "2-4",
            text: "Important: Group project meeting at 3 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA2",
            creationTime: "2023-07-26T09:21:45.906Z",
            updateTime: "2023-07-26T09:21:45.906Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "102228857692621657049",
        },
        {
            courseId: "2",
            id: "2-6",
            text: "Reminder: Group project submission due next week.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDA9",
            creationTime: "2023-07-31T09:55:38.374Z",
            updateTime: "2023-07-31T09:55:38.374Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "102228857692621657049",
        },
        {
            courseId: "2",
            id: "2-7",
            text: "Important: Office hours canceled for today.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDEw",
            creationTime: "2023-08-01T14:20:57.511Z",
            updateTime: "2023-08-01T14:20:57.511Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "102228857692621657049",
        },
        {
            courseId: "2",
            id: "2-8",
            text: "Update: Quiz rescheduled to 3 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDEy",
            creationTime: "2023-08-02T10:45:16.709Z",
            updateTime: "2023-08-02T10:45:16.709Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "102228857692621657049",
        },
        {
            courseId: "2",
            id: "2-9",
            text: "Urgent: Lab session moved to 11 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDEz",
            creationTime: "2023-08-03T12:15:24.822Z",
            updateTime: "2023-08-03T12:15:24.822Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "102228857692621657049",
        },
        {
            courseId: "2",
            id: "2-10",
            text: "Reminder: Final exam on August 10th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/NjE2NjI4MTA2NzEy/p/NjE2NjI5OTIxNDE0",
            creationTime: "2023-08-04T14:50:35.955Z",
            updateTime: "2023-08-04T14:50:35.955Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "102228857692621657049",
        },
        {
            courseId: "3",
            id: "3-1",
            text: "Welcome to Course 3! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-3/announcement-1",
            creationTime: "2023-08-10T09:00:00.000Z",
            updateTime: "2023-08-10T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },
        {
            courseId: "3",
            id: "3-2",
            text: "Assignment reminder: Submit by August 15th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-3/announcement-2",
            creationTime: "2023-08-11T14:30:00.000Z",
            updateTime: "2023-08-11T14:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-2",
        },
        {
            courseId: "3",
            id: "3-3",
            text: "Important: Group project meeting at 3 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-3/announcement-3",
            creationTime: "2023-08-12T17:45:00.000Z",
            updateTime: "2023-08-12T17:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-3",
        },
        {
            courseId: "3",
            id: "3-4",
            text: "Lab session update: Time changed to 11 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-3/announcement-4",
            creationTime: "2023-08-13T12:15:00.000Z",
            updateTime: "2023-08-13T12:15:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-4",
        },
        {
            courseId: "3",
            id: "3-5",
            text: "Reminder: Final exam on August 20th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-3/announcement-5",
            creationTime: "2023-08-14T08:30:00.000Z",
            updateTime: "2023-08-14T08:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-5",
        },
        {
            courseId: "3",
            id: "3-6",
            text: "Important: Course survey to be filled by 5 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-3/announcement-6",
            creationTime: "2023-08-15T16:45:00.000Z",
            updateTime: "2023-08-15T16:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-6",
        },
        {
            courseId: "3",
            id: "3-7",
            text: "Reminder: Course project presentation on August 22nd.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-3/announcement-7",
            creationTime: "2023-08-16T11:30:00.000Z",
            updateTime: "2023-08-16T11:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-7",
        },
        {
            courseId: "4",
            id: "4-1",
            text: "Welcome to Course 4! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-4/announcement-1",
            creationTime: "2023-08-05T09:00:00.000Z",
            updateTime: "2023-08-05T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },
        {
            courseId: "4",
            id: "4-2",
            text: "Reminder: Assignment due on August 15th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-4/announcement-2",
            creationTime: "2023-08-06T14:30:00.000Z",
            updateTime: "2023-08-06T14:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-2",
        },
        {
            courseId: "4",
            id: "4-3",
            text: "Important: Group project meeting at 3 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-4/announcement-3",
            creationTime: "2023-08-07T17:45:00.000Z",
            updateTime: "2023-08-07T17:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-3",
        },
        {
            courseId: "4",
            id: "4-4",
            text: "Lab session update: Time changed to 11 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-4/announcement-4",
            creationTime: "2023-08-08T12:15:00.000Z",
            updateTime: "2023-08-08T12:15:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-4",
        },
        {
            courseId: "4",
            id: "4-5",
            text: "Reminder: Final exam on August 20th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-4/announcement-5",
            creationTime: "2023-08-09T08:30:00.000Z",
            updateTime: "2023-08-09T08:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-5",
        },
        {
            courseId: "4",
            id: "4-6",
            text: "Important: Course survey to be filled by 5 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-4/announcement-6",
            creationTime: "2023-08-10T16:45:00.000Z",
            updateTime: "2023-08-10T16:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-6",
        },
        {
            courseId: "4",
            id: "4-7",
            text: "Reminder: Course project presentation on August 22nd.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-4/announcement-7",
            creationTime: "2023-08-11T11:30:00.000Z",
            updateTime: "2023-08-11T11:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-7",
        },
        {
            courseId: "5",
            id: "5-1",
            text: "Welcome to Course 5! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-5/announcement-1",
            creationTime: "2023-08-12T09:00:00.000Z",
            updateTime: "2023-08-12T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },
        {
            courseId: "5",
            id: "5-2",
            text: "Reminder: Assignment due on August 18th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-5/announcement-2",
            creationTime: "2023-08-13T14:30:00.000Z",
            updateTime: "2023-08-13T14:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-2",
        },
        {
            courseId: "5",
            id: "5-3",
            text: "Important: Group project meeting at 3 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-5/announcement-3",
            creationTime: "2023-08-14T17:45:00.000Z",
            updateTime: "2023-08-14T17:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-3",
        },
        {
            courseId: "5",
            id: "5-4",
            text: "Lab session update: Time changed to 11 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-5/announcement-4",
            creationTime: "2023-08-15T12:15:00.000Z",
            updateTime: "2023-08-15T12:15:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-4",
        },
        {
            courseId: "5",
            id: "5-5",
            text: "Reminder: Final exam on August 23rd.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-5/announcement-5",
            creationTime: "2023-08-16T08:30:00.000Z",
            updateTime: "2023-08-16T08:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-5",
        },
        {
            courseId: "5",
            id: "5-6",
            text: "Important: Course survey to be filled by 5 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-5/announcement-6",
            creationTime: "2023-08-17T16:45:00.000Z",
            updateTime: "2023-08-17T16:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-6",
        },
        {
            courseId: "5",
            id: "5-7",
            text: "Reminder: Course project presentation on August 25th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-5/announcement-7",
            creationTime: "2023-08-18T11:30:00.000Z",
            updateTime: "2023-08-18T11:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-7",
        },
        {
            courseId: "6",
            id: "6-1",
            text: "Welcome to Course 6! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-6/announcement-1",
            creationTime: "2023-08-19T09:00:00.000Z",
            updateTime: "2023-08-19T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },
        {
            courseId: "6",
            id: "6-2",
            text: "Reminder: Assignment due on August 25th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-6/announcement-2",
            creationTime: "2023-08-20T14:30:00.000Z",
            updateTime: "2023-08-20T14:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-2",
        },
        {
            courseId: "6",
            id: "6-3",
            text: "Important: Group project meeting at 3 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-6/announcement-3",
            creationTime: "2023-08-21T17:45:00.000Z",
            updateTime: "2023-08-21T17:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-3",
        },
        {
            courseId: "6",
            id: "6-4",
            text: "Lab session update: Time changed to 11 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-6/announcement-4",
            creationTime: "2023-08-22T12:15:00.000Z",
            updateTime: "2023-08-22T12:15:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-4",
        },
        {
            courseId: "6",
            id: "6-5",
            text: "Reminder: Final exam on August 28th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-6/announcement-5",
            creationTime: "2023-08-23T08:30:00.000Z",
            updateTime: "2023-08-23T08:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-5",
        },
        {
            courseId: "6",
            id: "6-6",
            text: "Important: Course survey to be filled by 5 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-6/announcement-6",
            creationTime: "2023-08-24T16:45:00.000Z",
            updateTime: "2023-08-24T16:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-6",
        },
        {
            courseId: "6",
            id: "6-7",
            text: "Reminder: Course project presentation on September 1st.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-6/announcement-7",
            creationTime: "2023-08-25T11:30:00.000Z",
            updateTime: "2023-08-25T11:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-7",
        },
        {
            courseId: "7",
            id: "7-1",
            text: "Welcome to Course 7! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-7/announcement-1",
            creationTime: "2023-08-26T09:00:00.000Z",
            updateTime: "2023-08-26T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },
        {
            courseId: "7",
            id: "7-2",
            text: "Reminder: Assignment due on September 1st.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-7/announcement-2",
            creationTime: "2023-08-27T14:30:00.000Z",
            updateTime: "2023-08-27T14:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-2",
        },
        {
            courseId: "7",
            id: "7-3",
            text: "Important: Group project meeting at 3 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-7/announcement-3",
            creationTime: "2023-08-28T17:45:00.000Z",
            updateTime: "2023-08-28T17:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-3",
        },
        {
            courseId: "7",
            id: "7-4",
            text: "Lab session update: Time changed to 11 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-7/announcement-4",
            creationTime: "2023-08-29T12:15:00.000Z",
            updateTime: "2023-08-29T12:15:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-4",
        },
        {
            courseId: "7",
            id: "7-5",
            text: "Reminder: Final exam on September 4th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-7/announcement-5",
            creationTime: "2023-08-30T08:30:00.000Z",
            updateTime: "2023-08-30T08:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-5",
        },
        {
            courseId: "7",
            id: "7-6",
            text: "Important: Course survey to be filled by 5 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-7/announcement-6",
            creationTime: "2023-08-31T16:45:00.000Z",
            updateTime: "2023-08-31T16:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-6",
        },
        {
            courseId: "7",
            id: "7-7",
            text: "Reminder: Course project presentation on September 7th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-7/announcement-7",
            creationTime: "2023-09-01T11:30:00.000Z",
            updateTime: "2023-09-01T11:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-7",
        },
        {
            courseId: "8",
            id: "8-1",
            text: "Welcome to Course 8! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-8/announcement-1",
            creationTime: "2023-09-02T09:00:00.000Z",
            updateTime: "2023-09-02T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },
        {
            courseId: "8",
            id: "8-2",
            text: "Reminder: Assignment due on September 8th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-8/announcement-2",
            creationTime: "2023-09-03T14:30:00.000Z",
            updateTime: "2023-09-03T14:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-2",
        },
        {
            courseId: "8",
            id: "8-3",
            text: "Important: Group project meeting at 3 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-8/announcement-3",
            creationTime: "2023-09-04T17:45:00.000Z",
            updateTime: "2023-09-04T17:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-3",
        },
        {
            courseId: "8",
            id: "8-4",
            text: "Lab session update: Time changed to 11 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-8/announcement-4",
            creationTime: "2023-09-05T12:15:00.000Z",
            updateTime: "2023-09-05T12:15:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-4",
        },
        {
            courseId: "8",
            id: "8-5",
            text: "Reminder: Final exam on September 11th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-8/announcement-5",
            creationTime: "2023-09-06T08:30:00.000Z",
            updateTime: "2023-09-06T08:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-5",
        },
        {
            courseId: "8",
            id: "8-6",
            text: "Important: Course survey to be filled by 5 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-8/announcement-6",
            creationTime: "2023-09-07T16:45:00.000Z",
            updateTime: "2023-09-07T16:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-6",
        },
        {
            courseId: "8",
            id: "8-7",
            text: "Reminder: Course project presentation on September 14th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-8/announcement-7",
            creationTime: "2023-09-08T11:30:00.000Z",
            updateTime: "2023-09-08T11:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-7",
        },
        {
            courseId: "9",
            id: "9-1",
            text: "Welcome to Course 9! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-9/announcement-1",
            creationTime: "2023-09-09T09:00:00.000Z",
            updateTime: "2023-09-09T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },
        {
            courseId: "9",
            id: "9-2",
            text: "Reminder: Assignment due on September 15th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-9/announcement-2",
            creationTime: "2023-09-10T14:30:00.000Z",
            updateTime: "2023-09-10T14:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-2",
        },
        {
            courseId: "9",
            id: "9-3",
            text: "Important: Group project meeting at 3 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-9/announcement-3",
            creationTime: "2023-09-11T17:45:00.000Z",
            updateTime: "2023-09-11T17:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-3",
        },
        {
            courseId: "9",
            id: "9-4",
            text: "Lab session update: Time changed to 11 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-9/announcement-4",
            creationTime: "2023-09-12T12:15:00.000Z",
            updateTime: "2023-09-12T12:15:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-4",
        },
        {
            courseId: "9",
            id: "9-5",
            text: "Reminder: Final exam on September 18th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-9/announcement-5",
            creationTime: "2023-09-13T08:30:00.000Z",
            updateTime: "2023-09-13T08:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-5",
        },
        {
            courseId: "9",
            id: "9-6",
            text: "Important: Course survey to be filled by 5 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-9/announcement-6",
            creationTime: "2023-09-14T16:45:00.000Z",
            updateTime: "2023-09-14T16:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-6",
        },
        {
            courseId: "9",
            id: "9-7",
            text: "Reminder: Course project presentation on September 21st.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-9/announcement-7",
            creationTime: "2023-09-15T11:30:00.000Z",
            updateTime: "2023-09-15T11:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-7",
        },
        {
            courseId: "10",
            id: "10-1",
            text: "Welcome to Course 10! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-10/announcement-1",
            creationTime: "2023-09-16T09:00:00.000Z",
            updateTime: "2023-09-16T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },
        {
            courseId: "10",
            id: "10-2",
            text: "Reminder: Assignment due on September 22nd.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-10/announcement-2",
            creationTime: "2023-09-17T14:30:00.000Z",
            updateTime: "2023-09-17T14:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-2",
        },
        {
            courseId: "10",
            id: "10-3",
            text: "Important: Group project meeting at 3 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-10/announcement-3",
            creationTime: "2023-09-18T17:45:00.000Z",
            updateTime: "2023-09-18T17:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-3",
        },
        {
            courseId: "10",
            id: "10-4",
            text: "Lab session update: Time changed to 11 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-10/announcement-4",
            creationTime: "2023-09-19T12:15:00.000Z",
            updateTime: "2023-09-19T12:15:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-4",
        },
        {
            courseId: "10",
            id: "10-5",
            text: "Reminder: Final exam on September 25th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-10/announcement-5",
            creationTime: "2023-09-20T08:30:00.000Z",
            updateTime: "2023-09-20T08:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-5",
        },
        {
            courseId: "10",
            id: "10-6",
            text: "Important: Course survey to be filled by 5 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-10/announcement-6",
            creationTime: "2023-09-21T16:45:00.000Z",
            updateTime: "2023-09-21T16:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-6",
        },
        {
            courseId: "10",
            id: "10-7",
            text: "Reminder: Course project presentation on September 28th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-10/announcement-7",
            creationTime: "2023-09-22T11:30:00.000Z",
            updateTime: "2023-09-22T11:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-7",
        },
        {
            courseId: "11",
            id: "11-1",
            text: "Welcome to Course 11! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-11/announcement-1",
            creationTime: "2023-09-23T09:00:00.000Z",
            updateTime: "2023-09-23T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },
        {
            courseId: "11",
            id: "11-2",
            text: "Reminder: Assignment due on September 29th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-11/announcement-2",
            creationTime: "2023-09-24T14:30:00.000Z",
            updateTime: "2023-09-24T14:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-2",
        },
        {
            courseId: "11",
            id: "11-3",
            text: "Important: Group project meeting at 3 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-11/announcement-3",
            creationTime: "2023-09-25T17:45:00.000Z",
            updateTime: "2023-09-25T17:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-3",
        },
        {
            courseId: "11",
            id: "11-4",
            text: "Lab session update: Time changed to 11 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-11/announcement-4",
            creationTime: "2023-09-26T12:15:00.000Z",
            updateTime: "2023-09-26T12:15:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-4",
        },
        {
            courseId: "11",
            id: "11-5",
            text: "Reminder: Final exam on October 2nd.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-11/announcement-5",
            creationTime: "2023-09-27T08:30:00.000Z",
            updateTime: "2023-09-27T08:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-5",
        },
        {
            courseId: "11",
            id: "11-6",
            text: "Important: Course survey to be filled by 5 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-11/announcement-6",
            creationTime: "2023-09-28T16:45:00.000Z",
            updateTime: "2023-09-28T16:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-6",
        },
        {
            courseId: "11",
            id: "11-7",
            text: "Reminder: Course project presentation on October 5th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-11/announcement-7",
            creationTime: "2023-09-29T11:30:00.000Z",
            updateTime: "2023-09-29T11:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-7",
        },
        {
            courseId: "12",
            id: "12-1",
            text: "Welcome to Course 12! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-12/announcement-1",
            creationTime: "2023-09-30T09:00:00.000Z",
            updateTime: "2023-09-30T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },
        {
            courseId: "12",
            id: "12-2",
            text: "Reminder: Assignment due on October 6th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-12/announcement-2",
            creationTime: "2023-10-01T14:30:00.000Z",
            updateTime: "2023-10-01T14:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-2",
        },
        {
            courseId: "12",
            id: "12-3",
            text: "Important: Group project meeting at 3 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-12/announcement-3",
            creationTime: "2023-10-02T17:45:00.000Z",
            updateTime: "2023-10-02T17:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-3",
        },

        // Announcements for courseId 13
        {
            courseId: "13",
            id: "13-1",
            text: "Welcome to Course 13! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-13/announcement-1",
            creationTime: "2023-10-03T09:00:00.000Z",
            updateTime: "2023-10-03T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },
        {
            courseId: "13",
            id: "13-2",
            text: "Reminder: Assignment due on October 9th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-13/announcement-2",
            creationTime: "2023-10-04T14:30:00.000Z",
            updateTime: "2023-10-04T14:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-2",
        },
        {
            courseId: "13",
            id: "13-3",
            text: "Important: Group project meeting at 3 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-13/announcement-3",
            creationTime: "2023-10-05T17:45:00.000Z",
            updateTime: "2023-10-05T17:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-3",
        },

        // Announcements for courseId 14
        {
            courseId: "14",
            id: "14-1",
            text: "Welcome to Course 14! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-14/announcement-1",
            creationTime: "2023-10-06T09:00:00.000Z",
            updateTime: "2023-10-06T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },
        {
            courseId: "14",
            id: "14-2",
            text: "Reminder: Assignment due on October 12th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-14/announcement-2",
            creationTime: "2023-10-07T14:30:00.000Z",
            updateTime: "2023-10-07T14:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-2",
        },
        {
            courseId: "14",
            id: "14-3",
            text: "Important: Group project meeting at 3 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-14/announcement-3",
            creationTime: "2023-10-08T17:45:00.000Z",
            updateTime: "2023-10-08T17:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-3",
        },
        // Announcements for courseId 15
        {
            courseId: "15",
            id: "15-1",
            text: "Welcome to Course 15! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-15/announcement-1",
            creationTime: "2023-10-09T09:00:00.000Z",
            updateTime: "2023-10-09T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 16
        {
            courseId: "16",
            id: "16-1",
            text: "Welcome to Course 16! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-16/announcement-1",
            creationTime: "2023-10-16T09:00:00.000Z",
            updateTime: "2023-10-16T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 17
        {
            courseId: "17",
            id: "17-1",
            text: "Welcome to Course 17! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-17/announcement-1",
            creationTime: "2023-10-23T09:00:00.000Z",
            updateTime: "2023-10-23T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 18
        {
            courseId: "18",
            id: "18-1",
            text: "Welcome to Course 18! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-18/announcement-1",
            creationTime: "2023-10-30T09:00:00.000Z",
            updateTime: "2023-10-30T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 19
        {
            courseId: "19",
            id: "19-1",
            text: "Welcome to Course 19! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-19/announcement-1",
            creationTime: "2023-11-06T09:00:00.000Z",
            updateTime: "2023-11-06T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 20
        {
            courseId: "20",
            id: "20-1",
            text: "Welcome to Course 20! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-20/announcement-1",
            creationTime: "2023-11-13T09:00:00.000Z",
            updateTime: "2023-11-13T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 21
        {
            courseId: "21",
            id: "21-1",
            text: "Welcome to Course 21! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-21/announcement-1",
            creationTime: "2023-11-20T09:00:00.000Z",
            updateTime: "2023-11-20T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 22
        {
            courseId: "22",
            id: "22-1",
            text: "Welcome to Course 22! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-22/announcement-1",
            creationTime: "2023-11-27T09:00:00.000Z",
            updateTime: "2023-11-27T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 23
        {
            courseId: "23",
            id: "23-1",
            text: "Welcome to Course 23! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-23/announcement-1",
            creationTime: "2023-12-04T09:00:00.000Z",
            updateTime: "2023-12-04T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 24
        {
            courseId: "24",
            id: "24-1",
            text: "Welcome to Course 24! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-24/announcement-1",
            creationTime: "2023-12-11T09:00:00.000Z",
            updateTime: "2023-12-11T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 25
        {
            courseId: "25",
            id: "25-1",
            text: "Welcome to Course 25! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-25/announcement-1",
            creationTime: "2023-12-18T09:00:00.000Z",
            updateTime: "2023-12-18T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },
        {
            courseId: "26",
            id: "26-1",
            text: "Welcome to Course 26! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-26/announcement-1",
            creationTime: "2023-12-25T09:00:00.000Z",
            updateTime: "2023-12-25T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },
        {
            courseId: "26",
            id: "26-2",
            text: "Reminder: Assignment due on January 1st.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-26/announcement-2",
            creationTime: "2023-12-26T14:30:00.000Z",
            updateTime: "2023-12-26T14:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-2",
        },
        {
            courseId: "26",
            id: "26-3",
            text: "Important: Group project meeting at 3 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-26/announcement-3",
            creationTime: "2023-12-27T17:45:00.000Z",
            updateTime: "2023-12-27T17:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-3",
        },

        // Announcements for courseId 27
        {
            courseId: "27",
            id: "27-1",
            text: "Welcome to Course 27! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-27/announcement-1",
            creationTime: "2023-12-28T09:00:00.000Z",
            updateTime: "2023-12-28T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },
        {
            courseId: "27",
            id: "27-2",
            text: "Reminder: Assignment due on January 4th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-27/announcement-2",
            creationTime: "2023-12-29T14:30:00.000Z",
            updateTime: "2023-12-29T14:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-2",
        },
        {
            courseId: "27",
            id: "27-3",
            text: "Important: Group project meeting at 3 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-27/announcement-3",
            creationTime: "2023-12-30T17:45:00.000Z",
            updateTime: "2023-12-30T17:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-3",
        },

        // Announcements for courseId 28
        {
            courseId: "28",
            id: "28-1",
            text: "Welcome to Course 28! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-28/announcement-1",
            creationTime: "2023-12-31T09:00:00.000Z",
            updateTime: "2023-12-31T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },
        {
            courseId: "28",
            id: "28-2",
            text: "Reminder: Assignment due on January 7th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-28/announcement-2",
            creationTime: "2024-01-01T14:30:00.000Z",
            updateTime: "2024-01-01T14:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-2",
        },
        {
            courseId: "28",
            id: "28-3",
            text: "Important: Group project meeting at 3 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-28/announcement-3",
            creationTime: "2024-01-02T17:45:00.000Z",
            updateTime: "2024-01-02T17:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-3",
        },

        // Announcements for courseId 29
        {
            courseId: "29",
            id: "29-1",
            text: "Welcome to Course 29! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-29/announcement-1",
            creationTime: "2024-01-03T09:00:00.000Z",
            updateTime: "2024-01-03T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },
        {
            courseId: "29",
            id: "29-2",
            text: "Reminder: Assignment due on January 10th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-29/announcement-2",
            creationTime: "2024-01-04T14:30:00.000Z",
            updateTime: "2024-01-04T14:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-2",
        },
        {
            courseId: "29",
            id: "29-3",
            text: "Important: Group project meeting at 3 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-29/announcement-3",
            creationTime: "2024-01-05T17:45:00.000Z",
            updateTime: "2024-01-05T17:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-3",
        },

        // Announcements for courseId 30
        {
            courseId: "30",
            id: "30-1",
            text: "Welcome to Course 30! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-30/announcement-1",
            creationTime: "2024-01-06T09:00:00.000Z",
            updateTime: "2024-01-06T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },
        {
            courseId: "30",
            id: "30-2",
            text: "Reminder: Assignment due on January 13th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-30/announcement-2",
            creationTime: "2024-01-07T14:30:00.000Z",
            updateTime: "2024-01-07T14:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-2",
        },
        {
            courseId: "30",
            id: "30-3",
            text: "Important: Group project meeting at 3 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-30/announcement-3",
            creationTime: "2024-01-08T17:45:00.000Z",
            updateTime: "2024-01-08T17:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-3",
        },

        // Announcements for courseId 31
        {
            courseId: "31",
            id: "31-1",
            text: "Welcome to Course 31! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-31/announcement-1",
            creationTime: "2024-01-09T09:00:00.000Z",
            updateTime: "2024-01-09T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },
        {
            courseId: "31",
            id: "31-2",
            text: "Reminder: Assignment due on January 16th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-31/announcement-2",
            creationTime: "2024-01-10T14:30:00.000Z",
            updateTime: "2024-01-10T14:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-2",
        },
        {
            courseId: "31",
            id: "31-3",
            text: "Important: Group project meeting at 3 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-31/announcement-3",
            creationTime: "2024-01-11T17:45:00.000Z",
            updateTime: "2024-01-11T17:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-3",
        },

        // Announcements for courseId 32
        {
            courseId: "32",
            id: "32-1",
            text: "Welcome to Course 32! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-32/announcement-1",
            creationTime: "2024-01-12T09:00:00.000Z",
            updateTime: "2024-01-12T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },
        {
            courseId: "32",
            id: "32-2",
            text: "Reminder: Assignment due on January 19th.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-32/announcement-2",
            creationTime: "2024-01-13T14:30:00.000Z",
            updateTime: "2024-01-13T14:30:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-2",
        },
        {
            courseId: "32",
            id: "32-3",
            text: "Important: Group project meeting at 3 PM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-32/announcement-3",
            creationTime: "2024-01-14T17:45:00.000Z",
            updateTime: "2024-01-14T17:45:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-3",
        },
        {
            courseId: "33",
            id: "33-1",
            text: "Welcome to Course 33! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-33/announcement-1",
            creationTime: "2024-01-16T09:00:00.000Z",
            updateTime: "2024-01-16T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 34
        {
            courseId: "34",
            id: "34-1",
            text: "Welcome to Course 34! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-34/announcement-1",
            creationTime: "2024-01-17T09:00:00.000Z",
            updateTime: "2024-01-17T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 35
        {
            courseId: "35",
            id: "35-1",
            text: "Welcome to Course 35! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-35/announcement-1",
            creationTime: "2024-01-18T09:00:00.000Z",
            updateTime: "2024-01-18T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 36
        {
            courseId: "36",
            id: "36-1",
            text: "Welcome to Course 36! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-36/announcement-1",
            creationTime: "2024-01-19T09:00:00.000Z",
            updateTime: "2024-01-19T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 37
        {
            courseId: "37",
            id: "37-1",
            text: "Welcome to Course 37! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-37/announcement-1",
            creationTime: "2024-01-20T09:00:00.000Z",
            updateTime: "2024-01-20T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 38
        {
            courseId: "38",
            id: "38-1",
            text: "Welcome to Course 38! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-38/announcement-1",
            creationTime: "2024-01-21T09:00:00.000Z",
            updateTime: "2024-01-21T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 39
        {
            courseId: "39",
            id: "39-1",
            text: "Welcome to Course 39! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-39/announcement-1",
            creationTime: "2024-01-22T09:00:00.000Z",
            updateTime: "2024-01-22T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 40
        {
            courseId: "40",
            id: "40-1",
            text: "Welcome to Course 40! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-40/announcement-1",
            creationTime: "2024-01-23T09:00:00.000Z",
            updateTime: "2024-01-23T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 41
        {
            courseId: "41",
            id: "41-1",
            text: "Welcome to Course 41! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-41/announcement-1",
            creationTime: "2024-01-24T09:00:00.000Z",
            updateTime: "2024-01-24T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 42
        {
            courseId: "42",
            id: "42-1",
            text: "Welcome to Course 42! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-42/announcement-1",
            creationTime: "2024-01-25T09:00:00.000Z",
            updateTime: "2024-01-25T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 43
        {
            courseId: "43",
            id: "43-1",
            text: "Welcome to Course 43! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-43/announcement-1",
            creationTime: "2024-01-26T09:00:00.000Z",
            updateTime: "2024-01-26T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 44
        {
            courseId: "44",
            id: "44-1",
            text: "Welcome to Course 44! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-44/announcement-1",
            creationTime: "2024-01-27T09:00:00.000Z",
            updateTime: "2024-01-27T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },

        // Announcements for courseId 45
        {
            courseId: "45",
            id: "45-1",
            text: "Welcome to Course 45! Lecture starts at 9 AM.",
            state: "PUBLISHED",
            alternateLink:
                "https://classroom.google.com/c/course-45/announcement-1",
            creationTime: "2024-01-28T09:00:00.000Z",
            updateTime: "2024-01-28T09:00:00.000Z",
            assigneeMode: "ALL_STUDENTS",
            creatorUserId: "user-1",
        },
    ],
}

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
}
