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
import { useTabNavigation } from '@/app/hooks/useTabNavigation';

export default function SideButtonList() {
    const { navigateToTab } = useTabNavigation();

    return (
        <List>
            <HoverButton href='https://github.com/GitGeddes/obsidian-portfolio'>
                <GitHub fontSize='small' />
            </HoverButton>
            <HoverButton href='docs/index.html'>
                {/* lol I just HAD to use this one */}
                <PlagiarismOutlined fontSize='small' />
            </HoverButton>
            <HoverButton onClick={() => navigateToTab('Graph', '/Graph')}>
                <HubOutlinedIcon fontSize='small' />
            </HoverButton>
            <ListItemButton disabled>
                <ContentCopyOutlinedIcon fontSize='small' />
            </ListItemButton>
            <ListItemButton disabled>
                <TerminalIcon fontSize='small' />
            </ListItemButton>
            <ListItemButton disabled>
                <WidgetsOutlinedIcon fontSize='small' />
            </ListItemButton>
            <ListItemButton disabled>
                <CalendarTodayOutlinedIcon fontSize='small' />
            </ListItemButton>
        </List>
    );
}