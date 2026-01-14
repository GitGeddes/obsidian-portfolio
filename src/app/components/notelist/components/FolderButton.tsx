/**
 * A container to create a folder dropdown within the {@link "app/components/notelist/NotesList" | NotesList} sidebar.
 * @module app/components/notelist/components/FolderButton
 */
'use client'

import { PropsWithChildren } from "react";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ListItemText from "@mui/material/ListItemText";
import styles from '../noteslist.module.css';
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import useOpenable from "@/app/hooks/useOpenable";

/**
 * The input properties for the {@link FolderButton} function.
 * @prop {string} title - the text of the button.
 * @prop {boolean} canOpen - (optional) whether the folder can be collapsed.
 */
export type FolderButtonProps = {
    title: string;
    /** @defaultValue `true` */
    canOpen?: boolean;
}

/**
 * Create a button for a folder that can collapse its contents, given the option.
 * @param props the function properties, including a React child text element.
 * @param props.title the title of the folder.
 * @param props.canOpen (optional) whether the folder can be collapsed.
 * @param props.children a React text element.
 * @returns a React element.
 */
export default function FolderButton({
    title,
    canOpen = true,
    children
}: FolderButtonProps & PropsWithChildren) {
    const { isOpen, handleClick } = useOpenable(canOpen);

    return (
        <div className="mt-1">
            <ListItemButton onClick={handleClick} disabled={!canOpen}
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
                <Collapse in={isOpen} timeout={"auto"} data-testid="collapse">
                    {children}
                </Collapse>
            </div>
        </div>
    );
}