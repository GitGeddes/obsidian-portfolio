/**
 * The page displaying the Video Clipper project note.
 * @module app/(Notes)/VideoClipper
 * @document Video Clipper.md
 */

import Note from "@/app/components/note/Note";

import Markdown from './Video Clipper.md';

/**
 * creates the Video Clipper note.
 * @returns a React element with the Video Clipper Markdown embedded.
 */
export default function VideoClipper() {
    return (
        <Note title='VideoClipper'>
            <Markdown />
        </Note>
    );
}