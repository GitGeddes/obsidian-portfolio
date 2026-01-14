'use client'

import { Collapse } from "@mui/material";
import NotesList from "../notelist/NotesList";
import SideButtonList from "./components/SideButtonList";

import ViewSidebarOutlinedIcon from '@mui/icons-material/ViewSidebarOutlined';

import ListItemButton from '@mui/material/ListItemButton';
import SideBarTopButtonsList from "./components/SideBarTopButtonsList";
import Calendar from "./components/Calendar";
import NoteListTopBar from "../notelist/components/NoteListTopBar";
import useOpenable from "@/app/hooks/useOpenable";

export default function SideBar() {
    const { isOpen, handleClick } = useOpenable(true);

    return (
        <div className="row secondaryBackground">
            <div className="rightBorder">
                <div className="topbar row">
                    <ListItemButton onClick={handleClick}
                        sx={{
                            ":hover": {
                                backgroundColor: "#454545"
                            }
                        }}
                    >
                        <ViewSidebarOutlinedIcon fontSize='small'/>
                    </ListItemButton>
                </div>
                <SideButtonList />
            </div>
            <Collapse
                className={(isOpen ? "rightBorder" : "")}
                in={isOpen}
                timeout={"auto"}
                orientation={"horizontal"}>
                    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
                        <SideBarTopButtonsList />
                        <NoteListTopBar />
                        <NotesList />
                        <Calendar username="GitGeddes" />
                    </div>
            </Collapse>
        </div>
    );
}