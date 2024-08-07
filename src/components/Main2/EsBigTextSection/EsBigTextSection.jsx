import "./es-bigText-section.css"
import {useEffect, useRef, useState} from "react";
import {wrap} from "gsap/gsap-core";
import gsap from "gsap";
import ScrollTrigger from "gsap/scrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function EsBigTextSection() {
    const [isBigActive, setIsBigActive] = useState(false);
    const bigTitle = useRef(null);

    const [active,setActive] = useState(false);
    const cardRefs = useRef([]);
    const moRef = [useRef(null),useRef(null),useRef(null),useRef(null)];
    // const AniRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    const reviewData = [
        {
            mainImg:'/images/Main2/esMain/es-bigText-section/card2.mp4',
            imgSrc: '/images/Main2/esMain/es-bigText-section/5.jpg',
            des :"POINT 01<br/><br/>스마트 글로벌 시스템으로<br/>신속 정확한 자동화",
        },



        {
            mainImg:'/images/Main2/esMain/es-bigText-section/card1.mp4',
            imgSrc: '/images/Main2/esMain/es-bigText-section/6.jpg',
            des : "POINT 02<br/><br/>업체 만족을 위한<br/>지속적 시스템 연구",
        },
    ];

    useEffect(() => {
        ScrollTrigger.create({
            trigger: '.es-bigText-inner',
            start: "top center",
            end: "bottom top",
            scrub: true,
            // markers: true,
            onEnter: () => {
                setIsBigActive(true);
            },
            // onEnterBack: () => {
            //     setIsBigActive(true);
            // },
            // onLeave: () => {
            //     setIsBigActive(false);
            // },
            onLeaveBack: () => {
                setIsBigActive(false);
            },
        });
     }, [isBigActive]);

    if(innerWidth > 768 ){
        useEffect(() => {
            gsap.to('.esp2-review-cardwrap',{
                scrollTrigger: {
                    trigger: '.esp2-review-sticky',
                    start: "200px 60%",
                    end: "400px 60%",
                    scrub:true,
                    duration:0,
                    // markers: true,
                    ease:'linear',
                },
                opacity:1,
            })

            gsap.to('.esp2-review-cardwrap',{
                scrollTrigger: {
                    trigger: '.es-bigText-inner',
                    start: "900px top",
                    end: "1300px top",
                    scrub:true,
                    duration:0,
                    // markers: true,
                    ease:'linear',
                },
                rotationY: '0deg',
            })
            gsap.to('.esp2-review-cardwrap',{
                scrollTrigger: {
                    trigger: '.es-bigText-inner',
                    start: "2000px top",
                    end: "2500px top",
                    scrub:true,
                    duration:0,
                    // markers: true,
                    ease:'linear',
                    onEnter: () => {
                        setActive(true)
                    },
                    onLeaveBack: () => {
                        setActive(false)
                    },
                },
                // opacity: '0',
            })
            cardRefs.current.forEach((card, index) => {
                const timeline = gsap.timeline({
                    scrollTrigger: {
                        trigger: '.es-bigText-inner',
                        start: "2500px top",
                        end: "3000px top",
                        scrub: 1,
                        // markers: true,
                        ease: 'linear',
                    }
                });

                timeline
                    .to(card.querySelector('.esp2-review-cardimg.front'), {
                        rotationY: '-180deg',
                        delay: 0.5 * index,
                        duration: 1, // 애니메이션 지속 시간
                    }, "rotate") // 레이블을 추가하여 동시에 시작하도록 함
                    .to(card.querySelector('.esp2-review-cardimg.back'), {
                        rotationY: '0deg',
                        delay: 0.5 * index,
                        duration: 1, // 애니메이션 지속 시간
                    }, "rotate"); // 동일한 레이블로 동시에 시작
            });

            gsap.to(".esp2-review-cardimg.front", {
                scrollTrigger: {
                    // trigger: ".es-bigText-section .esp2-review-sticky",
                    trigger: '.es-bigText-inner',
                    start: "1000px center",
                    end: "3000px center",
                    scrub: true,
                    // markers: true,
                    onEnter: () => {
                        document.querySelectorAll(".esp2-review-cardimg.front").forEach((video) => {
                            video.currentTime = 0; // 동영상을 처음으로 되감음
                            video.playbackRate = 2; // 재생 속도를 1.5배로 설정
                            video.play(); // 특정 영역에 들어갈 때 비디오 재생
                        });
                    },
                    onLeave: () => {
                        document.querySelectorAll(".esp2-review-cardimg.front").forEach((video) => {
                            video.pause(); // 특정 영역을 벗어날 때 비디오 일시 정지
                        });
                    },
                },
                opacity: 1,
                paused: true, // 처음에는 비디오를 멈추도록 설정
            });
        }, []);

    }
    else if(innerWidth < 768){
        useEffect(() => {
            moRef.forEach((moRef)=>{
                if (moRef.current) {
                    gsap.to(moRef.current, {
                        scrollTrigger: {
                            trigger: moRef.current,
                            start: "center 80%",
                            end: "top top",
                            scrub: true,
                            // markers:true,
                            onEnter: () => {
                                moRef.current.classList.add("active");
                            },
                            onLeaveBack: () => {
                                moRef.current.classList.remove("active");
                            },
                        },
                    });
                }
            });


        }, []);
    }


    return (
        <div className={`es-bigText-section`}>
            <div className="es-bigText-bgGradient"></div>
            <div className="es-bigText-inner">
                <div className="es-bigText-title-wrap">
                    {innerWidth < 768 ? (
                        <p className={`es-bigText-title ${isBigActive ? "active" :""}`} ref={bigTitle}>
                            국내/해외 유통업체 글로벌 고객만족도 1위 <br/>
                            UBT Korea의 서비스를 확인하세요
                        </p>
                    ):(
                        <p className={`es-bigText-title ${isBigActive ? "active" :""}`} ref={bigTitle}>
                            국내/해외 유통업체 글로벌 고객만족도 1위 <br/>
                            UBT Korea의 서비스를 확인하세요
                        </p>
                    )}

                </div>

                {innerWidth < 768? (
                    <div className="es-bigText-content-wrap">
                        <ul className="es-bigText-content-items">
                            <li className="es-bigText-content-item content-item1">
                                <div className="es-bigText-content-imgWrap">
                                    <img src="/images/Main2/esMain/es-bigText-section/m-1.jpg" alt="img" ref={moRef[0]}/>
                                </div>
                                <div className="es-bigText-content-text">
                                    <p className="es-bigText-content-text1" ref={moRef[1]}>
                                        지능형 장애물 회피 3D MatrixEye 시스템을 통해 <br />
                                        사물은 물론 아이와 애완동물도 안전합니다.</p>
                                </div>
                            </li>
                            <li className="es-bigText-content-item content-item2">
                                <div className="es-bigText-content-imgWrap">
                                    <img src="/images/Main2/esMain/es-bigText-section/m-2.jpg" alt="img" ref={moRef[2]}/>
                                </div>
                                <div className="es-bigText-content-text">
                                    <p className="es-bigText-content-text2" ref={moRef[3]}>
                                        NASA의 화성 착륙 프로젝트와 동일한 <br />
                                        라이다 기술로 집을 탐색합니다.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                ):(
                    <div className="esp2-review-sticky" >
                        <div className={`esp2-review-cardwrap ${active === true ? 'active': '' }`}>
                            {reviewData && reviewData.map((data,index)=>(
                                <div key={index} className={'esp2-review-card'} ref={el => cardRefs.current[index] = el}>
                                    <video className={'esp2-review-cardimg front'} src={data.mainImg} muted playsInline />
                                    <div className={'esp2-review-cardimg back'}>
                                        <div className={`esp2-review-boxes`}>
                                            <div className={`esp2-review-boxline`}>
                                                {active ? (<p className={`esp2-review-box-toptit`} dangerouslySetInnerHTML={{__html: data.des}}></p>) : ''}
                                                <div className="esp2-review-imgwrap">
                                                    {index === 0 ? (
                                                        <img className="esp2-review-pimg" src={data.imgSrc} alt="img" />
                                                    ) : (
                                                        // <video className="esp2-review-pimg" src={data.imgSrc} muted loop playsInline autoPlay />
                                                        <img className="esp2-review-pimg" src={data.imgSrc} alt="img"/>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}