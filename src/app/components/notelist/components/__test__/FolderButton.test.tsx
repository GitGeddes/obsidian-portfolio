import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import FolderButton from '../FolderButton';

describe("FolderButton test suite", () => {
    test("snapshot test", () => {
        const title = "test";
        const canOpen = false;

        const { container } = render(<FolderButton title={title} canOpen={canOpen}/>);

        expect(container).toMatchSnapshot();
    });
    test("collapses when clicked", () => {
        const title = "test";
        const canOpen = true;

        render(<FolderButton title={title} canOpen={canOpen}/>);

        expect(screen.getByTestId("collapse")).toBeDefined();
        expect(screen.getByTestId("collapse")).not.toHaveStyle("height: 0px");

        fireEvent.click(screen.getByText(title));

        expect(screen.getByTestId("collapse")).toHaveStyle("height: 0px");
    });
    test("doesn't collapse when can't open", () => {
        const title = "test";
        const canOpen = false;

        render(<FolderButton title={title} canOpen={canOpen}/>);

        expect(screen.getByTestId("collapse")).toBeDefined();
        expect(screen.getByTestId("collapse")).toHaveStyle("height: 0px");

        fireEvent.click(screen.getByText(title));

        expect(screen.getByTestId("collapse")).toHaveStyle("height: 0px");
    });
});