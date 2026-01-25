import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Tab = {
    id: string;
    title: string;
    href?: string;
}

type TabState = {
    tabs: Tab[];
    activeTabId: string | null;
}

const initialState: TabState = {
    tabs: [
        {
            id: 'index',
            title: 'index',
            href: '/'
        },
        {
            id: 'Amazon',
            title: 'Amazon',
            href: '/Amazon'
        },
        {
            id: 'Groupie',
            title: 'Groupie',
            href: '/Groupie'
        },
        {
            id: 'Portfolio',
            title: 'Portfolio',
            href: '/Portfolio'
        },
        {
            id: 'VideoClipper',
            title: 'VideoClipper',
            href: '/VideoClipper'
        },
        {
            id: 'Graph',
            title: 'Graph',
            href: '/Graph'
        }
    ],
    activeTabId: null,
};

const tabSlice = createSlice({
    name: 'tabs',
    initialState,
    reducers: {
        addTab: (state, action: PayloadAction<Tab>) => {
            const newTab: Tab = action.payload;
            state.tabs.push(newTab);
            state.activeTabId = newTab.id;
        },
        closeTab: (state, action: PayloadAction<string>) => {
            const tabIndex = state.tabs.findIndex(tab => tab.id === action.payload);
            if (tabIndex === -1) return;

            state.tabs.splice(tabIndex, 1);

            if (state.activeTabId === action.payload) {
                const prevIndex = Math.max(0, tabIndex - 1);
                state.activeTabId = state.tabs[prevIndex]?.id || null;
            }
        },
        setActiveTab: (state, action: PayloadAction<string>) => {
            state.activeTabId = action.payload;
        },
        reorderTabs: (state, action: PayloadAction<{ fromIndex: number; toIndex: number }>) => {
            const { fromIndex, toIndex } = action.payload;
            const [removed] = state.tabs.splice(fromIndex, 1);
            state.tabs.splice(toIndex, 0, removed);
        },
        setTabs: (state, action: PayloadAction<{ tabs: Tab[]; activeTabId: string | null }>) => {
            state.tabs = action.payload.tabs;
            state.activeTabId = action.payload.activeTabId;
        },
        clearTabs: (state) => {
            state.tabs = [];
            state.activeTabId = null;
        },
    },
});

export const { addTab, closeTab, setActiveTab, reorderTabs, setTabs, clearTabs } = tabSlice.actions;
export default tabSlice.reducer;
