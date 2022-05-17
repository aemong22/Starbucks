import "./Header.css";

function Header() {
    return (
        <header>
            <div className="main-header">
                <div className="logo">로고</div>
                <div className="menu">
                    <div className="top-menu">
                        <ul>
                            <li>Sign In</li>
                            <li>|</li>
                            <li>My Starbucks</li>
                            <li>|</li>
                            <li>Customer Service & Ideas</li>
                            <li>|</li>
                            <li>Find a Store</li>
                            <li id="search">
                                <i class="fa-solid fa-magnifying-glass fa-lg"></i>
                            </li>
                        </ul>
                    </div>
                    <div className="bottom-menu">
                        <ul>
                            <li>COFFEE</li>
                            <li>MENU</li>
                            <li>STORE</li>
                            <li>RESPONSIBILITY</li>
                            <li>STARBUCKS REWARDS</li>
                            <li>WHAT'S NEW </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
