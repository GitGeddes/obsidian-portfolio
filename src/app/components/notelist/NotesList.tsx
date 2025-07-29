import List from "@mui/material/List";
import FolderButton from "./components/FolderButton";
import NoteButton from "./components/NoteButton";
import NoteListTopBar from "./components/NoteListTopBar";

export default function NotesList() {
    return (
        <>
            <NoteListTopBar />
            <List>
                <FolderButton title="Notes">
                    <FolderButton title="Projects">
                        <NoteButton title="Portfolio"/>
                        <NoteButton title="VideoClipper"/>
                    </FolderButton>
                </FolderButton>
            </List>
        </>
    );
}