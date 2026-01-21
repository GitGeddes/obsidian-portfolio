process.env.NEXT_PUBLIC_GITHUB_TOKEN = 'test_token_value';

export const mockedPathname = jest.fn();
export const mockedRouter = jest.fn();
jest.mock("next/navigation", () => {
    return {
        usePathname: () => mockedPathname(),
        useRouter: () => mockedRouter(),
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