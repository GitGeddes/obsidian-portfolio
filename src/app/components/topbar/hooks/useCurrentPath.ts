import { usePathname } from "next/navigation";
import { useCallback } from "react";

export default function useCurrentPath(props: { id: string; href?: string; }) {
    const pathname = usePathname();

    const isCurrentPath = useCallback(() => {
        return pathname === props.href || pathname === '/' + props.id;
    }, [pathname, props.href, props.id]);

    return { isCurrentPath };
}