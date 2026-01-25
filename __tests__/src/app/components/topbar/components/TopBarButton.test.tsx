import '@testing-library/jest-dom';
import { fireEvent } from '@testing-library/react';
import TopBarButton from "@/app/components/topbar/components/TopBarButton";
import { mockUsePathname } from '../../../../../../__mocks__/navigationMock';
import { Tab } from '@/store/slices/tabSlice';
import { renderWithRedux } from '../../../../../../__setup__/testUtils';

describe("TopBarButton test suite:", () => {
    const TAB_INDEX: Tab = {
        id: 'index',
        title: 'index',
        href: '/'
    };
    const TAB_PROJECT: Tab = {
        id: 'Project',
        title: 'Project',
        href: '/Project'
    };

    const mockOnTabClose = jest.fn();
    function TopBarButtonWrapper({ tab }: { tab: Tab }) {
        return (
            <TopBarButton
                tab={tab}
                index={0}
                activeTabId={tab.id}
                onTabClick={jest.fn()}
                onTabClose={mockOnTabClose}
                draggedIndex={null}
                dragOverIndex={null}
                handleDragStart={jest.fn()}
                handleDragOver={jest.fn()}
                handleDragLeave={jest.fn()}
                handleDrop={jest.fn()}
                handleDragEnd={jest.fn()}
            />
        )
    }

    afterEach(() => {
        jest.resetAllMocks();
    });
    test("snapshot test", () => {
        mockUsePathname("/");
        const { container } = renderWithRedux(<TopBarButtonWrapper tab={TAB_INDEX} />);

        expect(container).toMatchSnapshot();
    });
    test("colors based on current path", () => {
        mockUsePathname("/Project");
        const { getByText } = renderWithRedux(<TopBarButtonWrapper tab={TAB_PROJECT} />);

        const textElement = getByText("Project");

        expect(textElement).toHaveClass('MuiTypography-root');
        expect(textElement).toHaveClass('topBarButtonText');
    });
    test("colors when not the current path", () => {
        mockUsePathname("/Project");
        const { getByText } = renderWithRedux(<TopBarButtonWrapper tab={TAB_INDEX} />);

        const textElement = getByText("index");

        expect(textElement).toHaveClass('MuiTypography-root');
        expect(textElement).toHaveClass('topBarButtonTextInactive');
    });

    test("closes when the close icon is clicked", () => {
        mockUsePathname("/Project");
        const { getByLabelText } = renderWithRedux(<TopBarButtonWrapper tab={TAB_PROJECT} />);

        const closeButton = getByLabelText(/Close Project/i);
        fireEvent.click(closeButton);

        expect(mockOnTabClose).toHaveBeenCalledWith('Project');
    });
});