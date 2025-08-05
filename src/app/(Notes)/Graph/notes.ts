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
            '#projects',
            '#experience'
        ],
        links: [
            'React Native',
            'Firebase'
        ]
    },
    'Amazon': {
        tags: [
            '#experience'
        ],
        links: []
    },
    'React': {
        tags: [],
        links: [
            'React Native'
        ]
    },
    'Tauri': {
        tags: [],
        links: []
    },
    'React Native': {
        tags: [],
        links: [
            'React'
        ]
    },
    'Firebase': {
        tags: [],
        links: []
    },
    'Next.js': {
        tags: [],
        links: []
    },
    '#projects': {
        tags: [],
        links: []
    },
    '#projects/GitHub': {
        tags: [],
        links: []
    },
    '#experience': {
        tags: [],
        links: []
    }
}