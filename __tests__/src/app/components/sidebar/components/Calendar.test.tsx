import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Calendar from '../../../../../../src/app/components/sidebar/components/Calendar';
import { mockFetch } from '../../../../../../__mocks__/fetchMock';

describe("Calendar test suite", () => {
    beforeAll(() => {
        const mockDate = new Date(2026, 0, 15); // Jan 15, 2026
        jest.useFakeTimers().setSystemTime(mockDate);
        window.fetch = mockFetch(undefined);
    });
    afterAll(() => {
        jest.restoreAllMocks();
    });
    test("snapshot test", () => {
        const { container } = render(<Calendar username={'test'}/>);

        expect(container).toMatchSnapshot();
    });
    test("current day displays correctly", () => {
        render(<Calendar username={'test'}/>);

        expect(screen.getByText("January")).toBeDefined();
        expect(screen.getByText("2026")).toBeDefined();
        expect(screen.getByText("15")).toHaveStyle("color: #8a5cf5");
    });
    test("leap year displays correctly", () => {
        const mockDate = new Date(2024, 1, 29); // Feb 29, 2024, leap year
        jest.useFakeTimers().setSystemTime(mockDate);
        render(<Calendar username={'test'}/>);

        expect(screen.getByText("February")).toBeDefined();
        expect(screen.getByText("2024")).toBeDefined();
        expect(screen.getAllByText("29").length).toBe(2);
        expect(screen.getAllByText("29")[1]).toHaveStyle("color: #8a5cf5");
    });
});