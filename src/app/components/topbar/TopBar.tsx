import TopBarButton from "./components/TopBarButton";

export default function TopBar() {
    return (
        <div className="topbar row fillWidth">
            <TopBarButton title="Portfolio"/>
            <TopBarButton title="Video Clipper"/>
            <TopBarButton title="test"/>
        </div>
    );
}