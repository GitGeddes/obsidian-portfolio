import { notes } from "../(Notes)/Graph/notes";

export function getNoteByHref(href: string) {
    const note = Object.entries(notes).find((val) =>
        val[1].link === href ||
        val[1].link === href.replace('/', '')
    );

    if (note) {
        return note;
    } else {
        return undefined;
    }
}