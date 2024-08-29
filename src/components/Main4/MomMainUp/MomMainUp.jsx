import "./MomMainUp.css"
import {useEffect, useRef, useState} from "react";
import {wrap} from "gsap/gsap-core";
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
                        {"UBT KOREA".split("").map((char, index) => (
                            <span key={index} style={{ display: "inline-block" }}>
                                {char}
                            </span>
                        ))}
                    </div>
                </div>
                <div className={'mom-main-bg-wrapper'}>
                    <video src={'/mom-main-up/video4.mp4'} loop muted playsInline autoPlay/>
                </div>
                <div className={'mom-main-btm-text-wrapper'}>
                    <div className={'mom-btm-left-text-wrap'}>
                        <div className={'mom-btm-top-btn'}>
                            <p>services</p>
                        </div>
                        <p className={'mom-btm-left-contexts'}>
                            - UI/UX Design <br/>
                            - Web Development <br/>
                            - Ads Management
                        </p>
                    </div>
                    <div className={'mom-btm-center-wrap'}>
                        <p className={'center-small-text'}>
                            WE ARE THE ONLY
                        </p>
                        <p className={'center-large-text'}>
                            Full Service Digital Agency Focused <br/>
                            On Home & Design Businesses
                        </p>
                        <p className={'center-small-text'}>
                            Full Service Digital Agency Focused On Home & Design Businesses & Design Businesses<br/>
                            Full Service Digital Agency Focused On Home & Design Businesses<br/>
                            Full Service Digital Agency Focused On Home & Design Businesses & Design Businesses
                        </p>
                    </div>
                    <div className={'btm-right-video'}>
                        <div className={'btm-video-wrapper'}>
                            <video src={'/mom-main-up/video4.mp4'} loop muted playsInline autoPlay />
                        </div>
                        <p className={'btm-right-video-text'}>Vibe Interior</p>
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