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
            title: "글로벌 확장성을 갖춘 폭넓은 네트워크",
            content: "추후 이 곳에 UBT KOREA 기업만의 유통 구조 및 서비스 특장점\n" +
                "내용이 더 구체적이게 녹여질 예정입니다."
        },
        {
            img: "images/Main/progress-slide-section/2.jpg",
            title: "고객 중심의 신뢰할 수 있는 서비스 제공",
            content: "추후 이 곳에 UBT KOREA 기업만의 유통 구조 및 서비스 특장점\n" +
                "내용이 더 구체적이게 녹여질 예정입니다."
        },
        {
            img: "images/Main/progress-slide-section/3.jpg",
            title: "다양한 채널을 통한 편리한 쇼핑 경험",
            content: "추후 이 곳에 UBT KOREA 기업만의 유통 구조 및 서비스 특장점\n" +
                "내용이 더 구체적이게 녹여질 예정입니다."
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