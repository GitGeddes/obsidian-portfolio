export type NoteType = {
    tags: string[];
    links: string[];
}

type NotesType = {
    [key: string]: NoteType;
}

export const notes: NotesType = {
    'Portfolio': {
        tags: [
            '#projects',
            '#projects/GitHub'
        ],
        links: [
            'React',
            'Next.js'
        ]
    },
    'Video Clipper': {
        tags: [
            '#projects',
            '#projects/GitHub'
        ],
        links: [
            'React',
            'Tauri'
        ]
    },
    'Groupie': {
        tags: [
            '#projects'
        ],
        links: [
            'React Native',
            'Firebase'
        ]
    },
    'Amazon': {
        tags: [],
        links: []
    },
    'React': {
        tags: [],
        links: []
    },
    'Tauri': {
        tags: [],
        links: []
    },
    'React Native': {
        tags: [],
        links: []
    },
    'Firebase': {
        tags: [],
        links: []
    },
    'Next.js': {
        tags: [],
        links: []
    }
}