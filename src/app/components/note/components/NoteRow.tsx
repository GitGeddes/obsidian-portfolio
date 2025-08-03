import { PropsWithChildren } from "react";
import LineNumbers from "../../LineNumbers";

export default function NoteRow(props: PropsWithChildren) {
    return (
        <LineNumbers style={{ ["--line-margin-top" as string]: "0.2em" }}>
            <p>{props.children}</p>
        </LineNumbers>
    );
}