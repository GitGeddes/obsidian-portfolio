process.env.NEXT_PUBLIC_GITHUB_TOKEN = 'test_token_value';

export const mockedPathname = jest.fn();
jest.mock("next/navigation", () => {
    return {
        usePathname: () => mockedPathname(),
    };
});

jest.mock('next/font/google', () => {
    return {
        Geist: jest.fn().mockImplementation(() => {
            return {
                variable: '--font-geist-mock',
            };
        }),
        Geist_Mono: jest.fn().mockImplementation(() => {
            return {
                variable: '--font-geist-mock',
            };
        }),
    };
});