import "./BottomMenu.css";
import { Link } from "react-router-dom";

function BottomMenu() {
    return (
        <div className="bottom-menu">
            <ul>
                <li className="main-menu">
                    <Link to="/">COFFEE</Link>
                    <div className="menu2">
                        <div className="sub">
                            <div className="content">
                                <div className="categoryTitle">커피</div>
                                <div className="category">스타벅스 원두</div>
                                <div className="category">스타벅스 비아</div>
                                <div className="category">
                                    스타벅스앳호by캡슐
                                </div>
                            </div>
                            <div className="content">
                                <div className="categoryTitle">
                                    나와 어울리는 커피
                                </div>
                            </div>
                            <div className="content">
                                <div className="categoryTitle">
                                    스타벅스 리저브 TM
                                </div>
                                <div className="category">RESERVE MAGAZINE</div>
                            </div>
                            <div className="content">
                                <div className="categoryTitle">
                                    에스프레소 음료
                                </div>
                                <div className="category">도피오</div>
                                <div className="category">
                                    에스프레소 마키아또
                                </div>
                                <div className="category">아메리카노</div>
                                <div className="category">마키아또</div>
                                <div className="category">카푸치노</div>
                                <div className="category">라떼</div>
                                <div className="category">모카</div>
                            </div>
                        </div>
                        <div className="sub">
                            <div className="content">
                                <div className="categoryTitle">
                                    최상의 커피를 즐기는 법
                                </div>
                                <div className="category">커피 프레스</div>
                                <div className="category">푸어 오버</div>
                                <div className="category">아이스 푸어 오버</div>
                                <div className="category">커피 메이커</div>
                                <div className="category">
                                    리저브를 매장에서 다양하게 즐기는 법
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="main-menu">
                    <Link to="/">MENU</Link>
                </li>
                <li className="main-menu">
                    <Link to="/">STORE</Link>
                </li>
                <li className="main-menu">
                    <Link to="/">RESPONSIBILITY</Link>
                </li>
                <li className="main-menu">
                    <Link to="/">STARBUCKS REWARDS</Link>
                </li>
                <li className="main-menu">
                    <Link to="/">WHAT'S NEW </Link>
                </li>
            </ul>
        </div>
    );
}

export default BottomMenu;
