import "./brxe-section.css"
import {useEffect, useRef, useState} from "react";
import {wrap} from "gsap/gsap-core";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/scrollTrigger";
import {NavLink} from "react-router-dom";
import gsap from "gsap";
import MomWholeBtn from "../MomWholeBtn/MomWholeBtn.jsx";
import MomWholeBtn1 from "../MomWholeBtn1/MomWholeBtn1.jsx";
// gsap.registerPlugin(ScrollTrigger);
export default function BrxeSection() {
    const listRef=useRef(null);
    useEffect(() => {
        const lilists = listRef.current.querySelectorAll(".smlet");
        gsap.set(lilists, { y: 20, opacity: 0,   transform: 'translate(0%, 110%) skew(30deg, 5deg) scale(0.89, 0.89)' });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: listRef.current,
                start: "top 80%",
                end: "bottom 80%",
                toggleActions: "play none none reverse", // 스크롤 내려갈 때 재생, 올라갈 때 역재생
                // markers:true,
            }
        });
        lilists.forEach((item, index) => {
            tl.to(item, {
                y: 0,
                opacity: 1,
                transform: 'translate(0px, 0px) skew(0deg, 0deg) scale(1, 1)',
                duration: 1,
                ease: 'power3.out'
            }, index * 0.3); // 각 항목의 시작 시간을 지연시킵니다
        });
    }, []);
    return (
        <>
            <section  className="brxe-section">
                <div  className="brxe-container" ref={listRef}>
                    <div className="left-box smlet">

                        <p className="subh-anim2">OUR
                            PURPOSE</p>
                    </div>
                    <div  className="brxe-jilxcl">
                        <div  className="brxe-right">
                            <div  className="brxe-text">
                                <p className={"smlet"}>
                                    <span className={"white"} >We’re all about leveling up every part of</span>

                                    <span >your business in the digital landscape,</span>

                                    <span className={"white"}> making sure that we do everything necessary to reach your objectives</span>

                                    <span >and also make you stand out</span>
                                   
                                    <span className={"white"}> in the crowd.</span></p>
                            </div>
                            <div className="brxe-rhbvyi smlet">
                                {/*트랜지션*/}
                                <NavLink to={""} className="brxe-asapip ">
                                    <MomWholeBtn name={'Get In Touch'}/>
                                </NavLink>
                                <NavLink  to={""} className="but-fade2">
                                    <MomWholeBtn1 name={'Services'}/>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}