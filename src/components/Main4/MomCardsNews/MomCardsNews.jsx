import "./MomCardsNews.css"
import {useEffect, useRef, useState} from "react";
import {wrap} from "gsap/gsap-core";
import gsap from "gsap";
import ScrollTrigger from "gsap/scrollTrigger";
import MomWholeBtn from "../MomWholeBtn/MomWholeBtn.jsx";

gsap.registerPlugin(ScrollTrigger);


export default function MomCardsNews() {

    useEffect(() => {
        gsap.to('.mom-cards-news .sticky-rotate-wrap',{
            scrollTrigger: {
                trigger: '.mom-cards-news',
                start: "300px center",
                end: "1200px center",
                scrub:true,
                duration:0,
                // markers: true,
                ease:'linear',
            },
            transform : 'rotate(0deg) translate(0%, 0%)'
        })
        gsap.to('.mom-cards-news .mom-cards-unit:nth-of-type(1)',{
            scrollTrigger: {
                trigger: '.mom-cards-news',
                start: "600px center",
                end: "900px center",
                scrub:true,
                duration:0,
                // markers: true,
                ease:'linear',
            },
            top : '0'
        })
        gsap.to('.mom-cards-news .mom-cards-unit:nth-of-type(2)',{
            scrollTrigger: {
                trigger: '.mom-cards-news',
                start: "800px center",
                end: "1100px center",
                scrub:true,
                duration:0,
                // markers: true,
                ease:'linear',
            },
            top : '0'
        })
        gsap.to('.mom-cards-news .mom-cards-unit:nth-of-type(3)',{
            scrollTrigger: {
                trigger: '.mom-cards-news',
                start: "1000px center",
                end: "1300px center",
                scrub:true,
                duration:0,
                // markers: true,
                ease:'linear',
            },
            top : '0'
        })
        gsap.to('.mom-cards-news .mom-cards-unit:nth-of-type(4)',{
            scrollTrigger: {
                trigger: '.mom-cards-news',
                start: "1200px center",
                end: "1500px center",
                scrub:true,
                duration:0,
                // markers: true,
                ease:'linear',
            },
            top : '0'
        })
        gsap.to('.mom-cards-news .mom-cards-unit:nth-of-type(5)',{
            scrollTrigger: {
                trigger: '.mom-cards-news',
                start: "1400px center",
                end: "1700px center",
                scrub:true,
                duration:0,
                // markers: true,
                ease:'linear',
            },
            top : '0'
        })
        gsap.to('.mom-cards-news .mom-cards-unit:nth-of-type(6)',{
            scrollTrigger: {
                trigger: '.mom-cards-news',
                start: "1600px center",
                end: "1900px center",
                scrub:true,
                duration:0,
                // markers: true,
                ease:'linear',
            },
            top : '0'
        })

        gsap.to('.mom-cards-news .mom-cards-wrapper',{
            scrollTrigger: {
                trigger: '.mom-cards-news',
                start: "1300px center",
                end: "1900px center",
                scrub:true,
                duration:0,
                // markers: true,
                ease:'linear',
            },
            transform : 'translate(-33%)'
        })
    }, []);

    const cardContext = [
        {
            num : '01',
            main : 'Understanding Your Current Position',
            context : ' A workflow created for your needs\n' +
                '                                A workflow created for your needs\n' +
                '                                A workflow created for your needs\n' +
                '                                A workflow created for your needs',
            btn : '#OurStartingPoint'
        },
        {
            num : '02',
            main : 'Understanding Your Current Position',
            context : ' A workflow created for your needs\n' +
                '                                A workflow created for your needs\n' +
                '                                A workflow created for your needs\n' +
                '                                A workflow created for your needs',
            btn : '#OurStartingPoint'
        },
        {
            num : '03',
            main : 'Understanding Your Current Position',
            context : ' A workflow created for your needs\n' +
                '                                A workflow created for your needs\n' +
                '                                A workflow created for your needs\n' +
                '                                A workflow created for your needs',
            btn : '#OurStartingPoint'
        },
        {
            num : '04',
            main : 'Understanding Your Current Position',
            context : ' A workflow created for your needs\n' +
                '                                A workflow created for your needs\n' +
                '                                A workflow created for your needs\n' +
                '                                A workflow created for your needs',
            btn : '#OurStartingPoint'
        },
        {
            num : '05',
            main : 'Understanding Your Current Position',
            context : ' A workflow created for your needs\n' +
                '                                A workflow created for your needs\n' +
                '                                A workflow created for your needs\n' +
                '                                A workflow created for your needs',
            btn : '#OurStartingPoint'
        },
        {
            num : '06',
            main : 'Understanding Your Current Position',
            context : ' A workflow created for your needs\n' +
                '                                A workflow created for your needs\n' +
                '                                A workflow created for your needs\n' +
                '                                A workflow created for your needs',
            btn : '#OurStartingPoint'
        },
    ]

    return (
        <section className={`mom-cards-news`}>
            <div className={'mom-card-wrapper'}>
                <div className={'mom-sticky-card-wrapper'}>
                    <div className={'sticky-rotate-wrap'}>
                        <div className={'mom-top-wrapper'}>
                            <p className={'mom-top-main-text'}>
                                A workflow created <br/> for your needs
                            </p>
                            <div className={'mom-top-btn-wrap'}>
                                <p>momenthum</p>
                            </div>
                        </div>
                        <div className={'mom-cards-wrapper'}>
                            {cardContext.map((item, index) => {
                                return (
                                    <div className={'mom-cards-unit'}>
                                        <div className={'mom-card-top-num'}>
                                            <p>{item.num}</p>
                                        </div>
                                        <p className={'mom-card-main-text'}>
                                            {item.main}
                                        </p>
                                        <p className={'mom-card-context'}>
                                            {item.context}
                                        </p>
                                        <div className={'mom-card-bottom-btn'}>
                                            <p>{item.btn}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}