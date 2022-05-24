import "./SmallBanner.css";

function SmallBanner() {
    return (
        <>
            <main role="main" className="s-main">
                <div className="s-main-banner">
                    <div className="s-main-inner">
                        <div className="s-slogan">
                            <div className="s-main-slogan" />
                            <button className="s-btn-slogan">
                                자세히 보기
                            </button>
                        </div>
                        <div className="new">
                            <img
                                className="s-new-one"
                                src="	https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Summer1_main_pomeloflow.png"
                                alt="음료"
                            />
                            <img
                                className="s-new-two"
                                src="https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Summer1_main_rollinmint.png"
                                alt="음료"
                            />
                            <img
                                className="s-new-three"
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
                <div className="s-starbucks-rewards">
                    <div className="s-rewards">
                        <div className="s-rewards-logo">
                            <img
                                className="s-rewards-img"
                                src="https://image.istarbucks.co.kr/common/img/main/rewards-logo.png"
                                alt="스타벅스 리워즈"
                            />
                        </div>
                        <div className="s-rewards-content">
                            <div className="s-rewards-join">
                                <span
                                    style={{
                                        fontSize: "24px",
                                        color: "white",
                                    }}
                                >
                                    스타벅스만의 특별한 혜택, <br />
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
                                    }}
                                >
                                    <div>
                                        <span className="s-rewards-font-bold">
                                            스타벅스 회원이세요?&nbsp;&nbsp;
                                        </span>
                                        <span className="s-rewards-font">
                                            로그인을 통해 <br /> 나만의 리워드를
                                            확인해 보세요.
                                        </span>
                                        <br />
                                        <span className="s-rewards-font-bold">
                                            스타벅스 회원이 아니세요?
                                        </span>
                                        <br />
                                        <span className="s-rewards-font">
                                            가입을 통해 리워드 혜택을 즐기세요.
                                        </span>
                                    </div>
                                    <div className="s-rewards-button">
                                        <button className="s-rewards-join-btn">
                                            회원가입
                                        </button>
                                        <button className="s-rewards-login-btn">
                                            로그인
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="s-rewards-giftcard">
                                <div className="s-rewards-giftcard-text">
                                    회원 가입 후, 스타벅스 e-Gift Card를 <br />
                                    "나에게 선물하기"로 구매하시고, 편리하게
                                    등록하세요!
                                    <br />
                                    카드를 등록하여 스타벅스 리워드 회원이 되신
                                    후, <br /> 첫 구매를 하시면 무료 음료쿠폰을
                                    드립니다!
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
        </>
    );
}

export default SmallBanner;
