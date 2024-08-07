import {useEffect, useRef} from "react";
import "./highlights-section-v3.css"
import gsap from "gsap";
import ScrollTrigger from 'gsap/scrollTrigger';

export default  function HighLightsSectionV3(){
    gsap.registerPlugin(ScrollTrigger);

    const largeHeadingRef = useRef([])
    const hightlightSecRef = useRef(null)

    const numberRefs = useRef([]);
    const targetNumbers = [1, 95, 50000, 100]; // 각 요소가 증가할 목표 숫자 값

    const titleRef = useRef(null);
    const subRef = useRef(null);
    const numberWrapRef = useRef(null);

    useEffect(() => {

        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: hightlightSecRef.current,
                    start: "top 80%",
                    end: "top 60%",
                    // markers: true,
                },
                delay: 0
            }
        )

        gsap.fromTo(
            subRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: hightlightSecRef.current,
                    start: "10% 80%",
                    end: "10% 60%",
                    // markers: true,
                },
                delay: 0.1
            }
        );

        gsap.fromTo(
            numberWrapRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: hightlightSecRef.current,
                    start: "30% 80%",
                    end: "30% 60%",
                    // markers: true,
                },
                delay: 0.3
            }
        );




        numberRefs.current.forEach((ref, index) => {
            gsap.fromTo(
              ref,
              { innerText: 0 },
              {
                  innerText: targetNumbers[index],
                  scrollTrigger: {
                      trigger: hightlightSecRef.current,
                      // markers: true,
                      start: "top center", // 스크롤 트리거가 화면의 중앙에 도달할 때 애니메이션 시작
                      end: "30% center",
                      // scrub: true,
                  },
                  duration: 3,
                  ease: "none",
                  snap: { innerText: 1 }, // 정수로 반올림
                  onUpdate: function () {
                      const value = Math.round(this.targets()[0].innerText);
                      ref.innerText = value.toLocaleString(); // 천 단위 쉼표 추가
                  }
              }
            );
        });

    }, [largeHeadingRef.current]);


    return(
        <>
            <section className="highlights-section-v3" ref={hightlightSecRef}>
                <div className={'high-light-inner'}>
                    <div className="highlights-description-wrapper">
                        <div className="clip highlights-title" ref={titleRef}>
                            <h2 className="large-heading" ref={(el) => (largeHeadingRef.current[0] = el)}>Company
                                Strength</h2>
                        </div>
                        <div className="highlights-descript-txtWrap" ref={subRef}>
                            <p>혁신하는 품질과 서비스를 제공하는, <br/>
                                당신의 신뢰할 수 있는 유통 파트너 UBT KOREA</p>
                        </div>
                    </div>
                    <div className="highlights-numbers-wrapper" ref={numberWrapRef}>
                        <div className="div-number">
                            <div className="number-wrapper">
                                <div className="highlight-number"
                                     ref={(el) => (numberRefs.current[0] = el)}
                                >0
                                </div>
                                <div className="highlight-number plus">조원</div>
                            </div>
                            <div className="subtitle-medium serif dark">연간 매출액</div>
                        </div>
                        <div className="div-vertical-divider"></div>
                        <div className="div-number">
                            <div className="number-wrapper">
                                <div className="highlight-number"
                                     ref={(el) => (numberRefs.current[1] = el)}
                                >0
                                </div>
                                <div className="highlight-number plus">%</div>
                            </div>
                            <div className="subtitle-medium serif dark">고객 만족도</div>
                        </div>
                        <div className="div-vertical-divider"></div>
                        <div className="div-number">
                            <div className="number-wrapper">
                                <div className="highlight-number"
                                     ref={(el) => (numberRefs.current[2] = el)}
                                >0
                                </div>
                                <div className="highlight-number plus">개</div>
                            </div>
                            <div className="subtitle-medium serif dark">제품 보유 수량</div>
                        </div>
                        <div className="div-vertical-divider"></div>
                        <div className="div-number">
                            <div className="number-wrapper">
                                <div className="highlight-number"
                                     ref={(el) => (numberRefs.current[3] = el)}
                                >0
                                </div>
                                <div className="highlight-number plus">개</div>
                            </div>
                            <div className="subtitle-medium serif dark">국내/해외 등록 업체 수</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}