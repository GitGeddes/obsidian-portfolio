import TopBarButton from "./components/TopBarButton";
import styles from "./topbar.module.css";

export default function TopBar() {
    return (
        <div className={styles.container}>
            <TopBarButton title="Portfolio"/>
            <TopBarButton title="Video Clipper"/>
            <TopBarButton title="test"/>
        </div>
    );
}