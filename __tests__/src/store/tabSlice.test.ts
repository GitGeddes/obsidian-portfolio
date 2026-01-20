import tabReducer, {
  addTab,
  closeTab,
  setActiveTab,
  reorderTabs,
  setTabs,
  clearTabs,
  Tab,
} from '@/store/slices/tabSlice';

describe('tabSlice test suite:', () => {
  const initialState = { tabs: [], activeTabId: null };
  const TAB_1 = { id: '1', title: 'Tab 1' };
  const TAB_2 = { id: '2', title: 'Tab 2' };

  it('should handle addTab', () => {
    const state = tabReducer(initialState, addTab(TAB_1));
    expect(state.tabs).toHaveLength(1);
    expect(state.tabs[0]).toEqual(TAB_1);
    expect(state.activeTabId).toBe('1');
  });

  it('should deactivate previous tab when adding new tab', () => {
    let state = tabReducer(initialState, addTab(TAB_1));
    state = tabReducer(state, addTab(TAB_2));
    expect(state.tabs.length).toBe(2);
    expect(state.tabs[0].id === state.activeTabId).toBe(false);
    expect(state.tabs[1].id === state.activeTabId).toBe(true);
  });

  it('should handle closeTab', () => {
    let state = tabReducer(initialState, addTab(TAB_1));
    state = tabReducer(state, addTab(TAB_2));
    state = tabReducer(state, closeTab('1'));
    expect(state.tabs).toHaveLength(1);
    expect(state.tabs[0].id).toBe('2');
  });

  it('should set activeTabId to previous tab when closing active tab', () => {
    let state = tabReducer(initialState, addTab(TAB_1));
    state = tabReducer(state, addTab(TAB_2));
    state = tabReducer(state, closeTab('2'));
    expect(state.activeTabId).toBe('1');
  });

  it('should handle setActiveTab', () => {
    let state = tabReducer(initialState, addTab(TAB_1));
    state = tabReducer(state, addTab(TAB_2));
    state = tabReducer(state, setActiveTab('1'));
    expect(state.activeTabId).toBe('1');
  });

  it('should handle reorderTabs', () => {
    let state = tabReducer(initialState, addTab(TAB_1));
    state = tabReducer(state, addTab(TAB_2));
    state = tabReducer(state, addTab({ id: '3', title: 'Tab 3' }));
    state = tabReducer(state, reorderTabs({ fromIndex: 0, toIndex: 2 }));
    expect(state.tabs.map(t => t.id)).toEqual(['2', '3', '1']);
  });

  it('should handle setTabs', () => {
    const tabs: Tab[] = [
      TAB_1,
      TAB_2,
    ];
    const state = tabReducer(initialState, setTabs({ tabs, activeTabId: '1' }));
    expect(state.tabs).toEqual(tabs);
    expect(state.activeTabId).toBe('1');
  });

  it('should handle clearTabs', () => {
    let state = tabReducer(initialState, addTab(TAB_1));
    state = tabReducer(state, clearTabs());
    expect(state.tabs).toHaveLength(0);
    expect(state.activeTabId).toBeNull();
  });
});
