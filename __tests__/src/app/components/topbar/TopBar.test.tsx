import '@testing-library/jest-dom';
import { screen, fireEvent, waitFor } from '@testing-library/react';
import TopBar from '@/app/components/topbar/TopBar';
import { renderWithRedux } from '../../../../../__setup__/testUtils';
import { RootState } from '@/store';
import { mockUsePathname, mockUseRouter } from '../../../../../__mocks__/navigationMock';

describe('TopBar test suite', () => {
    const mockTabs: RootState = {
        tabs: {
            tabs: [
                { id: '1', title: 'Tab 1' },
                { id: '2', title: 'Tab 2' },
            ],
            activeTabId: '1'
        }
    };

    afterEach(() => {
        localStorage.clear();
        jest.resetAllMocks();
    });

    it('should render empty when no tabs provided', () => {
        const { container } = renderWithRedux(<TopBar/>);

        expect(container.querySelectorAll('[draggable="true"]')).toHaveLength(0);
    });
    it('should render tabs', () => {
        mockUsePathname('/1');
        renderWithRedux(<TopBar/>, { preloadedState: mockTabs });

        expect(screen.getByText('Tab 1')).toBeInTheDocument();
        expect(screen.getByText('Tab 2')).toBeInTheDocument();
    });
    it('should highlight active tab', () => {
        mockUsePathname('/1');
        const { container } = renderWithRedux(<TopBar/>, { preloadedState: mockTabs });

        const tabs = container.querySelectorAll('[draggable="true"]');
        expect(tabs.length).toBe(2);
        expect(tabs[0]).toHaveClass('active');
        expect(tabs[1]).not.toHaveClass('active');
    });
    it('should call onTabClick when tab is clicked', () => {
        mockUseRouter();
        mockUsePathname('/1');
        const onTabClick = jest.fn();
        renderWithRedux(<TopBar/>, { preloadedState: mockTabs });

        fireEvent.click(screen.getByText('Tab 2'));
        waitFor(() => {
            expect(onTabClick).toHaveBeenCalledWith('2');
        });
    });
    it('should call onTabClose when close button is clicked', () => {
        mockUsePathname('/1');
        const onTabClose = jest.fn();
        renderWithRedux(<TopBar/>, { preloadedState: mockTabs });

        const closeButtons = screen.getAllByRole('button', { hidden: true });
        fireEvent.click(closeButtons[0]);
        waitFor(() => {
            expect(onTabClose).toHaveBeenCalledWith('1');
        });
    });
    it('should handle drag and drop reordering', () => {
        mockUsePathname('/1');
        const onReorder = jest.fn();
        const { container } = renderWithRedux(<TopBar/>, { preloadedState: mockTabs });

        const tabs = container.querySelectorAll('[draggable="true"]');
        fireEvent.dragStart(tabs[0], { dataTransfer: { effectAllowed: 'move' } });
        fireEvent.dragOver(tabs[1], { dataTransfer: { dropEffect: 'move' } });
        fireEvent.drop(tabs[1], { dataTransfer: { dropEffect: 'move' } });

        waitFor(() => {
            expect(onReorder).toHaveBeenCalledWith(0, 1);
        });
    });
});