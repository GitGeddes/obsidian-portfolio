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
        </div>
    );
}