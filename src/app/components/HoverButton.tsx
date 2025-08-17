import { PropsWithChildren } from "react";
import ListItemButton from "@mui/material/ListItemButton";

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