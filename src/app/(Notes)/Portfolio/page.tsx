'use client'

import NoteText from "@/app/components/note/NoteText";
import Note from "@/app/components/note/Note";

import Markdown from './Obsidian Portfolio.md';

export default function Portfolio() {
    return (
        <Note>
            <NoteText>
                Portfolio page
            </NoteText>
            <Markdown />
        </Note>
    );
}