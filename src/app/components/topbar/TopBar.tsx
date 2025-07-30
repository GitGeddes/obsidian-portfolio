import TopBarButton from "./components/TopBarButton";

export default function TopBar() {
    return (
        <div className="topbar row">
            <TopBarButton title="Portfolio"/>
            <TopBarButton title="VideoClipper"/>
            <TopBarButton title="test"/>
        </div>
    );
}