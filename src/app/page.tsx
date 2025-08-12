import Note from "./components/note/Note";

import Markdown from './index.md';

export default function Index() {
    return (
        <Note title="index">
            <Markdown />
        </Note>
    );
}
