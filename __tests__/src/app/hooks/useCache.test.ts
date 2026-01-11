import useCache from "@/app/hooks/useCache";
import { renderHook } from "@testing-library/react";

describe("useCache test suite:" , () => {
    const TTL = 100;
    const KEY = "test-key";
    const VALUE = "test-value"

    afterEach(() => {
        localStorage.removeItem(KEY);
    });

    test("stores data", () => {
        const { result } = renderHook(() => useCache<string>());
        expect(localStorage.getItem(KEY)).toBeNull();

        result.current.setCachedData(KEY, VALUE, TTL);
        expect(localStorage.getItem(KEY)).toBeDefined();
    });
    test("gets data", () => {
        const { result } = renderHook(() => useCache<string>());

        localStorage.setItem(KEY, VALUE);
        expect(result.current.getCachedData(KEY)).toBeDefined();
    });
    test("invalidates cache", () => {
        const { result } = renderHook(() => useCache<string>());
        expect(localStorage.getItem(KEY)).toBeNull();

        localStorage.setItem(KEY, VALUE);
        expect(localStorage.getItem(KEY)).toBeDefined();

        result.current.invalidateCache(KEY);
        expect(localStorage.getItem(KEY)).toBeNull();
    });
    test("TTL works", () => {
        const { result } = renderHook(() => useCache<string>());

        jest.useFakeTimers().setSystemTime(new Date(2025, 0, 10));
        result.current.setCachedData(KEY, VALUE, TTL);
        expect(localStorage.getItem(KEY)).toBeDefined();

        jest.useFakeTimers().setSystemTime(new Date(2025, 0, 15));

        expect(result.current.getCachedData(KEY)).toBeNull();
    });
    test("retrieving from cache within TTL works", () => {
        const { result } = renderHook(() => useCache<string>());

        result.current.setCachedData(KEY, VALUE, TTL);
        expect(localStorage.getItem(KEY)).toBeDefined();

        expect(result.current.getCachedData(KEY)).toBeDefined();
    })
});