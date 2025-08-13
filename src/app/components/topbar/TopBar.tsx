import GitHub from "@mui/icons-material/GitHub";
import HoverButton from "../sidebar/components/HoverButton";
import TopBarButton from "./components/TopBarButton";

export default function TopBar() {
    return (
        <div className="topbar row">
            <TopBarButton title="index" href="/"/>
            <TopBarButton title="Amazon"/>
            <TopBarButton title="Groupie"/>
            <TopBarButton title="Portfolio"/>
            <TopBarButton title="VideoClipper"/>
            <TopBarButton title="Graph"/>
            <TopBarButton title="test"/>
            <div
                style={{
                    position: 'absolute',
                    right: 0
                }}
            >
                <HoverButton href='https://github.com/GitGeddes/obsidian-portfolio'>
                    <GitHub fontSize='small' />
                </HoverButton>
            </div>
        </div>
    );
}