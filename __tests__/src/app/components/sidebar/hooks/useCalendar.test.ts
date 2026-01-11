import useCalendar from "@/app/components/sidebar/hooks/useCalendar";
import { renderHook } from "@testing-library/react";

describe("useCalendar test suite:", () => {
    test("generates calendar at start of year", () => {
        const DATE = new Date(2026, 0, 15) // January 15, 2026
        const { result } = renderHook(() => useCalendar(DATE));
        const calendar = result.current.calendar;

        expect(calendar[0].date).toBe(28);
        expect(calendar[0].isCurrentMonth).toBeFalsy();
        expect(calendar[0].dateTime).toEqual(new Date(2025, 11, 28));
        expect(calendar[18].date).toBe(15);
        expect(calendar[18].isToday).toBeTruthy();
        expect(calendar[18].isCurrentMonth).toBeTruthy();
        expect(calendar[41].dateTime).toEqual(new Date(2026, 1, 7));
    });
    test("generates calendar at end of year", () => {
        const DATE = new Date(2025, 11, 15) // December 15, 2025
        const { result } = renderHook(() => useCalendar(DATE));
        const calendar = result.current.calendar;

        expect(calendar[0].date).toBe(30);
        expect(calendar[0].isCurrentMonth).toBeFalsy();
        expect(calendar[0].dateTime).toEqual(new Date(2025, 10, 30));
        expect(calendar[15].date).toBe(15);
        expect(calendar[15].isToday).toBeTruthy();
        expect(calendar[15].isCurrentMonth).toBeTruthy();
        expect(calendar[41].dateTime).toEqual(new Date(2026, 0, 10));
    });
});