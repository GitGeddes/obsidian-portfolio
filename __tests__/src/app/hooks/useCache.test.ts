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
        const {
            setCachedData
        } = renderHook(() => useCache<string>()).result.current;
        expect(localStorage.getItem(KEY)).toBeNull();

        setCachedData(KEY, VALUE, TTL);
        expect(localStorage.getItem(KEY)).toBeDefined();
    });
    test("gets data", () => {
        const {
            getCachedData
        } = renderHook(() => useCache<string>()).result.current;

        localStorage.setItem(KEY, VALUE);
        expect(getCachedData(KEY)).toBeDefined();
    });
    test("invalidates cache", () => {
        const {
            invalidateCache
        } = renderHook(() => useCache<string>()).result.current;
        expect(localStorage.getItem(KEY)).toBeNull();

        localStorage.setItem(KEY, VALUE);
        expect(localStorage.getItem(KEY)).toBeDefined();

        invalidateCache(KEY);
        expect(localStorage.getItem(KEY)).toBeNull();
    });
    test("TTL works", () => {
        const {
            setCachedData,
            getCachedData
        } = renderHook(() => useCache<string>()).result.current;

        jest.useFakeTimers().setSystemTime(new Date(2025, 0, 10));
        setCachedData(KEY, VALUE, TTL);
        expect(localStorage.getItem(KEY)).toBeDefined();

        jest.useFakeTimers().setSystemTime(new Date(2025, 0, 15));

        expect(getCachedData(KEY)).toBeNull();
    });
    test("retrieving from cache within TTL works", () => {
        const {
            setCachedData,
            getCachedData
        } = renderHook(() => useCache<string>()).result.current;

        setCachedData(KEY, VALUE, TTL);
        expect(localStorage.getItem(KEY)).toBeDefined();

        expect(getCachedData(KEY)).toBeDefined();
    })
});