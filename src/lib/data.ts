export interface Repository {
    name: string;
    status: "Public" | "Private";
    language: string;
    storage: string;
    lastUpdated: string;
}

export const repositories: Repository[] = [
    {
        name: "design-system",
        status: "Public",
        language: "TypeScript",
        storage: "4536 KB",
        lastUpdated: "2 hours ago",
    },
    {
        name: "blog app",
        status: "Private",
        language: "React",
        storage: "6536 KB",
        lastUpdated: "2 days ago",
    },
    {
        name: "portfolio",
        status: "Public",
        language: "HTML/CSS",
        storage: "1536 KB",
        lastUpdated: "2 weeks ago",
    },
    {
        name: "e-commerce",
        status: "Private",
        language: 'Next.js',
        storage: "8536 KB",
        lastUpdated: "2 months ago",
    },
    {
        name: "social media",
        status: "Private",
        language: "PHP",
        storage: "2536 KB",
        lastUpdated: "5 days ago",
    },
    {
        name: "chat app",
        status: "Public",
        language: "JavaScript",
        storage: "3536 KB",
        lastUpdated: "2 hours ago",
    },
    {
        name: "e-learning",
        status: "Private",
        language: "Python",
        storage: "7536 KB",
        lastUpdated: "2 days ago",
    },
    {
        name: "food delivery",
        status: "Public",
        language: "Ruby",
        storage: "9536 KB",
        lastUpdated: "2 weeks ago",
    },
    {
        name: "music app",
        status: "Private",
        language: 'Dart',
        storage: "1536 KB",
        lastUpdated: "2 months ago",
    },
    {
        name: "weather app",
        status: "Private",
        language: "Go",
        storage: "2536 KB",
        lastUpdated: "5 days ago",
    },
    {
        name: "movie app",
        status: "Public",
        language: "Python",
        storage: "3536 KB",
        lastUpdated: "2 hours ago",
    },
]