import { PropsWithChildren } from "react";
import NoteRow from "./components/NoteRow";

export default function NoteText(props: PropsWithChildren) {
    return (
        <div className="note column noteBackground">
            <NoteRow>NoteText</NoteRow>
            <NoteRow>{props.children}</NoteRow>
        </div>
    );
}