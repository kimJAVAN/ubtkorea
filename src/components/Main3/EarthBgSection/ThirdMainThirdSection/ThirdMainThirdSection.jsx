import React, { useEffect, useRef } from 'react';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/scrollTrigger";
import './ThirdMainThirdSection.css';

gsap.registerPlugin(ScrollTrigger);

export default function ThirdMainThirdSection() {

    return (
        <section className={`third-main-third-section`}>
            <div className="third-main-container">
                <div className={`third-main-cover-wrap`}>
                    <div className={`third-main-cover-inner pc`}>
                        <div className="third-main-cover-top pc">
                            <div className={`third-main-cover-image-wrap pc`}>

                                <div className='moblie-title-area'>
                                    연구를 넘어, 기술 상용화까지
                                </div>

                            </div>
                            <div className={`third-main-cover-description-wrap pc`}>
                                <div className={`third-main-cover-right`}>
                                    <p className={`third-main-cover-title pc`}>
                                        초등교육을 위한 AI 교육 ‘AI Hada’ 프로젝트, 교사의 AI 교과서를 위한 <br/>
                                        ‘글로벌 메타 교과서’  등 실질적 상용 프로젝트를 운영하며 앞장서고 있습니다.
                                    </p>
                                    <div className="third-main-cover-more-button">
                                        MORE
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
}
