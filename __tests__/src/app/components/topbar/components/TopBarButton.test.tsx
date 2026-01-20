import '@testing-library/jest-dom';
import TopBarButton from "@/app/components/topbar/components/TopBarButton";
import { render } from "@testing-library/react";
import { mockUsePathname } from '../../../../../../__mocks__/navigationMock';

describe("TopBarButton test suite:", () => {
    afterEach(() => {
        jest.resetAllMocks();
    });
    test("snapshot test", () => {
        mockUsePathname("/");
        const { container } = render(<TopBarButton title="Index" href='/'/>);

        expect(container).toMatchSnapshot();
    });
    test("colors based on current path", () => {
        mockUsePathname("/Project");
        const { getByText } = render(<TopBarButton title="Project"/>);

        const textElement = getByText("Project");

        expect(textElement).toHaveClass('MuiTypography-root');
        expect(textElement).toHaveStyle('color: #ffffff');
    });
    test("colors when not the current path", () => {
        mockUsePathname("/Project");
        const { getByText } = render(<TopBarButton title="Index"/>);

        const textElement = getByText("Index");

        expect(textElement).toHaveClass('MuiTypography-root');
        expect(textElement).toHaveStyle('color: inherit');
    });
});