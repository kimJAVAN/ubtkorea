import React, { useEffect, useRef, useState } from 'react';
import "./MomXScroll.css";

import gsap from "gsap";
import ScrollTrigger from "gsap/scrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const MomXScroll = () => {


    const [scrollActive, setScrollActive] = useState(false)
    const [titleActive, setTitleActive] = useState(false)
    const [sizeActive, setSizeActive] = useState([
        {
            idx: 0,
            active: false,
        },
        {
            idx: 1,
            active: false,
        },
        {
            idx: 2,
            active: false,
        },
        {
            idx: 3,
            active: false,
        },
        {
            idx: 4,
            active: false,
        },
    ])


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
            x: -1650
        })

        sizeActive.forEach((item, index) => {
            gsap.to(`.mom-xscroll-section .mom-xscroll-bar.bar${index + 1}`, {
                scrollTrigger: {
                    trigger: '.mom-xscroll-section',
                    start: `${10 + index * 10}% top`,
                    end: `${20 + index * 10}% top`,
                    scrub: true,
                    onEnter: () => {
                        setSizeActive(prev => 
                            prev.map((el, idx) => 
                                idx === index ? { ...el, active: true } : el
                            )
                        );
                    },
                    onLeaveBack: () => {
                        setSizeActive(prev => 
                            prev.map((el, idx) => 
                                idx === index ? { ...el, active: false } : el
                            )
                        );
                    }
                },
                scaleX: 1
            });

            gsap.to(`.mom-xscroll-section .mom-xscroll-innerbar.innerbar${index + 1}`, {
                scrollTrigger: {
                    trigger: '.mom-xscroll-section',
                    start: `${12 + index * 10}% top`,
                    end: `${20 + index * 10}% top`,
                    scrub: true,
                },
                width: '100%'
            });
        });


    }, [])


    const list = [
        {
            header: 'LIFESTYLE PRODUCTS',
            title1: '숨겨진 특별한 가치',
            title2: '발견하는 즐거움',
            desc: '일상에서 발견하는 숨겨진 특별함이 당신의 삶에 깊이 있는 가치를 부여합니다.',
        },
        {
            header: 'HOME APPLIANCES',
            title1: '첨단기능 & 합리적 가격',
            title2: '편리함의 새로운 기준',
            desc: '일상 속 편리함을 첨단 기능으로 극대화하며 합리적 가격으로 더 큰 만족을 제공합니다.',
        },
        {
            header: 'BEAUTY & FASHION',
            title1: '우리만의 아름다움',
            title2: '뷰티와 패션의 조화 ',
            desc: '독창적 디자인으로 당신의 개성을 돋보이게 하여 스타일에 새로운 차원을 더합니다.',
        },
        {
            header: 'HOUSEHOLD ITEMS',
            title1: '품격있는 일상을 위한',
            title2: '트랜디한 디자인',
            desc: '가정용품의 실용성과 미학이 조화를 이루어 일상을 예술적으로 변화시킵니다.',
        },
        {
            header: 'CHANNEL INNOVATION',
            title1: '보다 편리하고 합리적인',
            title2: '차별화된 유통 전략',
            desc: '혁신적인 전략으로 고객과 제품을 더욱 가까이 연결하여 최상의 접근성을 제공합니다.',
        },

    ]


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
                            BUSINESS AREAS
                        </p>
                        <h2 className='mom-xscroll-title'>자신없는 사업은 시작하지 않습니다</h2>
                        <h2 className='mom-xscroll-title'>우리가 시작한 사업은 모든 것이 다릅니다</h2>
                        {/* <h2 className='mom-xscroll-title'>make big things happen</h2> */}
                    </div>
                    <div className="mom-xscroll-contents">
                        {list.map((el, idx) => (
                            <div className={`mom-xscroll-box ${sizeActive[idx].active && 'active'}`} key={idx}>
                                <p className="mom-xscroll-boxdesc">
                                    {el.header}
                                </p>
                                <p className="mom-xscroll-boxtitle">
                                    {el.title1} <br />
                                    {el.title2}
                                </p>
                                <p className="mom-xscroll-boxcontent">
                                    {el.desc}
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
                        {/* <div className="mom-xscroll-bar bar6">
                            <div className="mom-xscroll-innerbar innerbar6"></div>
                        </div>
                        <div className="mom-xscroll-bar bar7">
                            <div className="mom-xscroll-innerbar innerbar7"></div>
                        </div> */}
                    </div>

                </div>
            </div>



        </section>
    );
};

export default MomXScroll;