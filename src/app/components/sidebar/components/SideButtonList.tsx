import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import PlagiarismOutlined from "@mui/icons-material/PlagiarismOutlined";
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import TerminalIcon from '@mui/icons-material/Terminal';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';

import List from "@mui/material/List";
import ListItemButton from '@mui/material/ListItemButton';
import HoverButton from '../../HoverButton';
import { GitHub } from '@mui/icons-material';

export default function SideButtonList() {
    return (
        <List>
            <HoverButton href='https://github.com/GitGeddes/obsidian-portfolio'>
                <GitHub fontSize='small' />
            </HoverButton>
            <ListItemButton>
                {/* lol I just HAD to use this one */}
                <PlagiarismOutlined fontSize='small' />
            </ListItemButton>
            <HoverButton href='Graph'>
                <HubOutlinedIcon fontSize='small' />
            </HoverButton>
            <ListItemButton>
                <ContentCopyOutlinedIcon fontSize='small' />
            </ListItemButton>
            <ListItemButton>
                <TerminalIcon fontSize='small' />
            </ListItemButton>
            <ListItemButton>
                <WidgetsOutlinedIcon fontSize='small' />
            </ListItemButton>
            <ListItemButton>
                <CalendarTodayOutlinedIcon fontSize='small' />
            </ListItemButton>
        </List>
    );
}