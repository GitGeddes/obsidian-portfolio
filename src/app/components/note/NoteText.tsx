import { PropsWithChildren } from "react";
import NoteRow from "./components/NoteRow";

export default function NoteText(props: PropsWithChildren) {
    return (
        <div className="noteBackground">
            <NoteRow>NoteText</NoteRow>
            <NoteRow>{props.children}</NoteRow>
        </div>
    );
}