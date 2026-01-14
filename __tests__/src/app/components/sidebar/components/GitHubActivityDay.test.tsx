import '@testing-library/jest-dom';
import GitHubActivityDay, { DOT_HEIGHT } from "@/app/components/sidebar/components/GitHubActivityDay";
import { render } from "@testing-library/react";

describe("GitHubActivityDay test suite", () => {
    test("renders level 0 correctly", () => {
        const { container } = render(<GitHubActivityDay commitDay={{ date: '2025-01-01', level: 0, count: 0 }} isCurrentMonth={true} />);
        expect(container.firstChild?.firstChild).toHaveStyle(`height: ${DOT_HEIGHT}px`);
    });
    test("renders level 1 correctly", () => {
        const { getByTestId } = render(<GitHubActivityDay commitDay={{ date: '2025-01-01', level: 1, count: 1 }} isCurrentMonth={true} />);
        const element = getByTestId("CircleOutlinedIcon");
        expect(element).toBeInTheDocument();
    });
    test("renders level 2 correctly", () => {
        const { getByTestId } = render(<GitHubActivityDay commitDay={{ date: '2025-01-01', level: 2, count: 1 }} isCurrentMonth={true} />);
        const element = getByTestId("CircleIcon");
        expect(element).toBeInTheDocument();
    });
    test("renders level 3 correctly", () => {
        const { getByTestId } = render(<GitHubActivityDay commitDay={{ date: '2025-01-01', level: 3, count: 1 }} isCurrentMonth={true} />);
        const circle = getByTestId("CircleIcon");
        expect(circle).toBeInTheDocument();
        const outline = getByTestId("CircleOutlinedIcon");
        expect(outline).toBeInTheDocument();
    });
    test("renders level 4 correctly", () => {
        const { getAllByTestId } = render(<GitHubActivityDay commitDay={{ date: '2025-01-01', level: 4, count: 1 }} isCurrentMonth={true} />);
        const circles = getAllByTestId("CircleIcon");
        expect(circles.length).toBe(2);
        expect(circles[0]).toBeInTheDocument();
        expect(circles[1]).toBeInTheDocument();
    });
    test("renders other month colors correctly for level 1", () => {
        const { getByTestId } = render(<GitHubActivityDay commitDay={{ date: '2025-01-01', level: 1, count: 1 }} isCurrentMonth={false} />);
        const element = getByTestId("CircleOutlinedIcon");
        expect(element).toHaveStyle('color: #494949');
    });
    test("renders other month colors correctly for level 2", () => {
        const { getByTestId } = render(<GitHubActivityDay commitDay={{ date: '2025-01-01', level: 2, count: 1 }} isCurrentMonth={false} />);
        const element = getByTestId("CircleIcon");
        expect(element).toHaveStyle('color: #494949');
    });
});