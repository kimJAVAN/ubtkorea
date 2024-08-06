import React, {useEffect, useRef} from "react";
import "./video-main-st-big-section.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/scrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoMainStBigSection() {
    const titleRef = useRef();
    const stSectionRef = useRef();
    const opacityRef = useRef([]);
    const bgRef = useRef();
    const videoId = "OUaVLc9Pufo";

    useEffect(() => {
        let bigTl = gsap.timeline({
            scrollTrigger: {
                trigger: stSectionRef.current,
                start: "0% top",
                end: "10% top",
                // markers: true,
                scrub: 1,
            },
        })
        const videoElement = bgRef.current.querySelector(".video-st-big-bg");
        let bigTl2 = gsap.timeline({
            scrollTrigger: {
                trigger: stSectionRef.current,
                start: "10% top",
                end: "30% top",
                // markers: true,
                scrub: 1,
                onLeave: () => {
                    bgRef.current.style.opacity = "1";
                    if (videoElement) {
                        videoElement.play();
                    }
                },
                onEnterBack: () => {
                    bgRef.current.style.opacity = "0.3";
                    if (videoElement) {
                        videoElement.pause();
                        videoElement.currentTime = 0;
                    }
                }
            },
        });
        let bigTl3 = gsap.timeline({
            scrollTrigger: {
                trigger: stSectionRef.current,
                start: "33% top",
                end: "35% top",
                // markers: true,
                scrub: 1,
            },
        })

        // 모든 opacity 요소를 한 번에 처리
        bigTl.to(opacityRef.current, {
            opacity: 0,
        });
        bigTl2.to(titleRef.current, {
            left: "50%",
            x: "-50%",
            top: '50%',
            y: '-50%',
            scale: 2,
        });
        bigTl3.to(titleRef.current, {
            opacity: 0,
        });


    }, []);

    return (
        <section className="video-main-st-big-section" ref={stSectionRef}>
            <div className="video-st-big-container">
                <div className="video-st-big-bg-wrap" ref={bgRef}>
                    <video className="video-st-big-bg"
                           src="/images/Main2/esMain/video-main-st-big-section/3-1.mp4"
                            muted playsInline loop />
                    {/*<iframe*/}
                    {/*    className="video-st-big-bg"*/}
                    {/*    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`}*/}
                    {/*    frameBorder="0"*/}
                    {/*    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                    {/*    allowFullScreen*/}
                    {/*    title="YouTube video"*/}
                    {/*/>*/}
                </div>
                <div className="video-st-big-wrap">
                    <div className="video-st-big-sub-title" ref={el => (opacityRef.current[0] = el)}>
                        자율 주행 자동차 산업의 장애물 회피 알고리즘 탑재
                    </div>
                    <div className="video-st-big-num-wrap">
                        <div className="video-st-big-num" ref={titleRef}>
                            <div className="video-st-big-num-title">
                                730일
                            </div>
                            <div className="video-st-big-sub-title">
                                알고리즘 개발
                            </div>
                        </div>

                        <div className="video-st-big-num" ref={el => (opacityRef.current[1] = el)}>
                            <div className="video-st-big-num-title">
                                8,000억
                            </div>
                            <div className="video-st-big-sub-title">
                                초당 AI 칩 계학
                            </div>
                        </div>

                        {/*<div className="video-st-big-num" ref={el => (opacityRef.current[2] = el)}>*/}
                        {/*    <div className="video-st-big-num-title">*/}
                        {/*        LED*/}
                        {/*    </div>*/}
                        {/*    <div className="video-st-big-sub-title">*/}
                        {/*        어두운 공간도 놓치지않게*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>

                    <div className="video-st-big-sub-wrap" ref={el => (opacityRef.current[3] = el)}>
                        <div className="video-st-big-sub-desc">
                            자체 개발한 알고리즘이 매우 발전하여 LG코드제로는 집 안을 돌아다닐 때 자율 주행 자동차처럼 작동합니다.<br/>장애물을 인식하고, 피하고, 갇히지 않도록 합니다.
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
