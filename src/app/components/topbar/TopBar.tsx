'use client'

import useTabList from '@/app/components/topbar/hooks/useTabList';
import useTabDragAndDrop from '@/app/components/topbar/hooks/useTabDragAndDrop';
import TopBarButton from './components/TopBarButton';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import { useTabNavigation } from '@/app/hooks/useTabNavigation';
import { ListItemButton } from '@mui/material';

export default function TopBar() {
    const {
        tabs,
        activeTabId,
        closeTab,
        setActiveTab,
        reorderTabs
    } = useTabList();

    const {
        draggedIndex,
        dragOverIndex,
        handleDragStart,
        handleDragOver,
        handleDragLeave,
        handleDrop,
        handleDragEnd
    } = useTabDragAndDrop({ onReorder: reorderTabs });

    const { navigateToTab } = useTabNavigation();

    return (
        <Stack
            className={'topbar row'}
            direction={'row'}
            divider={<Divider orientation={'vertical'} variant={'inset'} className={'secondaryBackground'} />}
            spacing={0.5}
        >
            {tabs.map((tab, index) => (
                <TopBarButton
                    key={tab.id}
                    tab={tab}
                    index={index}
                    activeTabId={activeTabId}
                    onTabClick={setActiveTab}
                    onTabClose={closeTab}
                    draggedIndex={draggedIndex}
                    dragOverIndex={dragOverIndex}
                    handleDragStart={handleDragStart}
                    handleDragOver={handleDragOver}
                    handleDragLeave={handleDragLeave}
                    handleDrop={handleDrop}
                    handleDragEnd={handleDragEnd}
                />
            ))}
            {(!tabs.find(tab => tab.id === 'index')) ?
                <div className={'addButton'}>
                    <ListItemButton
                        onClick={() => navigateToTab('index', 'index', '/')}
                        aria-label={"Add new tab"}
                    >
                        <AddIcon/>
                    </ListItemButton>
                </div>
                : null
            }
        </Stack>
    );
}