/**
 * @module app/components/notelist/NotesList
 */

import List from "@mui/material/List";
import FolderButton from "./components/FolderButton";
import NoteButton from "./components/NoteButton";

export default function NotesList() {
    return (
        <div className="notesList bottomBorder" >
            <List>
                <FolderButton title="Daily" canOpen={false}/>
                <FolderButton title="Notes">
                    <FolderButton title="Areas" canOpen={false}/>
                    <FolderButton title="Experience">
                        <NoteButton id="Amazon" title="Amazon"/>
                        <NoteButton id="Groupie" title="Groupie"/>
                    </FolderButton>
                    <FolderButton title="Projects">
                        <NoteButton id="Portfolio" title="Portfolio"/>
                        <NoteButton id="VideoClipper" title="VideoClipper"/>
                    </FolderButton>
                </FolderButton>
                <FolderButton title="Templates" canOpen={false}/>
            </List>
        </div>
    );
}