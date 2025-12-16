/**
 * The wrapper for note files that adds the proper styling and functionality.
 * @module app/components/note/Note
 */

import { PropsWithChildren } from "react";
import NoteBreadcrumb from "./components/NoteBreadcrumb";
import { notes } from "@/app/(Notes)/Graph/notes";

/**
 * The input properties for the {@link Note} function.
 */
export type NoteProps = {
    /** the title of the note. */
    title: string;
}

/**
 * Create a page that looks like a note from Obsidian using the given title and React children elements.
 * @param props the properties object including the title and React children.
 * @param props.title the title of the note.
 * @param props.children a React text element.
 * @returns a React element.
 */
export default function Note(props: NoteProps & PropsWithChildren) {
    return(
        <div className="note">
            <NoteBreadcrumb path={notes[props.title] ? notes[props.title].path : props.title}/>
            {props.children}
        </div>
    );
}