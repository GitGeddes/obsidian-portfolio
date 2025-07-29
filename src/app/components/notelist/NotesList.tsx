import List from "@mui/material/List";
import FolderButton from "./components/FolderButton";
import NoteButton from "./components/NoteButton";

export default function NotesList() {
    return (
        <List>
            <FolderButton title="Notes">
                <FolderButton title="Projects">
                    <NoteButton title="Portfolio"/>
                    <NoteButton title="VideoClipper"/>
                </FolderButton>
            </FolderButton>
        </List>
    );
}