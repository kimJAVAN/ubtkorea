import "./MomScaleOne.css"
import {useEffect, useRef, useState} from "react";
import {wrap} from "gsap/gsap-core";
import gsap from "gsap";
import ScrollTrigger from "gsap/scrollTrigger";
import MomWholeBtn from "../MomWholeBtn/MomWholeBtn.jsx";

gsap.registerPlugin(ScrollTrigger);


export default function MomScaleOne() {

    useEffect(() => {
        gsap.to('.mom-scale-one .mom-go-to-top-unit:nth-of-type(1)',{
            scrollTrigger: {
                trigger: '.mom-scale-one',
                start: "300px center",
                end: "1200px center",
                scrub:true,
                duration:0,
                // markers: true,
                ease:'linear',
            },
            top : '0vh',
            scale : '1',
            borderRadius : '0px'
        })
        gsap.to('.mom-scale-one .mom-go-to-top-unit:nth-of-type(1) .mom-top-title',{
            scrollTrigger: {
                trigger: '.mom-scale-one',
                start: "300px center",
                end: "1200px center",
                scrub:true,
                duration:0,
                // markers: true,
                ease:'linear',
            },
            fontSize : '38px'
        })
        gsap.to('.mom-scale-one .mom-go-to-top-unit:nth-of-type(1) .mom-top-cate-wrap',{
            scrollTrigger: {
                trigger: '.mom-scale-one',
                start: "300px center",
                end: "1200px center",
                scrub:true,
                duration:0,
                // markers: true,
                ease:'linear',
            },
            scale : '1'
        })
        gsap.to('.mom-scale-one .mom-go-to-top-unit:nth-of-type(1) .mom-center-load',{
            scrollTrigger: {
                trigger: '.mom-scale-one',
                start: "300px center",
                end: "1200px center",
                scrub:true,
                duration:0,
                // markers: true,
                ease:'linear',
            },
            width : '100%'
        })


        gsap.to('.mom-scale-one .mom-go-to-top-unit:nth-of-type(2)',{
            scrollTrigger: {
                trigger: '.mom-scale-one',
                start: "1900px center",
                end: "2800px center",
                scrub:true,
                duration:0,
                // markers: true,
                ease:'linear',
            },
            top : '85px',
            scale : '1',
            borderRadius : '0px'
        })
        gsap.to('.mom-scale-one .mom-go-to-top-unit:nth-of-type(2) .mom-top-title',{
            scrollTrigger: {
                trigger: '.mom-scale-one',
                start: "1900px center",
                end: "2800px center",
                scrub:true,
                duration:0,
                // markers: true,
                ease:'linear',
            },
            fontSize : '38px'
        })
        gsap.to('.mom-scale-one .mom-go-to-top-unit:nth-of-type(2) .mom-top-cate-wrap',{
            scrollTrigger: {
                trigger: '.mom-scale-one',
                start: "1900px center",
                end: "2800px center",
                scrub:true,
                duration:0,
                // markers: true,
                ease:'linear',
            },
            scale : '1'
        })
        gsap.to('.mom-scale-one .mom-go-to-top-unit:nth-of-type(2) .mom-center-load',{
            scrollTrigger: {
                trigger: '.mom-scale-one',
                start: "1900px center",
                end: "2800px center",
                scrub:true,
                duration:0,
                // markers: true,
                ease:'linear',
            },
            width : '100%'
        })


        gsap.to('.mom-scale-one .mom-go-to-top-unit:nth-of-type(3)',{
            scrollTrigger: {
                trigger: '.mom-scale-one',
                start: "3500px center",
                end: "4400px center",
                scrub:true,
                duration:0,
                // markers: true,
                ease:'linear',
            },
            top : '170px',
            scale : '1',
            borderRadius : '0px'
        })
        gsap.to('.mom-scale-one .mom-go-to-top-unit:nth-of-type(3) .mom-top-title',{
            scrollTrigger: {
                trigger: '.mom-scale-one',
                start: "3500px center",
                end: "4400px center",
                scrub:true,
                duration:0,
                // markers: true,
                ease:'linear',
            },
            fontSize : '38px'
        })
        gsap.to('.mom-scale-one .mom-go-to-top-unit:nth-of-type(3) .mom-top-cate-wrap',{
            scrollTrigger: {
                trigger: '.mom-scale-one',
                start: "3500px center",
                end: "4400px center",
                scrub:true,
                duration:0,
                // markers: true,
                ease:'linear',
            },
            scale : '1'
        })
        gsap.to('.mom-scale-one .mom-go-to-top-unit:nth-of-type(3) .mom-center-load',{
            scrollTrigger: {
                trigger: '.mom-scale-one',
                start: "3500px center",
                end: "4400px center",
                scrub:true,
                duration:0,
                // markers: true,
                ease:'linear',
            },
            width : '100%'
        })
    }, []);

    return (
        <section className={`mom-scale-one`}>
            <div className={'mom-scale-wrapper'}>
                <div className={'mom-sticky-wrapper'}>
                    <div className={'mom-go-to-top-unit'}>
                        <div className={'mom-loding-wrapper'}>
                            <div className={'mom-center-load'}></div>
                        </div>
                        <div className={'mom-top-texts-wrapper'}>
                            <div className={'mom-top-title-wrapper'}>
                                <p className={'mom-top-title'}>Vibe Interior</p>
                                <div className={'mom-top-cate-wrap'}>
                                    <div className={'mom-top-cate-unit'}>
                                        <p>Growth Partner</p>
                                    </div>
                                    <div className={'mom-top-cate-unit'}>
                                        <p>Growth Partner</p>
                                    </div>
                                    <div className={'mom-top-cate-unit'}>
                                        <p>Growth Partner</p>
                                    </div>
                                </div>
                            </div>
                            <div className={'mom-btm-wrapper'}>
                                <div className={'mom-btm-img-wrapper'}>
                                    <img src={'/mom-scale-one/1.jpg'} alt={'UBT'}/>
                                </div>
                                <div className={'mom-btm-text-wrapper'}>
                                    <div className={'mom-btm-left-text-wrap'}>
                                        <p className={'mom-btm-small-text'}>MOMENTHUM X VIBE INTERIOR</p>
                                        <p className={'mom-btm-larger-text'}>
                                        Collaborating with <br/>
                                            Good Vives at Each Step
                                        </p>
                                    </div>
                                    <div className={'mom-btn-wrapper'}>
                                        <MomWholeBtn name={'Get In Touch'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'mom-go-to-top-unit'}>
                        <div className={'mom-loding-wrapper'}>
                            <div className={'mom-center-load'}></div>
                        </div>
                        <div className={'mom-top-texts-wrapper'}>
                            <div className={'mom-top-title-wrapper'}>
                                <p className={'mom-top-title'}>Vibe Interior</p>
                                <div className={'mom-top-cate-wrap'}>
                                    <div className={'mom-top-cate-unit'}>
                                        <p>Growth Partner</p>
                                    </div>
                                    <div className={'mom-top-cate-unit'}>
                                        <p>Growth Partner</p>
                                    </div>
                                    <div className={'mom-top-cate-unit'}>
                                        <p>Growth Partner</p>
                                    </div>
                                </div>
                            </div>
                            <div className={'mom-btm-wrapper'}>
                                <div className={'mom-btm-img-wrapper'}>
                                    <img src={'/mom-scale-one/2.jpg'} alt={'UBT'}/>
                                </div>
                                <div className={'mom-btm-text-wrapper'}>
                                    <div className={'mom-btm-left-text-wrap'}>
                                        <p className={'mom-btm-small-text'}>MOMENTHUM X VIBE INTERIOR</p>
                                        <p className={'mom-btm-larger-text'}>
                                            Collaborating with <br/>
                                            Good Vives at Each Step
                                        </p>
                                    </div>
                                    <div className={'mom-btn-wrapper'}>
                                        <MomWholeBtn name={'Get In Touch'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'mom-go-to-top-unit'}>
                        <div className={'mom-loding-wrapper'}>
                            <div className={'mom-center-load'}></div>
                        </div>
                        <div className={'mom-top-texts-wrapper'}>
                            <div className={'mom-top-title-wrapper'}>
                                <p className={'mom-top-title'}>Vibe Interior</p>
                                <div className={'mom-top-cate-wrap'}>
                                    <div className={'mom-top-cate-unit'}>
                                        <p>Growth Partner</p>
                                    </div>
                                    <div className={'mom-top-cate-unit'}>
                                        <p>Growth Partner</p>
                                    </div>
                                    <div className={'mom-top-cate-unit'}>
                                        <p>Growth Partner</p>
                                    </div>
                                </div>
                            </div>
                            <div className={'mom-btm-wrapper'}>
                                <div className={'mom-btm-img-wrapper'}>
                                    <img src={'/mom-scale-one/3.jpg'} alt={'UBT'}/>
                                </div>
                                <div className={'mom-btm-text-wrapper'}>
                                    <div className={'mom-btm-left-text-wrap'}>
                                        <p className={'mom-btm-small-text'}>MOMENTHUM X VIBE INTERIOR</p>
                                        <p className={'mom-btm-larger-text'}>
                                            Collaborating with <br/>
                                            Good Vives at Each Step
                                        </p>
                                    </div>
                                    <div className={'mom-btn-wrapper'}>
                                        <MomWholeBtn name={'Get In Touch'}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}