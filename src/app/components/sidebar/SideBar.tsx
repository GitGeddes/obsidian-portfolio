'use client'

import { useState } from "react";

import { Collapse } from "@mui/material";
import NotesList from "../notelist/NotesList";
import SideButtonList from "./components/SideButtonList";

import ViewSidebarOutlinedIcon from '@mui/icons-material/ViewSidebarOutlined';

import ListItemButton from '@mui/material/ListItemButton';
import SideBarTopButtonsList from "./components/SideBarTopButtonsList";

export default function SideBar() {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className="row secondaryBackground">
            <div className="rightBorder">
                <div className="topbar row">
                    <ListItemButton onClick={handleClick}>
                        <ViewSidebarOutlinedIcon fontSize='small' />
                    </ListItemButton>
                </div>
                <SideButtonList />
            </div>
            <Collapse
                className={(isOpen ? "rightBorder" : "")}
                in={isOpen}
                timeout={"auto"}
                orientation={"horizontal"}>
                <SideBarTopButtonsList />
                <NotesList />
            </Collapse>
        </div>
    );
}