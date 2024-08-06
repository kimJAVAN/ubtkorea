import React, { useRef, useState } from 'react'
import './progress-slide-section.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/autoplay';

export default function ProgressSlideSection(props) {
    const {windowWidth} = props

    const [activeIndex, setActiveIndex] = useState(0);
    const [progress, setProgress] = useState(0);
    const swiperRef = useRef(null);

    const handleSlideChange = (swiper) => {
        setActiveIndex(swiper.realIndex);
    };

    const handleAutoplayTimeLeft = (s, time, progress) => {
        setProgress(1 - progress);
    };

    const slides = [
        {
            img: "images/Main/progress-slide-section/1.jpg",
            title: "독보적인 공정 솔루션 보유",
            content: "독보적 원천 기술력 확보와 국내 최초 & 최고 기술로 국산화를 선도하였으며, 주요 Reference로 확인된 기술 신뢰성 및 안정성을 가진 독보적 원천 기술력을 확보하였습니다."
        },
        {
            img: "images/Main/progress-slide-section/2.jpg",
            title: "자율주행 산업 수혜",
            content: "ADAS 고도화 및 대중화로 수요와 Application이 급증하였고, 유수 라이다 제조사들과 기술협력을 전개하였습니다. TOF/라이다 등 자율 주행 핵심센서를 제조합니다."
        },
        {
            img: "images/Main/progress-slide-section/3.jpg",
            title: "글로벌 밸류체인 확보",
            content: "미래 핵심 기술 업체 중심의 밸류체인을 확보하고 자율주행솔루션과 완성차 OEM 등 글로벌 기업들과 협업을 진행하며 미래 성장 기술을 선도하고있습니다."
        },
    ];

    return(
        <>
            <section className="progress-slide-section">
                <div className="progress-slide-container">
                <Swiper
                    className="progress-slide-swiper"
                    spaceBetween={16}
                    allowTouchMove={false}
                    speed={1000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    modules={[Autoplay]}
                    onSlideChange={handleSlideChange}
                    onAutoplayTimeLeft={handleAutoplayTimeLeft}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="progress-slide-wrap">
                                <div className="progress-slide-bgWrap">
                                    <img src={slide.img} alt="" className="progress-slide-img"/>
                                </div>
                                <div className="progress-slide-txtBox">
                                    <div className="progress-slide-txtWrap">
                                        <p className="progress-slide-title">{slide.title}</p>
                                        <p className="progress-slide-content">{slide.content}</p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="slider__dots">
                    {slides.map((_, index) => (
                        <div
                            key={index}
                            className={`dots__item ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => swiperRef.current.slideTo(index)}
                        >
                            <div className="background">
                                <div
                                    className="background__bg"
                                    style={{backgroundImage: `url(${slides[index].src})`}}
                                ></div>
                            </div>
                            <div
                                className="progress"
                                style={{
                                    transform: `scaleX(${index === activeIndex ? progress : 0})`,
                                }}
                            ></div>
                        </div>
                    ))}
                </div>
                </div>
            </section>
        </>
    )


}