'use client'

import NoteText from "@/app/components/note/NoteText";
import Note from "@/app/components/note/Note";

import Markdown from './Video Clipper.md';

export default function VideoClipper() {
    return (
        <Note>
            <NoteText>
                Video Clipper page
            </NoteText>
            <Markdown />
        </Note>
    );
}