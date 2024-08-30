import React, { useEffect, useRef, useState } from 'react';
import "./MomLastSection.css";
import MomWholeBtn from '../MomWholeBtn/MomWholeBtn';
import { FaArrowUp } from "react-icons/fa6";

import gsap from "gsap";
import ScrollTrigger from "gsap/scrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const MomLastSection = () => {

    useEffect(() => {
        gsap.to('.mom-last-section .mom-last-desc', {
            scrollTrigger: {
                trigger: '.mom-last-section',
                start: "10% bottom",
                end: "bottom bottom",
                scrub: true,
                // markers: true,
            },
            scale: 1

        })
        gsap.to('.mom-last-section .mom-last-title', {
            scrollTrigger: {
                trigger: '.mom-last-section',
                start: "10% bottom",
                end: "bottom bottom",
                scrub: true,
                // markers: true,
            },
            scale: 1,
            y: '0%'

        })
        gsap.to('.mom-last-section .mom-last-button', {
            scrollTrigger: {
                trigger: '.mom-last-section',
                start: "10% bottom",
                end: "bottom bottom",
                scrub: true,
                // markers: true,
            },
            scale: 1,
            y: '0%'

        })
    }, [])



    return (
        <section className='mom-last-section'>
            <div className="mom-last-container">

                <p className='mom-last-desc'>
                    Wanna work <br />
                    with us?
                </p>

                <h2 className='mom-last-title'>
                    FUTURE WITH <br />
                    UBT KOREA
                </h2>
                <div className='mom-last-button'>
                    <MomWholeBtn name={'Contact Us'} />
                </div>




            </div>
            <div className="mom-last-gotop" onClick={()=>{
                window.scrollTo(0,0)
            }}>
                <div className='mom-last-whitebutton'>
                    <FaArrowUp />
                    <p>Top</p>
                </div>

                <div className="mom-last-bluebutton">
                    <FaArrowUp />
                    <p>Top</p>
                </div>
            </div>
        </section>
    );
};

export default MomLastSection;