'use client'

import { PropsWithChildren, useState } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ListItemText from "@mui/material/ListItemText";
import styles from '../noteslist.module.css';
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

type FolderButtonProps = {
    title: string;
    canOpen?: boolean;
}

export default function FolderButton({
  title,
  canOpen = true,
  children
}: FolderButtonProps & PropsWithChildren) {
    const [isOpen, setIsOpen] = useState(canOpen);

    const handleClick = () => {
        setIsOpen(!isOpen && canOpen);
    }

    return (
        <div className="mt-1">
            <ListItemButton onClick={handleClick}
              sx={{
                height: 25,
                ":hover": {
                  backgroundColor: "#454545"
                }
              }}
            >
                {/* https://mui.com/material-ui/react-list/#customization */}
                <KeyboardArrowDown
                  className="secondaryTextColor"
                  fontSize="small"
                  sx={[
                    {
                      ml: -1, // margin left
                      transition: '0.2s',
                    },
                    isOpen
                      ? {
                          transform: 'rotate(0)',
                        }
                      : {
                          transform: 'rotate(-90deg)',
                        },
                  ]}
                />
                <ListItemText primary={title} slotProps={{ primary: { fontSize: 14 }}} />
            </ListItemButton>
            <div className={`${styles.folder_list} leftBorder`}>
                <Collapse in={isOpen} timeout={"auto"}>
                    {children}
                </Collapse>
            </div>
        </div>
    );
}