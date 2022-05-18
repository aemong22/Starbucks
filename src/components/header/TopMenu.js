import { HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./TopMenu.css";

function TopMenu() {
    return (
        <div className="top-menu">
            <nav>
                <ul>
                    <li className="line">
                        <Link to="/">Sign In</Link>
                    </li>
                    <li className="line">
                        <Link to="/">My Starbucks</Link>
                    </li>
                    <li className="line">
                        <Link to="/">Customer Service & Ideas</Link>
                    </li>
                    <li>
                        <Link to="/">Find a Store</Link>
                    </li>
                </ul>
            </nav>
            <button id="search">
                <HiSearch size="26" />
            </button>
        </div>
    );
}

export default TopMenu;
