import ListItemButton from "@mui/material/ListItemButton";
import styles from "../topbar.module.css";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

type TopBarButtonProps = {
    title: string;
}

export default function TopBarButton(props: TopBarButtonProps) {
    return (
        <Link className={styles.top_button} href={`/${props.title}`}>
            <ListItemButton>
                <ListItemText primary={props.title} />
            </ListItemButton>
        </Link>
    );
}