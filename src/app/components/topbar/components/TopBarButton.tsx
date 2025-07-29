import ListItemButton from "@mui/material/ListItemButton";
import styles from "../topbar.module.css";
import ListItemText from "@mui/material/ListItemText";

type TopBarButtonProps = {
    title: string;
}

export default function TopBarButton(props: TopBarButtonProps) {
    return (
        <div className={styles.top_button}>
            <ListItemButton>
                <ListItemText primary={props.title} />
            </ListItemButton>
        </div>
    );
}