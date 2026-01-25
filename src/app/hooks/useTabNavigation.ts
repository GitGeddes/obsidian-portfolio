import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { addTab, setActiveTab } from "@/store/slices/tabSlice";
import { RootState } from "@/store";
import { getNoteByHref } from "./getNoteByHref";

export function useTabNavigation() {
    const router = useRouter();
    const pathname = usePathname();
    const dispatch = useDispatch();
    const tabs = useSelector((state: RootState) => state.tabs.tabs);
    const activeTabId = useSelector((state: RootState) => state.tabs.activeTabId);

    const navigateToTab = (id: string, title: string, href?: string) => {
        const tabHref = href || `/${id}`;
        const existingTab = tabs.find(tab => tab.id === id);

        if (existingTab) {
            if (activeTabId !== existingTab.id) {
                dispatch(setActiveTab(id));
            } else if (pathname.replace('/', '') !== existingTab.id) {
                // Check that the current route is not already at this tab
                router.push(tabHref);
            }
        } else {
            dispatch(addTab({ id: id, title: title, href: tabHref }));
            router.push(tabHref);
        }
    };

    // Only used by the Graph
    const navigateToTabWithHref = (href: string) => {
        const note = getNoteByHref(href);
        if (note) {
            // Note exists in the predefined list
            navigateToTab(note.id, note.note.title || note.id, href);
        } else {
            navigateToTab(href.replace('/', ''), href.replace('/', ''), href);
        }
    }

    return { navigateToTab, navigateToTabWithHref };
}