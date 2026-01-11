import useGithubActivity, { mapContributionLevel } from "@/app/components/sidebar/hooks/useGithubActivity";
import { mockFetch } from "../../../../../../__mocks__/fetchMock";
import { renderHook, waitFor } from "@testing-library/react";
import { DATA, TEST_DATA } from "../../../../../../__setup__/testData";

describe("useGithubActivity test suite:", () => {
    const USERNAME = "username";
    const DATE = new Date();

    afterEach(() => {
        jest.restoreAllMocks();
        localStorage.clear();
    });

    test("maps contribution levels", () => {
        expect(mapContributionLevel('NONE')).toBe(0);
        expect(mapContributionLevel('FIRST_QUARTILE')).toBe(1);
        expect(mapContributionLevel('SECOND_QUARTILE')).toBe(2);
        expect(mapContributionLevel('THIRD_QUARTILE')).toBe(3);
        expect(mapContributionLevel('FOURTH_QUARTILE')).toBe(4);
    });
    test("initializes loading", () => {
        mockFetch(DATA);

        const { result } = renderHook(() => useGithubActivity(USERNAME, DATE));

        expect(result.current.isLoading).toBeTruthy();
        expect(result.current.commits).toEqual({ totalCommits: 0, contributions: [] });
    });
    test("query handles errors", async () => {
        mockFetch({ errors: [{ message: 'test error' }]});
        const consoleSpy = jest.spyOn(console, 'error').mockImplementation();

        const { result } = renderHook(() => useGithubActivity(USERNAME, DATE));

        // expect(() => renderHook(() => useGithubActivity(USERNAME, DATE))).toThrow(Error);
        expect(result.current.isLoading).toBeTruthy();
        await waitFor(() => {
            expect(consoleSpy).toHaveBeenCalledTimes(1);
            expect(consoleSpy.mock.calls[0][0]).toContain('Error fetching GitHub commits:');
        });
        expect(result.current.error).not.toBeNull();
    });
});