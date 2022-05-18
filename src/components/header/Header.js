import "./Header.css";
import TopMenu from "./TopMenu";
import BottomMenu from "./BottomMenu";
function Header() {
    return (
        <header>
            <div className="main-header">
                <div className="logo" />
                <div className="menu">
                    <TopMenu />
                    <BottomMenu />
                </div>
            </div>
        </header>
    );
}

export default Header;
