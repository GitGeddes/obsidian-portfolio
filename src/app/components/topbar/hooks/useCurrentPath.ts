import { usePathname } from "next/navigation";
import { useCallback } from "react";

export default function useCurrentPath(props: { title: string; href?: string; }) {
    const pathname = usePathname();

    const isCurrentPath = useCallback(() => {
        return pathname === props.href || pathname === '/' + props.title;
    }, [pathname, props.href, props.title]);

    return { isCurrentPath };
}