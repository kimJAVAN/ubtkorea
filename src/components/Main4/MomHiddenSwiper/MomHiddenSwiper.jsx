import "./MomHiddenSwiper.css"
import {useEffect, useRef, useState} from "react";
import {wrap} from "gsap/gsap-core";
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
    
    useEffect(() => {

    }, []);

    return (
        <div className={`mom-hidden-swiper`}>
            <div className={'mom-hidden-wrapper'}>
                <div className={'mom-main-swiper'}>
                    <div className={'mom-left-div'}>
                        <p className={'mom-left-top-text'}>
                            curious to find out
                        </p>
                        <p className={'mom-left-top-main-text'}>
                            What Our Clients Say About Working With Us?
                        </p>
                        <p className={'mom-left-top-context'}>
                            What Our Clients Say About Working With Us? What Our Clients Say About Working With Us? What
                            Our Clients Say About Working With Us? What Our Clients Say About Working With Us? What Our
                            Clients Say About Working With Us? What Our Clients Say About Working With Us? What Our
                            Clients Say About Working With Us?
                        </p>
                        <div className={'mom-swiper-btn prev-btn'}>
                            <div className={'swiper-arrow'}><IoIosArrowBack/></div>
                            <div className={'swiper-arrow'}><IoIosArrowBack/></div>
                            <div className={'swiper-bg'}></div>
                        </div>
                        <div className={'mom-swiper-btn prev-btn'}>
                            <div className={'swiper-arrow'}><IoIosArrowForward /></div>
                            <div className={'swiper-arrow'}><IoIosArrowForward /></div>
                            <div className={'swiper-bg'}></div>
                        </div>
                    </div>
                    <div className={'main-two-swiper'}>
                        <Swiper
                            navigation={true}
                            modules={[Navigation]}
                            slidesPerView={'2'}
                            loop={true}
                            className="mom-main-swipers"
                        >
                            <SwiperSlide>
                                <div className={'inner-swiper'}>
                                    <p className={'swiper-top-title'}>ALTO DESIGN</p>
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
                                            src={'https://momenthumagency.com/wp-content/uploads/2024/06/logo-png-01-2.png'}
                                            alt={'UBT'}/>
                                        <p>
                                            DARIUS H.<br/>
                                            Co-founder & Interior Designer
                                        </p>
                                    </div>
                                    <div className={'looped-texts-wrapper'}>
                                        <p className={'looped-text'}>
                                            ALTO - DESIGN -
                                        </p>
                                        <p className={'looped-text'}>
                                            ALTO - DESIGN -
                                        </p>
                                        <p className={'looped-text'}>
                                            ALTO - DESIGN -
                                        </p>
                                        <p className={'looped-text'}>
                                            ALTO - DESIGN -
                                        </p>
                                        <p className={'looped-text'}>
                                            ALTO - DESIGN -
                                        </p>
                                        <p className={'looped-text'}>
                                            ALTO - DESIGN -
                                        </p>
                                        <p className={'looped-text'}>
                                            ALTO - DESIGN -
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={'inner-swiper'}>
                                    <p className={'swiper-top-title'}>ALTO DESIGN</p>
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
                                            src={'https://momenthumagency.com/wp-content/uploads/2024/06/logo-png-01-2.png'}
                                            alt={'UBT'}/>
                                        <p>
                                            DARIUS H.<br/>
                                            Co-founder & Interior Designer
                                        </p>
                                    </div>
                                    <div className={'looped-texts-wrapper'}>
                                        <p className={'looped-text'}>
                                            ALTO - DESIGN -
                                        </p>
                                        <p className={'looped-text'}>
                                            ALTO - DESIGN -
                                        </p>
                                        <p className={'looped-text'}>
                                            ALTO - DESIGN -
                                        </p>
                                        <p className={'looped-text'}>
                                            ALTO - DESIGN -
                                        </p>
                                        <p className={'looped-text'}>
                                            ALTO - DESIGN -
                                        </p>
                                        <p className={'looped-text'}>
                                            ALTO - DESIGN -
                                        </p>
                                        <p className={'looped-text'}>
                                            ALTO - DESIGN -
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={'inner-swiper'}>
                                    <p className={'swiper-top-title'}>ALTO DESIGN</p>
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
                                            src={'https://momenthumagency.com/wp-content/uploads/2024/06/logo-png-01-2.png'}
                                            alt={'UBT'}/>
                                        <p>
                                            DARIUS H.<br/>
                                            Co-founder & Interior Designer
                                        </p>
                                    </div>
                                    <div className={'looped-texts-wrapper'}>
                                        <p className={'looped-text'}>
                                            ALTO - DESIGN -
                                        </p>
                                        <p className={'looped-text'}>
                                            ALTO - DESIGN -
                                        </p>
                                        <p className={'looped-text'}>
                                            ALTO - DESIGN -
                                        </p>
                                        <p className={'looped-text'}>
                                            ALTO - DESIGN -
                                        </p>
                                        <p className={'looped-text'}>
                                            ALTO - DESIGN -
                                        </p>
                                        <p className={'looped-text'}>
                                            ALTO - DESIGN -
                                        </p>
                                        <p className={'looped-text'}>
                                            ALTO - DESIGN -
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