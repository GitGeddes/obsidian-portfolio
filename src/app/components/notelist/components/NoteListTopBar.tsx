import Link from 'next/link';
import List from "@mui/material/List";
import ListItemButton from '@mui/material/ListItemButton';

import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import SortByAlphaOutlinedIcon from '@mui/icons-material/SortByAlphaOutlined';
import ViewDayOutlinedIcon from '@mui/icons-material/ViewDayOutlined';
import UnfoldLessOutlinedIcon from '@mui/icons-material/UnfoldLessOutlined';

export default function NoteListTopBar() {
    return (
        <List className="row">
            <Link href={"/"}>
                <ListItemButton
                    sx={{
                        ":hover": {
                            backgroundColor: "#454545"
                        }
                    }}
                >
                    <EditNoteOutlinedIcon fontSize='small' />
                </ListItemButton>
            </Link>
            <ListItemButton disabled>
                <CreateNewFolderOutlinedIcon fontSize='small' />
            </ListItemButton>
            <ListItemButton disabled>
                <SortByAlphaOutlinedIcon fontSize='small' />
            </ListItemButton>
            <ListItemButton disabled>
                <ViewDayOutlinedIcon fontSize='small' />
            </ListItemButton>
            <ListItemButton disabled>
                <UnfoldLessOutlinedIcon fontSize='small' />
            </ListItemButton>
        </List>
    );
}