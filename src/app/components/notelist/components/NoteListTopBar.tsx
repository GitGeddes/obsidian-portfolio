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
            <ListItemButton>
                <CreateNewFolderOutlinedIcon fontSize='small' />
            </ListItemButton>
            <ListItemButton>
                <SortByAlphaOutlinedIcon fontSize='small' />
            </ListItemButton>
            <ListItemButton>
                <ViewDayOutlinedIcon fontSize='small' />
            </ListItemButton>
            <ListItemButton>
                <UnfoldLessOutlinedIcon fontSize='small' />
            </ListItemButton>
        </List>
    );
}