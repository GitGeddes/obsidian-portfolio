/**
 * The main landing page and index of the portfolio.
 * @module app/Index
 */

import Note from "./components/note/Note";

import Markdown from './index.md';

/**
 * Shows the main landing page.
 * 
 * @returns a React element of the landing page.
 */
export default function Index() {
    return (
        <Note title="index">
            <Markdown />
        </Note>
    );
}
