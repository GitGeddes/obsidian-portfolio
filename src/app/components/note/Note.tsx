import { PropsWithChildren } from "react";
import NoteBreadcrumb from "./components/NoteBreadcrumb";
import { notes } from "@/app/(Notes)/Graph/notes";

type NoteProps = {
    title: string;
}

export default function Note(props: NoteProps & PropsWithChildren) {
    return(
        <div className="note">
            <NoteBreadcrumb path={notes[props.title] ? notes[props.title].path : props.title}/>
            {props.children}
        </div>
    );
}