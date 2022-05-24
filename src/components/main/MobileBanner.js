import "./MobileBanner.css";

function MobileBanner() {
    return (
        <>
            <main role="main" className="m-main">
                <div className="m-main-banner">
                    <div className="m-main-inner">
                        <div className="m-slogan">
                            <div className="m-main-slogan" />
                        </div>
                        <div className="m-new">
                            <div>
                                <img
                                    className="m-new-one"
                                    src="https://image.istarbucks.co.kr/upload/common/img/main/2022/m_2022_Summer1_main_punchgraffiti2.png"
                                    alt="음료"
                                />
                            </div>
                            <div>
                                <img
                                    className="m-new-two"
                                    src="https://image.istarbucks.co.kr/upload/common/img/main/2022/m_2022_Summer1_main_rollinmint.png"
                                    alt="음료"
                                />
                            </div>
                            <div>
                                <img
                                    className="m-new-three"
                                    src="https://image.istarbucks.co.kr/upload/common/img/main/2022/m_2022_Summer1_main_pomeloflow.png"
                                    alt="음료"
                                />
                            </div>
                        </div>
                        <div>
                            <button className="m-btn-slogan">
                                자세히 보기
                            </button>
                        </div>
                    </div>
                </div>
                <div className="banner-line">
                    <div className="notion">공지사항</div>
                    <div className="promotion">스타벅스 프로모션</div>
                </div>
                <div className="m-starbucks-rewards">
                    <div className="m-rewards">
                        <div className="m-rewards-logo">
                            <img
                                className="rewards-img"
                                src="https://image.istarbucks.co.kr/common/img/main/rewards-logo.png"
                                alt="스타벅스 리워즈"
                            />
                        </div>
                        <div className="m-rewards-content">
                            <div className="m-rewards-join">
                                <div
                                    style={{
                                        fontSize: "17px",
                                        color: "white",
                                        paddingBottom: "12px",
                                    }}
                                >
                                    스타벅스만의 특별한 혜택
                                    <div
                                        style={{
                                            fontWeight: "bold",
                                            fontSize: "20px",
                                        }}
                                    >
                                        스타벅스 리워드
                                    </div>
                                </div>
                                <div>
                                    <div className="m-rewards-font-bold">
                                        스타벅스 회원이세요? <br />
                                    </div>
                                    <div className="m-rewards-font">
                                        로그인을 통해 나만의 리워드를 확인해
                                        보세요.
                                    </div>
                                    <div className="m-rewards-font-bold">
                                        스타벅스 회원이 아니세요? <br />
                                    </div>
                                    <div className="m-rewards-font">
                                        가입을 통해 리워드 혜택을 즐기세요.
                                    </div>
                                    <div className="m-rewards-button">
                                        <button className="m-rewards-join-btn">
                                            회원가입
                                        </button>
                                        <button className="m-rewards-login-btn">
                                            로그인
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="m-rewards-giftcard">
                                <div className="m-rewards-giftcard-text">
                                    회원 가입 후, 스타벅스 e-Gift Card를 "나에게
                                    선물하기"로 구매하시고, 편리하게 등록하세요!
                                    <br />
                                    카드를 등록하여 스타벅스 리워드 회원이 되신
                                    후, 첫 구매를 하시면 무료 음료쿠폰을
                                    드립니다!
                                </div>
                                <div>
                                    <button className="m-giftcard-btn">
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

export default MobileBanner;
