'use client'

import { PropsWithChildren, useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItemText from "@mui/material/ListItemText";
import styles from '../noteslist.module.css';

type FolderButtonProps = {
    title: string;
}

export default function FolderButton(props: FolderButtonProps & PropsWithChildren) {
    const [isOpen, setIsOpen] = useState(true);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <ListItemButton onClick={handleClick}>
                {isOpen ? <ExpandMore /> : <ChevronRightIcon />}
                <ListItemText primary={props.title} />
            </ListItemButton>
            <div className={styles.folder_list}>
                <Collapse in={isOpen} timeout={"auto"}>
                    {props.children}
                </Collapse>
            </div>
        </div>
    );
}