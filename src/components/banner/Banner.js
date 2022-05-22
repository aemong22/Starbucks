import "./Banner.css";

function Banner() {
    return (
        <main role="main">
            <div className="main-banner">
                <div className="main-inner">
                    <div className="slogan">
                        <div className="main-slogan" />
                        <button className="btn-slogan">자세히 보기</button>
                    </div>
                    <div className="new">
                        <img
                            className="new-one"
                            src="	https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Summer1_main_pomeloflow.png"
                            alt="음료"
                        />
                        <img
                            className="new-two"
                            src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Summer1_main_rollinmint.png"
                            alt="음료"
                        />
                        <img
                            className="new-three"
                            src="	https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Summer1_main_punchgraffiti3.png"
                            alt="음료"
                        />
                    </div>
                </div>
            </div>
            <div className="banner-line">
                <div className="notion">공지사항</div>
                <div className="promotion">스타벅스 프로모션</div>
            </div>
            <div className="starbucks-rewards">
                <div className="reward">
                    <div className="logo">이미지</div>
                    <div className="rewards-content">
                        <div className="join">회원 가입 및 로그인</div>
                        <div className="giftcard">e-gift card 선물하기</div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Banner;
