import useTabList from '@/app/components/topbar/hooks/useTabList';
import { act, renderHookWithRedux } from '../../../../../../__setup__/testUtils';
import { mockUsePathname, mockUseRouter } from '../../../../../../__mocks__/navigationMock';
import { Tab } from '@/store/slices/tabSlice';

describe('useTabList test suite:', () => {
    const TAB_1: Tab = { id: '1', title: 'Tab 1', href: '/1' };
    const TAB_2: Tab = { id: '2', title: 'Tab 2', href: '/2' };
    const TAB_3: Tab = { id: '3', title: 'Tab 3', href: '/3' };

    beforeEach(() => {
        localStorage.clear();
        mockUsePathname('/');
        mockUseRouter();
    });

    it('should initialize with empty tabs', () => {
        const { result } = renderHookWithRedux(() => useTabList());

        expect(result.current.tabs).toEqual([]);
        expect(result.current.activeTabId).toBeNull();
    });

    it('should add a tab', () => {
        const { result } = renderHookWithRedux(() => useTabList());

        act(() => {
            result.current.addTab(TAB_1.id, TAB_1.title, TAB_1.href);
        });

        expect(result.current.tabs).toHaveLength(1);
        expect(result.current.tabs[0].id).toBe('1');
        expect(result.current.activeTabId).toBe('1');
    });

    it('should close a tab', () => {
        const { result } = renderHookWithRedux(() => useTabList());

        act(() => {
            result.current.addTab(TAB_1.id, TAB_1.title, TAB_1.href);
            result.current.addTab(TAB_2.id, TAB_2.title, TAB_2.href);
        });

        act(() => {
            result.current.closeTab('1');
        });

        expect(result.current.tabs).toHaveLength(1);
        expect(result.current.tabs[0].id).toBe('2');
    });

    it('should set active tab', () => {
        const { result } = renderHookWithRedux(() => useTabList());

        act(() => {
            result.current.addTab(TAB_1.id, TAB_1.title, TAB_1.href);
            result.current.addTab(TAB_2.id, TAB_2.title, TAB_2.href);
        });

        act(() => {
            result.current.setActiveTab('1');
        });

        expect(result.current.activeTabId).toBe('1');
    });

    it('should reorder tabs', () => {
        const { result } = renderHookWithRedux(() => useTabList());

        act(() => {
            result.current.addTab(TAB_1.id, TAB_1.title, TAB_1.href);
            result.current.addTab(TAB_2.id, TAB_2.title, TAB_2.href);
            result.current.addTab(TAB_3.id, TAB_3.title, TAB_3.href);
        });

        act(() => {
            result.current.reorderTabs(0, 2);
        });

        expect(result.current.tabs.map(t => t.id)).toEqual(['2', '3', '1']);
    });

    it('should persist tabs to localStorage', async () => {
        const { result } = renderHookWithRedux(() => useTabList());

        act(() => {
            result.current.addTab(TAB_1.id, TAB_1.title, TAB_1.href);
        });

        await new Promise(resolve => setTimeout(resolve, 0));

        const saved = JSON.parse(localStorage.getItem('obsidian_portfolio_tabs') || '{}');
        expect(saved.tabs).toHaveLength(1);
        expect(saved.tabs[0].id).toBe('1');
    });
});
