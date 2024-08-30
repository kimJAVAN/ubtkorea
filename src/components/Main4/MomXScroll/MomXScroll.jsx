import React, { useEffect, useRef, useState } from 'react';
import "./MomXScroll.css";

import gsap from "gsap";
import ScrollTrigger from "gsap/scrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const MomXScroll = () => {


    const [scrollActive, setScrollActive] = useState(false)
    const [titleActive, setTitleActive] = useState(false)


    useEffect(() => {

        gsap.to('.mom-xscroll-section .mom-xscroll-topleft', {
            scrollTrigger: {
                trigger: '.mom-xscroll-section',
                start: "10% top",
                end: "10% top",
                scrub: true,
                // markers: true,

                onEnter: () => {
                    setScrollActive(true)
                },
                onLeaveBack: () => {
                    setScrollActive(false)
                }
            },
        })

        gsap.to('.mom-xscroll-section .mom-xscroll-titlewrap', {
            scrollTrigger: {
                trigger: '.mom-xscroll-section',
                start: "top top",
                end: "top top",
                scrub: true,
                // markers: true,

                onEnter: () => {
                    setTitleActive(true)
                },
                onLeaveBack: () => {
                    setTitleActive(false)
                }
            },
        })

        gsap.to('.mom-xscroll-section .mom-xscroll-contents', {
            scrollTrigger: {
                trigger: '.mom-xscroll-section',
                start: "10% top",
                end: "bottom bottom",
                scrub: true,
                // markers: true,
            },
            x: -2400
        })

        gsap.to('.mom-xscroll-section .mom-xscroll-bar.bar1', {
            scrollTrigger: {
                trigger: '.mom-xscroll-section',
                start: "10% top",
                end: "20% top",
                scrub: true,
                // markers: true,
            },
            scaleX: 1
        })
        gsap.to('.mom-xscroll-section .mom-xscroll-innerbar.innerbar1', {
            scrollTrigger: {
                trigger: '.mom-xscroll-section',
                start: "12% top",
                end: "20% top",
                scrub: true,
                // markers: true,
            },
            width: '100%'
        })

        gsap.to('.mom-xscroll-section .mom-xscroll-bar.bar2', {
            scrollTrigger: {
                trigger: '.mom-xscroll-section',
                start: "20% top",
                end: "30% top",
                scrub: true,
                // markers: true,
            },
            scaleX: 1
        })
        gsap.to('.mom-xscroll-section .mom-xscroll-innerbar.innerbar2', {
            scrollTrigger: {
                trigger: '.mom-xscroll-section',
                start: "22% top",
                end: "30% top",
                scrub: true,
                // markers: true,
            },
            width: '100%'
        })

        gsap.to('.mom-xscroll-section .mom-xscroll-bar.bar3', {
            scrollTrigger: {
                trigger: '.mom-xscroll-section',
                start: "30% top",
                end: "40% top",
                scrub: true,
                // markers: true,
            },
            scaleX: 1
        })
        gsap.to('.mom-xscroll-section .mom-xscroll-innerbar.innerbar3', {
            scrollTrigger: {
                trigger: '.mom-xscroll-section',
                start: "32% top",
                end: "40% top",
                scrub: true,
                // markers: true,
            },
            width: '100%'
        })

        gsap.to('.mom-xscroll-section .mom-xscroll-bar.bar4', {
            scrollTrigger: {
                trigger: '.mom-xscroll-section',
                start: "40% top",
                end: "50% top",
                scrub: true,
                // markers: true,
            },
            scaleX: 1
        })
        gsap.to('.mom-xscroll-section .mom-xscroll-innerbar.innerbar4', {
            scrollTrigger: {
                trigger: '.mom-xscroll-section',
                start: "42% top",
                end: "50% top",
                scrub: true,
                // markers: true,
            },
            width: '100%'
        })

        gsap.to('.mom-xscroll-section .mom-xscroll-bar.bar5', {
            scrollTrigger: {
                trigger: '.mom-xscroll-section',
                start: "50% top",
                end: "60% top",
                scrub: true,
                // markers: true,
            },
            scaleX: 1
        })
        gsap.to('.mom-xscroll-section .mom-xscroll-innerbar.innerbar5', {
            scrollTrigger: {
                trigger: '.mom-xscroll-section',
                start: "52% top",
                end: "60% top",
                scrub: true,
                // markers: true,
            },
            width: '100%'
        })

        gsap.to('.mom-xscroll-section .mom-xscroll-bar.bar6', {
            scrollTrigger: {
                trigger: '.mom-xscroll-section',
                start: "60% top",
                end: "70% top",
                scrub: true,
                // markers: true,
            },
            scaleX: 1
        })
        gsap.to('.mom-xscroll-section .mom-xscroll-innerbar.innerbar6', {
            scrollTrigger: {
                trigger: '.mom-xscroll-section',
                start: "62% top",
                end: "70% top",
                scrub: true,
                // markers: true,
            },
            width: '100%'
        })

        gsap.to('.mom-xscroll-section .mom-xscroll-bar.bar7', {
            scrollTrigger: {
                trigger: '.mom-xscroll-section',
                start: "70% top",
                end: "80% top",
                scrub: true,
                // markers: true,
            },
            scaleX: 1
        })
        gsap.to('.mom-xscroll-section .mom-xscroll-innerbar.innerbar7', {
            scrollTrigger: {
                trigger: '.mom-xscroll-section',
                start: "72% top",
                end: "80% top",
                scrub: true,
                // markers: true,
            },
            width: '100%'
        })


    }, [])


    return (
        <section className='mom-xscroll-section'>
            <div className="mom-xscroll-sticky">
                <div className="mom-xscroll-background">
                    <video className='mom-xscroll-video' src="https://momenthumagency.com/wp-content/uploads/2024/07/Mockup-Vibe-1.mp4" loop autoPlay playsInline muted></video>
                </div>
                <div className="mom-xscroll-up">
                    <div className="mom-xscroll-topshadow"></div>
                    <div className="mom-xscroll-bottomshadow"></div>

                    <div className={`mom-xscroll-topleft ${scrollActive && 'active'}`}>
                        <h3 className='mom-xscroll-hiddentext'>
                            UBT Korea
                        </h3>
                    </div>
                    <div className={`mom-xscroll-titlewrap ${titleActive && 'active'}`}>
                        <p className="mom-xscroll-desc">
                            MORE ABOUT US
                        </p>
                        <h2 className='mom-xscroll-title'>A fresh team, full of</h2>
                        <h2 className='mom-xscroll-title'>energy and ready to</h2>
                        <h2 className='mom-xscroll-title'>make big things happen</h2>
                    </div>
                    <div className="mom-xscroll-contents">
                        {[1, 2, 3, 4, 5, 6, 7].map((el, idx) => (
                            <div className="mom-xscroll-box" key={idx}>
                                <p className="mom-xscroll-boxdesc">
                                    WE REALLY ARE
                                </p>
                                <p className="mom-xscroll-boxtitle">
                                    Those Partners <br />
                                    You Can Trust
                                </p>
                                <p className="mom-xscroll-boxcontent">
                                    We are here to make your life easier! Our purpose
                                    We are here to make your life easier! Our purpose
                                    We are here to make your life easier! Our purpose
                                </p>
                                <span className='mom-xscroll-boxline'></span>
                            </div>
                        ))}
                    </div>

                    <div className="mom-xscroll-barwrap">
                        <div className="mom-xscroll-bar bar1">
                            <div className="mom-xscroll-innerbar innerbar1"></div>
                        </div>
                        <div className="mom-xscroll-bar bar2">
                            <div className="mom-xscroll-innerbar innerbar2"></div>
                        </div>
                        <div className="mom-xscroll-bar bar3">
                            <div className="mom-xscroll-innerbar innerbar3"></div>
                        </div>
                        <div className="mom-xscroll-bar bar4">
                            <div className="mom-xscroll-innerbar innerbar4"></div>
                        </div>
                        <div className="mom-xscroll-bar bar5">
                            <div className="mom-xscroll-innerbar innerbar5"></div>
                        </div>
                        <div className="mom-xscroll-bar bar6">
                            <div className="mom-xscroll-innerbar innerbar6"></div>
                        </div>
                        <div className="mom-xscroll-bar bar7">
                            <div className="mom-xscroll-innerbar innerbar7"></div>
                        </div>
                    </div>

                </div>
            </div>



        </section>
    );
};

export default MomXScroll;