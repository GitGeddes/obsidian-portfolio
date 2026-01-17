'use client'

import ListItemButton from "@mui/material/ListItemButton";
import styles from "../topbar.module.css";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";
import useCurrentPath from "../hooks/useCurrentPath";

type TopBarButtonProps = {
    title: string;
    href?: string;
}

export default function TopBarButton(props: TopBarButtonProps) {
    const { isCurrentPath } = useCurrentPath({ title: props.title, href: props.href });

    return (
        <Link className={styles.tab_button} href={props.href ? props.href : `/${props.title}`}>
            <ListItemButton
                sx={{
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    backgroundColor: isCurrentPath() ? '#1e1e1e' : '#363636',
                    ":hover": {
                        backgroundColor: isCurrentPath() ? '#1e1e1e' : "#454545",
                        borderBottomLeftRadius: isCurrentPath() ? 0 : 10,
                        borderBottomRightRadius: isCurrentPath() ? 0 : 10,
                        paddingBottom: isCurrentPath() ? 'default' : 0.5,
                        paddingTop: isCurrentPath() ? 'default' : 0.5
                    }
                }}
            >
                <ListItemText
                    primary={props.title}
                    slotProps={{
                        primary: {
                            color: isCurrentPath() ? 'white' : 'inherit'
                        }
                    }}
                />
            </ListItemButton>
        </Link>
    );
}