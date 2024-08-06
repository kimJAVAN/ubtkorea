import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/scrollTrigger";
import './AiPointSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function AiPointSection() {
    const aiPointBoxLineLeft = useRef();
    const aiPointBoxLineRight = useRef();
    const aiPointSection = useRef();
    const aiPointContainer = useRef();
    const aiNewsContainer = useRef();
    const aiNewsBoxes = useRef([]);
    const aiNewsImagWrap = useRef([]);
    const aiNewsImages = useRef([]);
    const aiNewsPort = useRef();
    const aiNewsTitle = useRef();

    useEffect(()=>{
        gsap.to(aiPointBoxLineLeft.current, {
            scrollTrigger: {
                trigger: aiPointContainer.current,
                start: `300px top`,
                end: `90% top`,
                scrub: true,
                // markers: false,
            },
            x: "-200%"
        });
        gsap.to(aiPointBoxLineRight.current, {
            scrollTrigger: {
                trigger: aiPointContainer.current,
                start: `300px top`,
                end: `90% top`,
                scrub: true,
                // markers: false,
            },
            x: "200%"
        });


        const aitl1 = gsap.timeline({
            scrollTrigger: {
                trigger: aiNewsContainer.current,
                start: '0 top',
                end: 'center center',
                scrub: true,
                markers: false,
            },
        })

        aitl1.to(aiNewsBoxes.current, {
            borderRadius: "50px",
            width: '40%',
            height: '40%',
            y: "100px",
            border: "1px solid grey",
             backgroundColor: "#111",
            // stagger: 0.1,
        },0);

        aitl1.to(aiNewsImages.current, {
            backgroundColor: "black"
        },0);

        aitl1.to(aiNewsBoxes.current[2], {
            height: '60%',
            borderRadius: "50px",
        },0);


        const aitl2 = gsap.timeline({
            scrollTrigger: {
                trigger: aiNewsContainer.current,
                start: '55% center',
                end: '90% center',
                scrub: true,
                markers: false,
            },
        })
        aitl2.to(aiNewsImages.current, {
            opacity: 1,
        },0);

        aitl2.to(aiNewsTitle.current, {
            bottom: "350px",
        },0);

        aitl2.to(aiNewsContainer.current, {
            padding: "0 30px",
        },0);

        aitl2.to(aiNewsBoxes.current, {
            width: ' calc(20% - 10px)',
            height: '300px',
            y: "0",
            borderRadius: "20px",
            border: "unset"
            // stagger: 0.1,
        },0);

        const aitl3 = gsap.timeline({
            scrollTrigger: {
                trigger: aiNewsContainer.current,
                start: '90% center',
                end: 'bottom center',
                scrub: true,
                markers: false,
            },
        })

        aitl3.to(aiNewsPort.current, {
            opacity: 1,
        },0);
    }, []);

    return (
        <section className={`ai-point-section`} ref={aiPointSection}>
            <div className="ai-point-container" ref={aiPointContainer}>
                <div className="ai-point-wrap">
                    <div className="ai-point-box-line" ref={aiPointBoxLineLeft}>
                        <div className="ai-point-box">
                            <div className="ai-point-box-num">
                                1
                            </div>
                            <div className="ai-point-box-title">
                                POINT 01
                            </div>
                            <div className="ai-point-box-desc">
                                Front run announcements by tracking the public development of all major crypto protocols
                            </div>
                        </div>
                        <div className="ai-point-box">
                            <div className="ai-point-box-num">
                                2
                            </div>
                            <div className="ai-point-box-title">
                                POINT 02
                            </div>
                            <div className="ai-point-box-desc">
                                Front run announcements by tracking the public development of all major crypto protocols
                            </div>
                        </div>
                    </div>

                    <div className="ai-point-box-line" ref={aiPointBoxLineRight}>
                        <div className="ai-point-box">
                            <div className="ai-point-box-num">
                                3
                            </div>
                            <div className="ai-point-box-title">
                                POINT 03
                            </div>
                            <div className="ai-point-box-desc">
                                Front run announcements by tracking the public development of all major crypto protocols
                            </div>
                        </div>
                        <div className="ai-point-box">
                            <div className="ai-point-box-num">
                                4
                            </div>
                            <div className="ai-point-box-title">
                                POINT 04
                            </div>
                            <div className="ai-point-box-desc">
                                Front run announcements by tracking the public development of all major crypto protocols
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="ai-news-container" ref={aiNewsContainer}>
                <div className="ai-news-wrap">
                    <div className="ai-news-title" ref={aiNewsTitle}>
                        NEWS
                    </div>
                    {Array(5).fill().map((_, i) => (
                        <div
                            className="ai-news-box"
                            ref={(el) => aiNewsBoxes.current[i] = el}
                            key={i}
                        >
                            <div className="ai-news-box-img-wrap" ref={(el) => aiNewsImagWrap.current[i] = el}>
                                <img src={`/ai-point-section/${i + 1}.jpg`}
                                     ref={(el) => aiNewsImages.current[i] = el}
                                     alt=""/>
                            </div>
                            <div className="ai-news-box-title">
                                주요 기사 제목
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="ai-news-port" ref={aiNewsPort}>
                <div className="ai-news-wrap">
                    {Array(10).fill().map((_, i) => (
                        <div
                            className="ai-news-box"
                            key={i}
                        >
                            <div className="ai-news-box-img-wrap">
                                <img src={`/ai-point-section/${2}.jpg`}
                                     alt=""/>
                            </div>
                            <div className="ai-news-box-title">
                                주요 기사 제목
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
