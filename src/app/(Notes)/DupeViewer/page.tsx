/**
 * The page displaying the DupeViewer experience note.
 * @module app/(Notes)/DupeViewer
 * @document DupeViewer.md
 */

import Note from "@/app/components/note/Note";

import Markdown from './DupeViewer.md';

/**
 * creates the DupeViewer note.
 * @returns a React element with the DupeViewer Markdown embedded.
 */
export default function DupeViewerNote() {
    return (
        <Note title='DupeViewer'>
            <Markdown />
        </Note>
    );
}