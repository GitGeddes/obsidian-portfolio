import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Calendar from '../Calendar';

describe("FolderButton test suite", () => {
    beforeEach(() => {
        const mockDate = new Date(2026, 0, 15); // Jan 15, 2026
        jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
    });
    afterEach(() => {
        jest.restoreAllMocks();
    });
    test("snapshot test", () => {
        const { container } = render(<Calendar/>);

        expect(container).toMatchSnapshot();
    });
    test("current day displays correctly", () => {
        render(<Calendar/>);

        expect(screen.getByText("January")).toBeDefined();
        expect(screen.getByText("2026")).toBeDefined();
        expect(screen.getByText("15")).toHaveStyle("color: #8a5cf5");
    });
    test("leap year displays correctly", () => {
        jest.restoreAllMocks();
        const mockDate = new Date(2024, 1, 29); // Feb 29, 2024, leap year
        jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
        render(<Calendar/>);

        expect(screen.getByText("February")).toBeDefined();
        expect(screen.getByText("2024")).toBeDefined();
        expect(screen.getAllByText("29").length).toBe(2);
        expect(screen.getAllByText("29")[1]).toHaveStyle("color: #8a5cf5");
    });
});