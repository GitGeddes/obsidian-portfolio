import { useTabNavigation } from "@/app/hooks/useTabNavigation";
import { mockUseRouter } from "../../../../__mocks__/navigationMock";
import { mockedRouter } from "../../../../__setup__/jest.setup";
import { renderHookWithRedux, waitFor } from "../../../../__setup__/testUtils";

describe('useTabNavigation test suite:', () => {
    afterEach(() => {
        jest.resetAllMocks();
        localStorage.clear();
    });

    test('navigates with existing href', () => {
        mockUseRouter();
        const { result } = renderHookWithRedux(() => useTabNavigation());

        result.current.navigateToTabWithHref('/');

        waitFor(() => {
            expect(mockedRouter).toHaveBeenCalledWith('/');
        });
    });
    test('navigates with fake href', () => {
        mockUseRouter();
        const { result } = renderHookWithRedux(() => useTabNavigation());

        result.current.navigateToTabWithHref('/test');

        waitFor(() => {
            expect(mockedRouter).toHaveBeenCalledWith('/test');
        });
    });
});