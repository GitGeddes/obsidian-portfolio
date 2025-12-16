/**
 * The page displaying the Amazon experience note.
 * @module app/(Notes)/Amazon
 * @document Amazon.md
 */

import Note from "@/app/components/note/Note";

import Markdown from './Amazon.md';

/**
 * creates the Amazon note.
 * @returns a React element with the Amazon Markdown embedded.
 */
export default function AmazonNote() {
    return (
        <Note title='Amazon'>
            <Markdown />
        </Note>
    );
}