import "./brxe-ywnrmc.css"
import React, { useState, useRef,useEffect } from "react";
import {NavLink} from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/scrollTrigger";
import MomWholeBtn from "../MomWholeBtn/MomWholeBtn.jsx";
import MomWholeBtn1 from "../MomWholeBtn1/MomWholeBtn1.jsx";
gsap.registerPlugin(ScrollTrigger);
export default function BrxeYwnrmc() {


    const coverRef=useRef(null);
    useEffect(() => {
        const lilists = coverRef.current.querySelectorAll(".smlet");
        gsap.set(lilists, { y: 20, opacity: 0 });
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: coverRef.current,
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
                duration: 1,
                ease: 'power3.out'
            }, index * 0.3); // 각 항목의 시작 시간을 지연시킵니다
        });
    }, []);

return (
    <>
<section className={'brxe-ywnrmc'}>
    <div className={"rxe-ywnrmc-cover"}  ref={coverRef}>
        <div className={"brxe-container"}>
            <p className={"top-txt smlet"} >
                SOME OF OUR RESULTS
            </p>
            <p className={"top-context"}>
              <div className={"brxe-heading slide-up2 smlet"}>
                  We Are Confident in What We Do, And Data
              </div>
                <div className={"brxe-heading slide-up2 smlet"}>
                    Supports Our Approach
                </div>
            </p>
        </div>
        <div className={"brxe-container"}>
            <div className={"box-cover"}>
            <div className={'brxe-list-box smlet'}>
                <div className={"brxe-persent "}>
                    <p className={"num"}>100</p>
                    <p className={"numper"}>%</p>
                </div>
                <div className={"bottom-txt-box"}>
                    <p className={"bottom-txt top-txt"}>
                        SATISFIED CLIENTS
                    </p>
                </div>
            </div>
            <div className={'brxe-list-box smlet'}>
                <div className={"brxe-persent"}>
                    <p className={"num"}>100</p>
                    <p className={"numper"}>%</p>
                </div>
                <div className={"bottom-txt-box"}>
                    <p className={"bottom-txt top-txt"}>
                        SATISFIED CLIENTS
                    </p>
                </div>
            </div>
            <div className={'brxe-list-box smlet'}>
                <div className={"brxe-persent"}>
                    <p className={"num"}>100</p>
                    <p className={"numper"}>%</p>
                </div>
                <div className={"bottom-txt-box"}>
                    <p className={"bottom-txt top-txt"}>
                        SATISFIED CLIENTS
                    </p>
                </div>
            </div>
            <div className={'brxe-list-box smlet'}>
                <div className={"brxe-persent"}>
                    <p className={"num"}>100</p>
                    <p className={"numper"}>%</p>
                </div>
                <div className={"bottom-txt-box"}>
                    <p className={"bottom-txt top-txt"}>
                        SATISFIED CLIENTS
                    </p>
                </div>
            </div>
            </div>
        </div>
        <div className={"brxe-container"}>
            <div className={'brxe-pasrwv smlet'}>
                <div className={"a-box"}>
                <NavLink to={""} className={"brxe-link"}>
                    <MomWholeBtn name={'Get In Touch'}/>
                </NavLink>
                    <NavLink to={""} className={"brxe-link"}>
                        <MomWholeBtn1 name={'Service'}/>
                    </NavLink>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
)
}