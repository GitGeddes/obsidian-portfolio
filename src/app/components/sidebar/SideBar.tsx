'use client'

import { Collapse } from "@mui/material";
import NotesList from "../notelist/NotesList";
import SideButtonList from "./components/SideButtonList";

import ViewSidebarOutlinedIcon from '@mui/icons-material/ViewSidebarOutlined';

import SideBarTopButtonsList from "./components/SideBarTopButtonsList";
import Calendar from "./components/Calendar";
import NoteListTopBar from "../notelist/components/NoteListTopBar";
import useOpenable from "@/app/hooks/useOpenable";
import HoverButton from "../HoverButton";

export default function SideBar() {
    const { isOpen, handleClick } = useOpenable(true);

    return (
        <div className="row secondaryBackground">
            <div className="rightBorder">
                <div className="topbar row">
                    <HoverButton onClick={handleClick}>
                        <ViewSidebarOutlinedIcon fontSize='small'/>
                    </HoverButton>
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