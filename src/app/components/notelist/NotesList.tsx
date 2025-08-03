import List from "@mui/material/List";
import FolderButton from "./components/FolderButton";
import NoteButton from "./components/NoteButton";
import NoteListTopBar from "./components/NoteListTopBar";

export default function NotesList() {
    return (
        <>
            <NoteListTopBar />
            <List>
                <FolderButton title="Daily" canOpen={false}/>
                <FolderButton title="Notes">
                    <FolderButton title="Areas" canOpen={false}/>
                    <FolderButton title="Experience">
                        <NoteButton title="Amazon"/>
                        <NoteButton title="Groupie"/>
                    </FolderButton>
                    <FolderButton title="Projects">
                        <NoteButton title="Portfolio"/>
                        <NoteButton title="VideoClipper"/>
                    </FolderButton>
                </FolderButton>
                <FolderButton title="Templates" canOpen={false}/>
            </List>
        </>
    );
}