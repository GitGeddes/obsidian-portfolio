'use client'

import ListItemButton from "@mui/material/ListItemButton";
import CloseIcon from '@mui/icons-material/Close';
import ListItemText from "@mui/material/ListItemText";
import useCurrentPath from "../hooks/useCurrentPath";
import { useTabNavigation } from "@/app/hooks/useTabNavigation";
import { Tab } from "@/store/slices/tabSlice";

type TopBarButtonProps = {
    tab: Tab;
    index: number;
    activeTabId: string | null;
    onTabClick: (id: string) => void;
    onTabClose: (id: string) => void;
    draggedIndex: number | null;
    dragOverIndex: number | null;
    handleDragStart: (e: React.DragEvent, index: number) => void;
    handleDragOver: (e: React.DragEvent, index: number) => void;
    handleDragLeave: () => void;
    handleDrop: (e: React.DragEvent, index: number) => void;
    handleDragEnd: () => void;
}

export default function TopBarButton(props: TopBarButtonProps) {
    const { isCurrentPath } = useCurrentPath({ id: props.tab.id, href: props.tab.href });
    const { navigateToTab } = useTabNavigation();

    const handleTabClick = () => {
        props.onTabClick(props.tab.id);
        navigateToTab(props.tab.id, props.tab.title, props.tab.href);
    }

    return (
        <div
            className={`${'topBarButton'}
                ${props.activeTabId === props.tab.id ? 'active' : ''}
                ${props.dragOverIndex === props.index ? 'dragOver' : ''}
                ${props.draggedIndex === props.index ? 'dragging' : ''}`}
            draggable
            onDragStart={e => props.handleDragStart(e, props.index)}
            onDragOver={e => props.handleDragOver(e, props.index)}
            onDragLeave={props.handleDragLeave}
            onDrop={e => props.handleDrop(e, props.index)}
            onDragEnd={props.handleDragEnd}
            onClick={handleTabClick}
        >
            <ListItemButton
                className={`${'topBarButton'} ${isCurrentPath() ? 'active' : ''}`}
            >
                <ListItemText
                    primary={props.tab.title}
                    slotProps={{
                        primary: {
                            className: isCurrentPath() ? 'topBarButtonText' : 'topBarButtonTextInactive'
                        }
                    }}
                />
                <CloseIcon
                    className={'closeButton'}
                    onClick={e => {
                        e.stopPropagation();
                        props.onTabClose(props.tab.id);
                    }}
                    aria-label={`Close ${props.tab.title}`}
                    fontSize={'small'}
                />
            </ListItemButton>
        </div>
    );
}