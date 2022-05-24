import "./Banner.css";

function Banner() {
    return (
        <main role="main" className="main">
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
                <div className="rewards">
                    <div className="rewards-logo">
                        <img
                            className="rewards-img"
                            src="https://image.istarbucks.co.kr/common/img/main/rewards-logo.png"
                            alt="스타벅스 리워즈"
                        />
                    </div>
                    <div className="rewards-content">
                        <div className="rewards-join">
                            <span
                                style={{
                                    fontSize: "24px",
                                    color: "white",
                                }}
                            >
                                스타벅스만의 특별한 혜택,&nbsp;&nbsp;
                                <span
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: "26px",
                                    }}
                                >
                                    스타벅스 리워드
                                </span>
                            </span>
                            <div
                                style={{
                                    marginTop: "12px",
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <div>
                                    <span className="rewards-font-bold">
                                        스타벅스 회원이세요?&nbsp;&nbsp;
                                    </span>
                                    <span className="rewards-font">
                                        로그인을 통해 나만의 리워드를 확인해
                                        보세요.
                                    </span>
                                    <br />
                                    <span className="rewards-font-bold">
                                        스타벅스 회원이 아니세요?&nbsp;&nbsp;
                                    </span>
                                    <span className="rewards-font">
                                        가입을 통해 리워드 혜택을 즐기세요.
                                    </span>
                                </div>
                                <div className="rewards-button">
                                    <button className="rewards-join-btn">
                                        회원가입
                                    </button>
                                    <button className="rewards-login-btn">
                                        로그인
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="rewards-giftcard">
                            <div className="rewards-giftcard-text">
                                회원 가입 후, 스타벅스 e-Gift Card를 "나에게
                                선물하기"로 구매하시고, 편리하게 등록하세요!
                                <br />
                                카드를 등록하여 스타벅스 리워드 회원이 되신 후,
                                첫 구매를 하시면 무료 음료쿠폰을 드립니다!
                            </div>
                            <div>
                                <button className="giftcard-btn">
                                    e-Gift Card 선물하기
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Banner;
