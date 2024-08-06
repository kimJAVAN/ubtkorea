import React, {useEffect, useRef, useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './news-board-section.css';
import { Navigation } from 'swiper/modules';
import gsap from "gsap";
import ScrollTrigger from 'gsap/scrollTrigger';
import {FaArrowRight} from "react-icons/fa6";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

export default function NewsBoardSection(props) {
    const {windowWidth} = props;
    const sectionRef = useRef(null);
    const titleWrapRef = useRef(null);
    const titleRef = useRef(null);
    const titleContentRef = useRef(null);
    const slideContainerRef = useRef(null);
    const slideRefs = useRef([]);
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiper, setSwiper] = useState(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Title animation
        gsap.fromTo(
            titleRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    end: "top 60%",
                    // markers: true,
                },
                delay: 0
            }
        );

        gsap.fromTo(
            titleContentRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "5% 80%",
                    end: "5% 60%",
                    // markers: true,
                },
                delay: 0.1
            }
        );

        // Slides animation
        slideRefs.current.forEach((slide, index) => {
            gsap.fromTo(
                slide,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "20% 80%",
                        end: "20% 60%",
                        // markers: true,
                    },
                    delay: index * 0.2
                }
            );
        });
    }, []);

    function truncateContent(content) {
        const lines = content.split('<br />');

        if (lines.length < 3) {
            // && 만약 lines의 세번째 배열이 가진 문자열 값이 '.'(온점) 으로 끝나지 않는 경우
            return lines.join('<br />') + '...';
        }
        return lines.slice(0, 3).join('<br />') + '...';
    }

    const slidesData = [
        {
            img: "images/Main/news-board-section/1.jpg",
            title: "세계 최고의 기술력으로 시장 공략",
            content: "글로벌한 유통기업 UBT KOREA의 소식이 <br> 좀 더 구체적으로 들어갈 예정입니다.<br />글로벌한 유통기업 UBT KOREA의 소식이 <br> 좀 더 구체적으로 들어갈 예정입니다."
        },
        {
            img: "images/Main/news-board-section/2.jpg",
            title: "2024 UBT KOREA 초청행사 개최",
            content: "글로벌한 유통기업 UBT KOREA의 소식이 <br> 좀 더 구체적으로 들어갈 예정입니다.<br />글로벌한 유통기업 UBT KOREA의 소식이 <br> 좀 더 구체적으로 들어갈 예정입니다."
        },
        {
            img: "images/Main/news-board-section/3.jpg",
            title: "UBT KOREA 글로벌 시장 확장",
            content: "글로벌한 유통기업 UBT KOREA의 소식이 <br> 좀 더 구체적으로 들어갈 예정입니다.<br />글로벌한 유통기업 UBT KOREA의 소식이 <br> 좀 더 구체적으로 들어갈 예정입니다."
        },
        {
            img: "images/Main/news-board-section/4.jpg",
            title: "협력사 동반성장 프로젝트 ",
            content: "글로벌한 유통기업 UBT KOREA의 소식이 <br> 좀 더 구체적으로 들어갈 예정입니다.<br />글로벌한 유통기업 UBT KOREA의 소식이 <br> 좀 더 구체적으로 들어갈 예정입니다."
        }
    ];

    useEffect(() => {
        if (swiper && prevRef.current && nextRef.current) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, [swiper]);

    return(
        <>
            <section className="news-board-section" ref={sectionRef}>
                <div className="news-board-title-wrap" ref={titleWrapRef}>
                    <p className="news-board-title" ref={titleRef}>UBT KOREA NEWS</p>
                    <p className="news-board-title-content" ref={titleContentRef}>글로벌한 유통기업 UBT KOREA 소식을 확인해보세요</p>
                </div>
                <div className="news-board-slide-container" ref={slideContainerRef}>
                    <Swiper
                        spaceBetween={16}
                        slidesPerView={'auto'}
                        className="news-board-swiper"
                        modules={[Navigation]}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onSwiper={setSwiper}
                    >
                        {slidesData.map((slide, index) => (
                            <SwiperSlide key={index} style={{ width: 'auto' }}>
                                <div className="news-board-slide-wrap" ref={el => slideRefs.current[index] = el}>
                                    <div className="news-board-slide-imgWrap">
                                        <img src={slide.img} alt={slide.title} className="news-board-slide-img" />
                                    </div>
                                    <div className="news-board-slide-contentWrap">
                                        <p className="news-board-slide-title">{slide.title}</p>
                                        <p
                                            className="news-board-slide-content"
                                            dangerouslySetInnerHTML={{__html: truncateContent(slide.content)}}
                                        ></p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}

                        {/*마지막 슬라이드*/}
                        <SwiperSlide style={{width: 'auto'}}>
                        <div className="news-board-slide-wrap last">
                                <div className="news-board-slide-txtWrap">
                                    <p className="news-board-slide-txt">글로벌 유통 UBT KOREA의 <br/>
                                        더 많은 소식을 확인해보세요</p>
                                    <div className="news-board-slide-btnWrap">
                                        <a href="" className="news-board-slide-btn">
                                            <span>More</span>
                                            <FaArrowRight/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    {/* Navigation buttons */}
                    <div className="news-board-btn-wrap">
                        <div className="news-board swiper-button-prev" ref={prevRef}><GoArrowLeft /></div>
                        <div className="news-board swiper-button-next" ref={nextRef}><GoArrowRight /></div>
                    </div>
                </div>

            </section>
        </>
    )

}