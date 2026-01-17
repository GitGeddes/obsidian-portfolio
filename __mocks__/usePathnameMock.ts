import { mockedPathname } from "../__setup__/jest.setup";

export function mockUsePathname(mockPathname: string) {
    // Mock the usePathname hook from next/navigation
    mockedPathname.mockImplementation(() => mockPathname);
}