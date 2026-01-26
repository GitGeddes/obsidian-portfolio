/**
 * The page displaying the FishyGame project note.
 * @module app/(Notes)/FishyGame
 * @document FishyGame.md
 */

import Note from "@/app/components/note/Note";

import Markdown from './FishyGame.md';

/**
 * creates the FishyGame note.
 * @returns a React element with the FishyGame Markdown embedded.
 */
export default function FishyGameNote() {
    return (
        <Note title='FishyGame'>
            <Markdown />
        </Note>
    );
}