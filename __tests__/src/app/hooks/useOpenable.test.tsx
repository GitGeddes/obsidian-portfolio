import useOpenable from "@/app/hooks/useOpenable";
import { renderHook, waitFor } from "@testing-library/react";

describe("useOpenable test suite:", () => {
    test("should open and close correctly", async () => {
        const { result } = renderHook(() => useOpenable());
        expect(result.current.isOpen).toBe(true);

        result.current.handleClick();
        await waitFor(() => {
            expect(result.current.isOpen).toBe(false);
        });

        result.current.handleClick();
        await waitFor(() => {
            expect(result.current.isOpen).toBe(true);
        });
    });
    test("should stay closed when disabled", async () => {
        const { result } = renderHook(() => useOpenable(false));
        expect(result.current.isOpen).toBe(false);

        result.current.handleClick();
        await waitFor(() => {
            expect(result.current.isOpen).toBe(false);
        });
    });
});