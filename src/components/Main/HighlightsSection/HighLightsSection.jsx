import {useEffect, useRef} from "react";
import "./highlights-section.css"
import gsap from "gsap";
import ScrollTrigger from 'gsap/scrollTrigger';

export default  function HighLightsSection(){
    gsap.registerPlugin(ScrollTrigger);

    const largeHeadingRef = useRef([])
    const hightlightSecRef = useRef(null)

    const numberRefs = useRef([]);
    const targetNumbers = [34, 20, 60, 10]; // 각 요소가 증가할 목표 숫자 값

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
                      ref.innerText = Math.round(this.targets()[0].innerText);
                  }
              }
            );
        });

    }, [largeHeadingRef.current]);


    return(
        <>
            <section className="highlights-section" ref={hightlightSecRef}>
                <div className={'high-light-inner'}>
                    <div className="highlights-description-wrapper">
                        <div className="clip highlights-title" ref={titleRef}>
                            <h2 className="large-heading" ref={(el) => (largeHeadingRef.current[0] = el)}>Company
                                Strength</h2>
                        </div>
                        <div className="highlights-descript-txtWrap" ref={subRef}>
                            <p>핵심 부품부터 장비 솔루션까지 전 과정 자체 개발을 통해 <br/>
                                경쟁 우위 확보인 퓨런티어의 차별화를 확인하세요.</p>
                        </div>
                    </div>
                    <div className="highlights-numbers-wrapper" ref={numberWrapRef}>
                        <div className="div-number">
                            <div className="number-wrapper">
                                <div className="highlight-number"
                                     ref={(el) => (numberRefs.current[0] = el)}
                                >0
                                </div>
                                <div className="highlight-number plus">+</div>
                            </div>
                            <div className="subtitle-medium serif dark">지적 재산권</div>
                        </div>
                        <div className="div-vertical-divider"></div>
                        <div className="div-number">
                            <div className="number-wrapper">
                                <div className="highlight-number"
                                     ref={(el) => (numberRefs.current[1] = el)}
                                >0
                                </div>
                                <div className="highlight-number plus">+</div>
                            </div>
                            <div className="subtitle-medium serif dark">공정 솔루션</div>
                        </div>
                        <div className="div-vertical-divider"></div>
                        <div className="div-number">
                            <div className="number-wrapper">
                                <div className="highlight-number"
                                     ref={(el) => (numberRefs.current[2] = el)}
                                >0
                                </div>
                                <div className="highlight-number plus">+</div>
                            </div>
                            <div className="subtitle-medium serif dark">프로젝트</div>
                        </div>
                        <div className="div-vertical-divider"></div>
                        <div className="div-number">
                            <div className="number-wrapper">
                                <div className="highlight-number"
                                     ref={(el) => (numberRefs.current[3] = el)}
                                >0
                                </div>
                                <div className="highlight-number plus">+</div>
                            </div>
                            <div className="subtitle-medium serif dark">핵심 컴포넌트</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}