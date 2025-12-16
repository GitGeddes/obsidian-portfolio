/**
 * The page displaying the Obsidian portfolio project note.
 * @module app/(Notes)/Portfolio
 * @document Obsidian Portfolio.md
 */

import Note from "@/app/components/note/Note";

import Markdown from './Obsidian Portfolio.md';

/**
 * creates the Portfolio note.
 * @returns a React element with the Amazon Markdown embedded.
 */
export default function Portfolio() {
    return (
        <Note title='Portfolio'>
            <Markdown />
        </Note>
    );
}