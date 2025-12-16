/**
 * The list of notes and connections used by the graph defined in {@link "app/(Notes)/Graph" | Graph}.
 * @module app/(Notes)/Graph/notes
 */

/**
 * a note to be used in the Graph page.
 */
export type NoteType = {
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
        link: '/',
        path: 'index',
        tags: [],
        links: [
            'Portfolio',
            'VideoClipper',
            'Groupie',
            'Amazon'
        ]
    },
    'Portfolio': {
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
    'Groupie': {
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
    'Amazon': {
        link: 'Amazon',
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