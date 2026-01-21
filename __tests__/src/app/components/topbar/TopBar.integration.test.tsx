import '@testing-library/jest-dom';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import TopBar from '@/app/components/topbar/TopBar';
import { renderWithRedux } from '../../../../../__setup__/testUtils';
import { mockUsePathname, mockUseRouter } from '../../../../../__mocks__/navigationMock';
import { Tab } from '@/store/slices/tabSlice';

describe('TopBar Integration', () => {
    const mockTabs: Tab[] = [
        { id: '1', title: 'Tab 1', href: '/1' },
        { id: '2', title: 'Tab 2', href: '/2' },
    ];

    beforeEach(() => {
        localStorage.clear();
        mockUseRouter();
    });
    afterEach(() => {
        jest.resetAllMocks();
    });

    it('should render TopBar with add button', () => {
        renderWithRedux(<TopBar />);
        expect(screen.getByLabelText('Add new tab')).toBeInTheDocument();
    });
    it('should create and display new tab', () => {
        renderWithRedux(<TopBar />);
        fireEvent.click(screen.getByLabelText('Add new tab'));

        expect(screen.getByRole('button', { name: /index/ })).toBeInTheDocument();
    });
    it('should persist tabs to localStorage', async () => {
        renderWithRedux(<TopBar />);
        fireEvent.click(screen.getByLabelText('Add new tab'));

        await waitFor(() => {
            const saved = JSON.parse(localStorage.getItem('obsidian_portfolio_tabs') || '{}');
            expect(saved.tabs).toHaveLength(1);
        });
    });
    it('should switch between tabs', async () => {
        mockUsePathname('/1');
        renderWithRedux(<TopBar />, {
            preloadedState: {
                tabs: {
                    tabs: mockTabs,
                    activeTabId: '1'
                }
            }
        });

        const tabs = screen.getAllByRole('button', { name: /Tab \d/ });
        fireEvent.click(tabs[1]);

        expect(tabs.length).toBe(2);
        await waitFor(() => {
            expect(tabs[1].parentElement).toHaveClass('active');
        });
    });
});
