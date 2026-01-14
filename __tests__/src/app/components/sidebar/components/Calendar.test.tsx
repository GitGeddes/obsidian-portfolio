import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import Calendar from '@/app/components/sidebar/components/Calendar';
import { mockFetch } from '../../../../../../__mocks__/fetchMock';
import { ERROR_DATA, SHORT_DATA } from '../../../../../../__setup__/testData';

describe("Calendar test suite:", () => {
    beforeEach(() => {
        const mockDate = new Date(2026, 0, 15); // Jan 15, 2026
        jest.useFakeTimers().setSystemTime(mockDate);
    });
    afterEach(() => {
        jest.restoreAllMocks();
        // Not clearing localStorage allows cache testing between tests
    });
    test("snapshot test", () => {
        mockFetch(SHORT_DATA);
        const { container } = render(<Calendar username={'test'}/>);

        expect(container).toMatchSnapshot();
    });
    test("current day displays correctly", () => {
        mockFetch(SHORT_DATA);
        render(<Calendar username={'test'}/>);

        expect(screen.getByText("January")).toBeDefined();
        expect(screen.getByText("2026")).toBeDefined();
        expect(screen.getByText("15")).toHaveStyle("color: #8a5cf5");
    });
    test("leap year displays correctly", () => {
        mockFetch(SHORT_DATA);
        const mockDate = new Date(2024, 1, 29); // Feb 29, 2024, leap year
        jest.useFakeTimers().setSystemTime(mockDate);
        render(<Calendar username={'test'}/>);

        expect(screen.getByText("February")).toBeDefined();
        expect(screen.getByText("2024")).toBeDefined();
        expect(screen.getAllByText("29").length).toBe(2);
        expect(screen.getAllByText("29")[1]).toHaveStyle("color: #8a5cf5");
    });
    test("shows error message on fetch failure", async () => {
        localStorage.clear();
        mockFetch(ERROR_DATA);
        render(<Calendar username={'test'}/>);

        expect(screen.getByText(/Loading GitHub activity.../i)).toBeDefined();
        await waitFor(() => {
            expect(screen.getByText(/Error loading GitHub activity:/i)).toBeDefined();
        });
    });
});