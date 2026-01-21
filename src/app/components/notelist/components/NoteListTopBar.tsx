import List from "@mui/material/List";
import ListItemButton from '@mui/material/ListItemButton';

import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import CreateNewFolderOutlinedIcon from '@mui/icons-material/CreateNewFolderOutlined';
import SortByAlphaOutlinedIcon from '@mui/icons-material/SortByAlphaOutlined';
import ViewDayOutlinedIcon from '@mui/icons-material/ViewDayOutlined';
import UnfoldLessOutlinedIcon from '@mui/icons-material/UnfoldLessOutlined';
import { useTabNavigation } from '@/app/hooks/useTabNavigation';
import HoverButton from "../../HoverButton";

export default function NoteListTopBar() {
    const { navigateToTab } = useTabNavigation();

    return (
        <List className="row">
            <HoverButton
                onClick={() => navigateToTab('index', '/')}
            >
                <EditNoteOutlinedIcon fontSize='small' />
            </HoverButton>
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