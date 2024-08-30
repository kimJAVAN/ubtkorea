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

                        <p className="subh-anim2">CEO MESSAGE</p>
                    </div>
                    <div  className="brxe-jilxcl">
                        <div  className="brxe-right">
                            <div className="brxe-text">
                                <div className={"smlet"}>
                                    <p className={"white"}>안녕하십니까,
                                    </p>

                                    <p>저희 UBT Korea를 찾아주신 여러분께 진심으로 감사의 말씀을 드립니다.
                                        UBT Korea는 아직 세상에 널리 알려지지 않은 아름다움을 발견하고, 이를 고객 여러분과 공유하기 위해 설립되었습니다.

                                    </p>

                                    <p className={"white"}> 우리는 일상 속에서 발견되지 않은 가치와 매력을 지닌 제품들을 발굴하여 더 많은 사람들에게 알리고자 합니다.
                                    </p>

                                    <p>우리의 목표는 단순한 소비를 넘어, 고객의 삶 속에서 더 큰 가치를 창출하는 것입니다.

                                    </p>

                                    <p className={"white"}>UBT Korea는 혁신과 열정을 바탕으로 고객의 기대를 뛰어넘는 제품과 경험을 제공하며, 새로운 아름다움을
                                        함께 만들어 나가겠습니다.


                                        UBT Korea CEO 김성학</p>
                                    <p> 앞으로도 많은 관심과 성원을 부탁드리며, 여러분의 일상 속에서 작은 아름다움을 발견할 수 있도록 최선을 다하겠습니다.
                                        감사합니다.

                                    </p>
                                </div>

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