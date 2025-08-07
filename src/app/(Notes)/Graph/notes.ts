export type NoteType = {
    path: string;
    tags: string[];
    links: string[];
}

type NotesType = {
    [key: string]: NoteType;
}

export const notes: NotesType = {
    'Portfolio': {
        path: 'Notes/Projects/Portfolio',
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
        path: 'Notes/Projects/Video Clipper',
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
        path: 'Notes/Experience/Groupie',
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
        path: 'Notes/Experience/Amazon',
        tags: [
            '#experience'
        ],
        links: []
    },
    'React': {
        path: 'Notes/Areas/React',
        tags: [],
        links: [
            'React Native'
        ]
    },
    'Tauri': {
        path: 'Notes/Areas/Tauri',
        tags: [],
        links: []
    },
    'React Native': {
        path: 'Notes/Areas/React Native',
        tags: [],
        links: [
            'React'
        ]
    },
    'Firebase': {
        path: 'Notes/Areas/Firebase',
        tags: [],
        links: []
    },
    'Next.js': {
        path: 'Notes/Areas/Next.js',
        tags: [],
        links: []
    },
    '#projects': {
        path: 'Tags/#projects',
        tags: [],
        links: []
    },
    '#projects/GitHub': {
        path: 'Tags/#projects/GitHub',
        tags: [],
        links: []
    },
    '#experience': {
        path: 'Tags/#experience',
        tags: [],
        links: []
    }
}