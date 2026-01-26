/**
 * The list of notes and connections used by the graph defined in {@link "app/(Notes)/Graph" | Graph}.
 * @module app/(Notes)/Graph/notes
 */

/**
 * a note to be used in the Graph page.
 */
export type NoteType = {
    title?: string;
    link?: string;
    path: string;
    tags: string[];
    links: string[];
}

/**
 * a dictionary of `NoteType`.
 * @internal
 */
type NotesType = {
    [key: string]: NoteType;
}

/**
 * the list of notes used in the Graph page.
 */
export const notes: NotesType = {
    'index': {
        title: 'index',
        link: '/',
        path: 'index',
        tags: [],
        links: [
            'Groupie',
            'Amazon',
            'Portfolio',
            'VideoClipper',
            'FishyGame'
        ]
    },
    'Amazon': {
        title: 'Amazon',
        link: 'Amazon',
        path: 'Notes/Experience/Amazon',
        tags: [
            '#experience'
        ],
        links: [
            'AWS'
        ]
    },
    'Groupie': {
        title: 'Groupie',
        link: 'Groupie',
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
    'Portfolio': {
        title: 'Portfolio',
        link: 'Portfolio',
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
    'VideoClipper': {
        title: 'VideoClipper',
        link: 'VideoClipper',
        path: 'Notes/Projects/VideoClipper',
        tags: [
            '#projects',
            '#projects/GitHub'
        ],
        links: [
            'React',
            'Tauri'
        ]
    },
    'FishyGame': {
        title: 'FishyGame',
        link: 'FishyGame',
        path: 'Notes/Projects/FishyGame',
        tags: [
            '#projects',
            '#projects/GitHub',
            '#gamedev'
        ],
        links: [
            'Unity'
        ]
    },
    'AWS': {
        path: 'Notes/Areas/AWS',
        tags: [],
        links: []
    },
    'Firebase': {
        path: 'Notes/Areas/Firebase',
        tags: [],
        links: []
    },
    'React': {
        path: 'Notes/Areas/React',
        tags: [
            '#frameworks'
        ],
        links: [
            'React Native'
        ]
    },
    'Tauri': {
        path: 'Notes/Areas/Tauri',
        tags: [
            '#frameworks'
        ],
        links: []
    },
    'React Native': {
        path: 'Notes/Areas/React Native',
        tags: [
            '#frameworks'
        ],
        links: [
            'React'
        ]
    },
    'Next.js': {
        path: 'Notes/Areas/Next.js',
        tags: [
            '#frameworks'
        ],
        links: []
    },
    'Unity': {
        path: 'Notes/Areas/Unity',
        tags: [],
        links: []
    },
    '#experience': {
        path: 'Tags/#experience',
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
    '#frameworks': {
        path: 'Tags/#frameworks',
        tags: [],
        links: []
    },
    '#gamedev': {
        path: 'Tags/#gamedev',
        tags: [],
        links: []
    }
}