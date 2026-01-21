import { getNoteByHref } from "@/app/hooks/getNoteByHref";

describe('getNoteByHref test suite:', () => {
    test('finds an existing note', () => {
        expect(getNoteByHref('/')).toBeDefined();
    });
    test("returns undefined when note doesn't exist", () => {
        expect(getNoteByHref('/fake_note')).toBeUndefined();
    });
});