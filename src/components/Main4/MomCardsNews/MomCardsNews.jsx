import "./MomCardsNews.css"
import { useEffect, useRef, useState } from "react";
import { wrap } from "gsap/gsap-core";
import gsap from "gsap";
import ScrollTrigger from "gsap/scrollTrigger";
import MomWholeBtn from "../MomWholeBtn/MomWholeBtn.jsx";

gsap.registerPlugin(ScrollTrigger);


export default function MomCardsNews() {

    useEffect(() => {
        gsap.to('.mom-cards-news .sticky-rotate-wrap', {
            scrollTrigger: {
                trigger: '.mom-cards-news',
                start: "300px center",
                end: "1200px center",
                scrub: true,
                duration: 0,
                // markers: true,
                ease: 'linear',
            },
            transform: 'rotate(0deg) translate(0%, 0%)'
        })
        gsap.to('.mom-cards-news .mom-cards-unit:nth-of-type(1)', {
            scrollTrigger: {
                trigger: '.mom-cards-news',
                start: "600px center",
                end: "900px center",
                scrub: true,
                duration: 0,
                // markers: true,
                ease: 'linear',
            },
            top: '0'
        })
        gsap.to('.mom-cards-news .mom-cards-unit:nth-of-type(2)', {
            scrollTrigger: {
                trigger: '.mom-cards-news',
                start: "800px center",
                end: "1100px center",
                scrub: true,
                duration: 0,
                // markers: true,
                ease: 'linear',
            },
            top: '0'
        })
        gsap.to('.mom-cards-news .mom-cards-unit:nth-of-type(3)', {
            scrollTrigger: {
                trigger: '.mom-cards-news',
                start: "1000px center",
                end: "1300px center",
                scrub: true,
                duration: 0,
                // markers: true,
                ease: 'linear',
            },
            top: '0'
        })
        gsap.to('.mom-cards-news .mom-cards-unit:nth-of-type(4)', {
            scrollTrigger: {
                trigger: '.mom-cards-news',
                start: "1200px center",
                end: "1500px center",
                scrub: true,
                duration: 0,
                // markers: true,
                ease: 'linear',
            },
            top: '0'
        })
        gsap.to('.mom-cards-news .mom-cards-unit:nth-of-type(5)', {
            scrollTrigger: {
                trigger: '.mom-cards-news',
                start: "1400px center",
                end: "1700px center",
                scrub: true,
                duration: 0,
                // markers: true,
                ease: 'linear',
            },
            top: '0'
        })
        gsap.to('.mom-cards-news .mom-cards-unit:nth-of-type(6)', {
            scrollTrigger: {
                trigger: '.mom-cards-news',
                start: "1600px center",
                end: "1900px center",
                scrub: true,
                duration: 0,
                // markers: true,
                ease: 'linear',
            },
            top: '0'
        })

        gsap.to('.mom-cards-news .mom-cards-wrapper', {
            scrollTrigger: {
                trigger: '.mom-cards-news',
                start: "1300px center",
                end: "1900px center",
                scrub: true,
                duration: 0,
                // markers: true,
                ease: 'linear',
            },
            transform: 'translate(-33%)'
        })
    }, []);

    const cardContext = [
        {
            num: '01',
            main: '멀티채널<br />접근',
            context: ' 온라인(Online)과 오프라인(Offline)을 아우르는 다각적인 유통 채널을 통해 고객에게 접근합니다.',
            btn: '#OurStartingPoint'
        },
        {
            num: '02',
            main: '리퍼비시<br />채널',
            context: ' 지속 가능성을 고려하여, 리퍼비시 제품의 유통을 통해 품질 높은 제품을 합리적인 가격에 제공합니다.',
            btn: '#OurStartingPoint'
        },
        {
            num: '03',
            main: '파트너십<br />강화',
            context: ' 다양한 산업의 유통 파트너와 협력하여 시장 점유율을 확대하고, 제품의 가치를 더욱 높입니다.',
            btn: '#OurStartingPoint'
        },
        {
            num: '04',
            main: '고객중심<br />운영',
            context: '고객의 요구와 트렌드를 반영한 유통 전략을 통해, 고객이 가장 필요로 하는 시점에 제품을 제공할 수 있도록 합니다.',
            btn: '#OurStartingPoint'
        },
        {
            num: '05',
            main: '고객맞춤<br />구독',
            context: '고객의 라이프스타일과 소비 패턴을 분석하여, 맞춤형 구독 서비스를 도입합니다. 이 전략은 정기적으로 필요한 가전제품이나 가정용품, 뷰티 및 패션 아이템 등을 구독형 서비스로 제공하여, 고객이 원하는 제품을 정기적으로 받아볼 수 있도록 합니다. 또한, 고객의 취향과 필요에 따라 제품 구성을 변경할 수 있어, 더욱 개인화된 경험을 제공합니다.',
            btn: '#OurStartingPoint'
        },
        {
            num: '06',
            main: '친환경 포장<br />및 유통',
            context: '지속 가능한 경영을 위해 친환경 포장재를 사용하고, 유통 과정에서도 환경에 미치는 영향을 최소화하는 방식을 채택합니다. 제품 배송 시 재활용 가능하거나 생분해되는 포장재를 사용하고, 탄소 배출량을 줄이기 위한 물류 최적화 기술을 도입하는 것입니다. ',
            btn: '#OurStartingPoint'
        },
    ]

    return (
        <section className={`mom-cards-news`}>
            <div className={'mom-card-wrapper'}>
                <div className={'mom-sticky-card-wrapper'}>
                    <div className={'sticky-rotate-wrap'}>
                        <div className={'mom-top-wrapper'}>
                            <p className={'mom-top-main-text'}>
                                최상의 가치를 전달하기 위한 <br /> 우리만의 유통 전략
                            </p>
                            <div className={'mom-top-btn-wrap'}>
                                <p>UBT Korea</p>
                            </div>
                        </div>
                        <div className={'mom-cards-wrapper'}>
                            {cardContext.map((item, index) => {
                                return (
                                    <div className={'mom-cards-unit'}>
                                        <div className={'mom-card-top-num'}>
                                            <p>{item.num}</p>
                                        </div>
                                        <p className={'mom-card-main-text'}
                                            dangerouslySetInnerHTML={{ __html: item.main }}
                                        >
                                            {/* {item.main} */}
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