import "./MomHiddenSwiper.css"
import { useEffect, useRef, useState } from "react";
import { wrap } from "gsap/gsap-core";
import gsap from "gsap";
import ScrollTrigger from "gsap/scrollTrigger";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

gsap.registerPlugin(ScrollTrigger);

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export default function MomHiddenSwiper() {

    const prevBtn = useRef();
    const nextBtn = useRef();

    useEffect(() => {

    }, []);

    return (
        <div className={`mom-hidden-swiper`}>
            <div className={'mom-hidden-wrapper'}>
                <div className={'mom-main-swiper'}>
                    <div className={'mom-left-div'}>
                        <p className={'mom-left-top-text'}>
                            Recognized By The Partner
                        </p>
                        <p className={'mom-left-top-main-text'}>
                            "기대한 것 이상" <br />
                            우리를 만난 모든 분들이 <br />
                            똑같이 말씀하셨습니다
                        </p>
                        <p className={'mom-left-top-context'}>
                            온라인과 오프라인 등 다양한 채널에서 하루에도 수백명을 만납니다. 우리의 목표는 만나게 되는 모든 분들께 최고의 만족을 드리는 것 입니다. 매번 더 큰 만족을 드리기 위해 최선을 다하였고, 그 결과를 보여드리겠습니다.

                        </p>
                        <div className={'mom-swiper-btn prev-btn'} ref={prevBtn}>
                            <div className={'swiper-arrow'}><IoIosArrowBack /></div>
                            <div className={'swiper-arrow'}><IoIosArrowBack /></div>
                            <div className={'swiper-bg'}></div>
                        </div>
                        <div className={'mom-swiper-btn next-btn'} ref={nextBtn}>
                            <div className={'swiper-arrow'}><IoIosArrowForward /></div>
                            <div className={'swiper-arrow'}><IoIosArrowForward /></div>
                            <div className={'swiper-bg'}></div>
                        </div>
                    </div>
                    <div className={'main-two-swiper'}>
                        <Swiper
                            navigation={{
                                nextEl: '.mom-hidden-swiper .next-btn',
                                prevEl: '.mom-hidden-swiper .prev-btn',
                            }}
                            speed={1000}
                            modules={[Navigation]}
                            slidesPerView={'2'}
                            loop={true}
                            className="mom-main-swipers"
                        >
                            <SwiperSlide>
                                <div className={'inner-swiper'}>
                                    <p className={'swiper-top-title'}>KENSINGTON</p>
                                    <p className={'swiper-center-texts'}>
                                        What Our Clients Say About Working With Us? What Our Clients Say About
                                        Working With Us? What
                                        Our Clients Say About Working With Us? What Our Clients Say About Working
                                        With Us? What Our
                                        Clients Say About Working With Us?
                                        What Our Clients Say About Working With Us? What Our Clients Say About
                                        Working With Us? What
                                    </p>
                                    <div className={'swiper-btm-logo-wrap'}>
                                        <img
                                            src={'/review/1.png'}
                                            alt={'UBT'} />
                                        <p>
                                            KENSINGTON CEO.
                                        </p>
                                    </div>
                                    <div className={'looped-texts-wrapper'}>
                                        <p className={'looped-text'}>
                                            KENSINGTON -
                                        </p>
                                        <p className={'looped-text'}>
                                            KENSINGTON -
                                        </p>
                                        <p className={'looped-text'}>
                                            KENSINGTON -
                                        </p>
                                        <p className={'looped-text'}>
                                            KENSINGTON -
                                        </p>
                                        <p className={'looped-text'}>
                                            KENSINGTON -
                                        </p>
                                        <p className={'looped-text'}>
                                            KENSINGTON -
                                        </p>
                                        <p className={'looped-text'}>
                                            KENSINGTON -
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={'inner-swiper'}>
                                    <p className={'swiper-top-title'}>CAFE BOSS</p>
                                    <p className={'swiper-center-texts'}>
                                        What Our Clients Say About Working With Us? What Our Clients Say About
                                        Working With Us? What
                                        Our Clients Say About Working With Us? What Our Clients Say About Working
                                        With Us? What Our
                                        Clients Say About Working With Us?
                                        What Our Clients Say About Working With Us? What Our Clients Say About
                                        Working With Us? What
                                    </p>
                                    <div className={'swiper-btm-logo-wrap'}>
                                        <img
                                            src={'/review/2.png'}
                                            alt={'UBT'} />
                                        <p>
                                            CAFE BOSS CEO.
                                        </p>
                                    </div>
                                    <div className={'looped-texts-wrapper'}>
                                        <p className={'looped-text'}>
                                            CAFE - BOSS -
                                        </p>
                                        <p className={'looped-text'}>
                                            CAFE - BOSS -
                                        </p>
                                        <p className={'looped-text'}>
                                            CAFE - BOSS -
                                        </p>
                                        <p className={'looped-text'}>
                                            CAFE - BOSS -
                                        </p>
                                        <p className={'looped-text'}>
                                            CAFE - BOSS -
                                        </p>
                                        <p className={'looped-text'}>
                                            CAFE - BOSS -
                                        </p>
                                        <p className={'looped-text'}>
                                            CAFE - BOSS -
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={'inner-swiper'}>
                                    <p className={'swiper-top-title'}>EGGBOX Toast & coffee</p>
                                    <p className={'swiper-center-texts'}>
                                        What Our Clients Say About Working With Us? What Our Clients Say About
                                        Working With Us? What
                                        Our Clients Say About Working With Us? What Our Clients Say About Working
                                        With Us? What Our
                                        Clients Say About Working With Us?
                                        What Our Clients Say About Working With Us? What Our Clients Say About
                                        Working With Us? What
                                    </p>
                                    <div className={'swiper-btm-logo-wrap'}>
                                        <img
                                            src={'/review/3.png'}
                                            alt={'UBT'} />
                                        <p>
                                            EGGBOX CEO.
                                        </p>
                                    </div>
                                    <div className={'looped-texts-wrapper'}>
                                        <p className={'looped-text'}>
                                            EGGBOX -
                                        </p>
                                        <p className={'looped-text'}>
                                            Toast & Coffee -
                                        </p>
                                        <p className={'looped-text'}>
                                            EGGBOX -
                                        </p>
                                        <p className={'looped-text'}>
                                            Toast & Coffee -
                                        </p>
                                        <p className={'looped-text'}>
                                            EGGBOX -
                                        </p>
                                        <p className={'looped-text'}>
                                            Toast & Coffee -
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={'inner-swiper'}>
                                    <p className={'swiper-top-title'}>피자먹다</p>
                                    <p className={'swiper-center-texts'}>
                                        What Our Clients Say About Working With Us? What Our Clients Say About
                                        Working With Us? What
                                        Our Clients Say About Working With Us? What Our Clients Say About Working
                                        With Us? What Our
                                        Clients Say About Working With Us?
                                        What Our Clients Say About Working With Us? What Our Clients Say About
                                        Working With Us? What
                                    </p>
                                    <div className={'swiper-btm-logo-wrap'}>
                                        <img
                                            src={'/review/4.png'}
                                            alt={'UBT'} />
                                        <p>
                                            피자먹다 임직원 일동
                                        </p>
                                    </div>
                                    <div className={'looped-texts-wrapper'}>
                                        <p className={'looped-text'}>
                                            피자먹다 -
                                        </p>
                                        <p className={'looped-text'}>
                                            피자먹다 -
                                        </p>
                                        <p className={'looped-text'}>
                                            피자먹다 -
                                        </p>
                                        <p className={'looped-text'}>
                                            피자먹다 -
                                        </p>
                                        <p className={'looped-text'}>
                                            피자먹다 -
                                        </p>
                                        <p className={'looped-text'}>
                                            피자먹다 -
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}