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

    const navigateToTab = (title: string, href?: string) => {
        const tabHref = href || `/${title}`;
        const existingTab = tabs.find(tab => tab.id === title);

        if (existingTab) {
            if (activeTabId !== existingTab.id) {
                dispatch(setActiveTab(title));
            }
            if (pathname.replace('/', '') !== activeTabId) {
                // Check that the current route is not already at this tab
                router.push(tabHref);
            }
        } else {
            dispatch(addTab({ id: title, title: title, href: tabHref }));
            router.push(tabHref);
        }
    };

    const navigateToTabWithHref = (href: string) => {
        const note = getNoteByHref(href);
        if (note) {
            navigateToTab(note[0], href);
        } else {
            navigateToTab(href.replace('/', ''), href);
        }
    }

    return { navigateToTab, navigateToTabWithHref };
}