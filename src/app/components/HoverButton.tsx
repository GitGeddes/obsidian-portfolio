/**
 * A container for buttons, adding hover styles.
 * @module app/components/HoverButton
 */

import { PropsWithChildren } from "react";
import ListItemButton from "@mui/material/ListItemButton";

/**
 * Add hover styling to a button and its children.
 * @param props.href - the link for the underlying {@link ListItemButton}.
 * @returns a React element.
 */
export default function HoverButton(props: { href: string } & PropsWithChildren) {
    return (
        <ListItemButton
            href={props.href}
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