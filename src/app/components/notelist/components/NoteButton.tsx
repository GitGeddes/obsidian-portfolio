import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

type NoteButtonProps = {
    title: string
}

export default function NoteButton(props: NoteButtonProps) {
    return (
        <Link href={`/${props.title}`}>
            <ListItemButton
                className="linkHover"
                sx={{
                    height: 25,
                    marginTop: 1,
                    marginBottom: 0.5,
                    ":hover": {
                        backgroundColor: "#454545"
                    }
                }}
            >
                <ListItemText primary={props.title} slotProps={{ primary: { fontSize: 14 }}} />
            </ListItemButton>
        </Link>
    );
}