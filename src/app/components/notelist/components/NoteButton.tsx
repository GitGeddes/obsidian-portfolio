import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

type NoteButtonProps = {
    title: string
}

export default function NoteButton(props: NoteButtonProps) {
    return (
        <Link href={`/${props.title}`}>
            <ListItemButton>
                <ListItemText primary={props.title} />
            </ListItemButton>
        </Link>
    );
}