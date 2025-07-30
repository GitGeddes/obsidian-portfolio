import { PropsWithChildren } from "react";

export default function NoteRow(props: PropsWithChildren) {
    return (
        <pre className="lineNumbers row">
            <p>{props.children}</p>
        </pre>
    );
}