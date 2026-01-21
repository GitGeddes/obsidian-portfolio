'use client'

import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useTabNavigation } from "@/app/hooks/useTabNavigation";

type NoteButtonProps = {
    id: string;
    title: string;
}

export default function NoteButton(props: NoteButtonProps) {
    const { navigateToTab } = useTabNavigation();

    const handleClick = () => {
        navigateToTab(props.id, props.title);
    }

    return (
        <ListItemButton
            className="linkHover"
            onClick={handleClick}
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
    );
}