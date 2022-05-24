import "./Header.css";
import TopMenu from "./TopMenu";
import BottomMenu from "./BottomMenu";
import { useMediaQuery } from "react-responsive";
import { RiMenuFill } from "react-icons/ri";

function Header() {
    const SmallScreen = useMediaQuery({
        query: "(max-width : 980px)",
    });

    return (
        <header>
            {SmallScreen ? (
                <div className="s-header">
                    <div className="s-logo" />
                    <div className="s-menu">
                        <RiMenuFill size="40" color="#301906" />
                    </div>
                </div>
            ) : (
                <div className="main-header">
                    <div className="logo" />
                    <div className="menu">
                        <TopMenu />
                        <BottomMenu />
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
