import useTabList from '@/app/components/topbar/hooks/useTabList';
import { act, renderHookWithRedux } from '../../../../__setup__/testUtils';
import { mockUsePathname, mockUseRouter } from '../../../../__mocks__/navigationMock';

describe('useTabList test suite:', () => {
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
            result.current.addTab('1', 'Tab 1');
        });

        expect(result.current.tabs).toHaveLength(1);
        expect(result.current.tabs[0].id).toBe('1');
        expect(result.current.activeTabId).toBe('1');
    });

    it('should close a tab', () => {
        const { result } = renderHookWithRedux(() => useTabList());

        act(() => {
            result.current.addTab('1', 'Tab 1');
            result.current.addTab('2', 'Tab 2');
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
            result.current.addTab('1', 'Tab 1');
            result.current.addTab('2', 'Tab 2');
        });

        act(() => {
            result.current.setActiveTab('1');
        });

        expect(result.current.activeTabId).toBe('1');
    });

    it('should reorder tabs', () => {
        const { result } = renderHookWithRedux(() => useTabList());

        act(() => {
            result.current.addTab('1', 'Tab 1');
            result.current.addTab('2', 'Tab 2');
            result.current.addTab('3', 'Tab 3');
        });

        act(() => {
            result.current.reorderTabs(0, 2);
        });

        expect(result.current.tabs.map(t => t.id)).toEqual(['2', '3', '1']);
    });

    it('should persist tabs to localStorage', async () => {
        const { result } = renderHookWithRedux(() => useTabList());

        act(() => {
            result.current.addTab('1', 'Tab 1');
        });

        await new Promise(resolve => setTimeout(resolve, 0));

        const saved = JSON.parse(localStorage.getItem('obsidian_portfolio_tabs') || '{}');
        expect(saved.tabs).toHaveLength(1);
        expect(saved.tabs[0].id).toBe('1');
    });
});
