/**
 * The page displaying the Groupie experience note.
 * @module app/(Notes)/Groupie
 * @document Groupie.md
 */

import Note from "@/app/components/note/Note";

import Markdown from './Groupie.md';

/**
 * creates the Groupie note.
 * @returns a React element with the Groupie Markdown embedded.
 */
export default function GroupieNote() {
    return (
        <Note title='Groupie'>
            <Markdown />
        </Note>
    );
}