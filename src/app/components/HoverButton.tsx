/**
 * A container for buttons, adding hover styles.
 * @module app/components/HoverButton
 */

import { PropsWithChildren } from "react";
import ListItemButton from "@mui/material/ListItemButton";

type HoverButtonProps = PropsWithChildren & {
    href?: string;
    onClick?: () => void;
}

/**
 * Add hover styling to a button and its children.
 * @param props.href - the link for the underlying {@link ListItemButton}.
 * @returns a React element.
 */
export default function HoverButton(props: HoverButtonProps) {
    return (
        <ListItemButton
            {...(props.href ? {href: props.href} : {})}
            onClick={props.onClick ? props.onClick : undefined}
            sx={{
                ":hover": {
                    backgroundColor: "#454545"
                }
            }}
        >
            {props.children}
        </ListItemButton>
    )
}