import "./MomMainUp.css"
import { useEffect, useRef, useState } from "react";
import { wrap } from "gsap/gsap-core";
import gsap from "gsap";
import ScrollTrigger from "gsap/scrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function MomMainUp() {

    const textRef = useRef(null);

    useEffect(() => {
        const spans = textRef.current.children;
        gsap.set(spans, { y: "100%", opacity: 0 });
        gsap.to(spans, {
            y: 0,
            opacity: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "power3.out",
        });
    }, []);

    return (
        <section className={`mom-main-up`}>
            <div className={'mom-main-wrapper'}>
                <div className={'mom-main-ani-text-wrap'}>
                    <div className="mom-main-ani-text" ref={textRef}>
                        <img src="/images/Main4/ubtlogo.png" alt="" />
                        {"UBT KOREA".split("").map((char, index) => (
                            <span key={index} style={{ display: "inline-block" }}>
                                {char}
                            </span>
                        ))}
                    </div>
                </div>
                <div className={'mom-main-bg-wrapper'}>
                    <video src={'/mom-main-up/video4.mp4'} loop muted playsInline autoPlay />
                </div>
                <div className={'mom-main-btm-text-wrapper'}>
                    <div className={'mom-btm-left-text-wrap'}>
                        <div className={'mom-btm-top-btn'}>
                            <p>Our Service</p>
                        </div>
                        <p className={'mom-btm-left-contexts'}>
                            - 프렌차이즈 건설업 <br />
                            - 복지&폐쇄몰 온라인 마켓 <br />
                            - 리퍼, 오프라인 매장 수출
                        </p>
                    </div>
                    <div className={'mom-btm-center-wrap'}>
                        <p className={'center-small-text'}>
                            Unidentified Beautiful Things
                        </p>
                        <p className={'center-large-text'}>
                            UBT KOREA <br />
                            아직 알려지지 않은 아름다움
                        </p>
                        <p className={'center-small-text'}>
                            더 나은 더 합리적인 유통 전략을 고민하고 제품과 우리의 아름다움을 알려드리겠습니다
                        </p>
                    </div>
                    <div className={'btm-right-video'}>
                        <div className={'btm-video-wrapper'}>
                            <video src={'/mom-main-up/video4.mp4'} loop muted playsInline autoPlay />
                        </div>
                        <p className={'btm-right-video-text'}>Main Product</p>
                        <div className={'btm-discover-btn'}>
                            <p>DISCOVER</p>
                            <p>DISCOVER</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}