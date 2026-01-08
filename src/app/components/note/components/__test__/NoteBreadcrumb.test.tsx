import { render, screen } from '@testing-library/react';
import NoteBreadcrumb from '../NoteBreadcrumb';

describe("NoteBreadcrumb test suite", () => {
    test("Breadcrumb renders correctly", () => {
        const testPath = "Test/Note/Breadcrumb";
        render(<NoteBreadcrumb path={testPath}/>);

        // Expect the Breadcrumb to be split by the delimiter "/"
        expect(screen.queryByText(testPath)).toBeNull();

        expect(screen.queryByText(testPath.split('/')[0])).toBeDefined();
    });
});