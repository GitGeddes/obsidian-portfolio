import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTab, closeTab, setActiveTab, reorderTabs, setTabs } from '@/store/slices/tabSlice';
import { RootState } from '@/store';
import { useTabNavigation } from '../../../hooks/useTabNavigation';

const TAB_STORAGE_KEY = 'obsidian_portfolio_tabs';

export default function useTabList() {
    const dispatch = useDispatch();
    const tabs = useSelector((state: RootState) => state.tabs.tabs);
    const activeTabId = useSelector((state: RootState) => state.tabs.activeTabId);
    const { navigateToTab } = useTabNavigation();

    // Load tabs from localStorage on mount
    useEffect(() => {
        const savedTabs = localStorage.getItem(TAB_STORAGE_KEY);
        if (savedTabs) {
            try {
                const { tabs: loadedTabs, activeTabId: loadedActiveTabId } = JSON.parse(savedTabs);
                dispatch(setTabs({ tabs: loadedTabs, activeTabId: loadedActiveTabId }));
            } catch (error) {
                console.error('Failed to load tabs from localStorage:', error);
            }
        }
    }, [dispatch]);

    // Persist tabs to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem(TAB_STORAGE_KEY, JSON.stringify({ tabs, activeTabId }));
    }, [tabs, activeTabId]);

    useEffect(() => {
        // Navigate to the active tab if it changes
        if (activeTabId) {
            const newTab = tabs.find((tab) => tab.id === activeTabId);
            if (newTab) {
                navigateToTab(newTab.id, newTab.title, newTab.href);
            }
        }
    }, [activeTabId]);

    const handleAddTab = useCallback((id: string, title: string, href?: string) => {
        dispatch(addTab({ id: id, title: title, href }));
    }, [dispatch, tabs.length]);

    const handleCloseTab = useCallback((id: string) => {
        dispatch(closeTab(id));
    }, [dispatch]);

    const handleSetActiveTab = useCallback((id: string) => {
        dispatch(setActiveTab(id));
    }, [dispatch]);

    const handleReorderTabs = useCallback((fromIndex: number, toIndex: number) => {
        dispatch(reorderTabs({ fromIndex, toIndex }));
    }, [dispatch]);

    const getActiveTab = useCallback(() => {
        return tabs.find(tab => tab.id === activeTabId) || null;
    }, [tabs, activeTabId]);

  return {
    tabs,
    activeTabId,
    activeTab: getActiveTab(),
    addTab: handleAddTab,
    closeTab: handleCloseTab,
    setActiveTab: handleSetActiveTab,
    reorderTabs: handleReorderTabs,
  };
}
