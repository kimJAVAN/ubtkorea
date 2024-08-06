import React, {useEffect, useRef, useState} from 'react';
import {EarthThreeD} from "./EarthThreeD/EarthThreeD.jsx";
import {OrthographicCamera, useHelper} from "@react-three/drei";
import {Canvas, useThree} from "@react-three/fiber";
import './earth-bg-section.css'
import {ThreeDContents} from "./ThreeDContents/ThreeDContents.jsx";
import gsap from "gsap";

import { MdOutlineStar } from "react-icons/md";

export default function EarthBgSection() {

    const moreTextArray = [
        {
            index : 1,
            main : '세계 최고 SW 기술 보유',
            context : '세계 최고 수준 Active Align,\n' +
                'Intrinsic Calibration 및 EOL 검사\n' +
                '알고리즘 보유'
        },
        {
            index : 2,
            main : '모션 제어 알고리즘 보유',
            context : '고속/고정밀/다축/고생산성\n' +
                '물류 핸들러(모션) 제어 알고리즘 보유'
        },
        {
            index : 3,
            main : '핵심 컴포넌트 내재화',
            context : 'Image Grabber, LED 광원, 산업용 PC,\n' +
                '모션 제어기 등의 자동화 핵심 컴포넌트 보유'
        },
        {
            index : 4,
            main : '글로벌 고객 지사 운영',
            context : '다수의 양산라인 운영 이력과\n' +
                '타이완, 중국, 미국, 인도 해외지사 운영으로\n' +
                '안정적인 품질 및 생산성 확보'
        },
    ]

    const [selectedIndex, setSelectedIndex] = useState(1); // css 활성화 * 글자 색 바꾸기
    const [isRotating, setIsRotating] = useState(true); // 회전 여부를 추적하는 상태 추가
    const [earthRotationSet, setEarthRotationSet] = useState([-4.1, -3.2, 3.4]); // rotate 값
    const [countryName, setCountryName] = useState('')
    const [isMarker, setIsMarker] = useState(false)
    const [showMarkers, setShowMarkers] = useState(false);
    const handleScrollItemClick = (index) => {
        setSelectedIndex(index); // css 활성화 * 글자 색 바꾸기
        setIsRotating(false); // 버튼 클릭 시 회전 멈추기
        setIsMarker(true);
        setShowMarkers(false); // 일단 marker 를 false로 설정

        // 설정된 시간이 지난 후에 마커를 다시 보이게 설정
        setTimeout(() => {
            setShowMarkers(true);
        }, 2000);

        switch (index) {
            case 1:
                // setEarthRotationSet([-3.2, -1.8, 1.2]);
                setEarthRotationSet([-4.3, -3.2, 5.85]);
                setCountryName('Taiwan');
                break;
            case 2:
                // setEarthRotationSet([-0.8, 0.4, -0.10]);
                setEarthRotationSet([-4.1, -3.2, 3.4]);
                setCountryName('AMERICA');
                break;
            case 3:
                // setEarthRotationSet([-3.4, -2.2, 1.0]);
                setEarthRotationSet([-4.1, -3.2, 5.9]);
                setCountryName('CHINA');
                break;
            case 4:
                // setEarthRotationSet([-3.7, -1.9, 1.2]);
                setEarthRotationSet([-4.3, -3.2, 6.5]);
                setCountryName('INDIA');
                break;
            default:
                console.log('return');
                break;
        }
    };

    const selectedText = moreTextArray.find(item => item.index === selectedIndex);

    const trheeDBgWrapper = useRef()

    useEffect(() => {
        const tl1 = gsap.timeline()
        {
            tl1.to('.earth-bg-section .earth-front-text-div', {
                scrollTrigger: {
                    trigger: '.earth-bg-section',
                    start: `1200px center`,
                    end: `1200px center`,
                    scrub: true,
                    // markers: true,
                },
                left : '0'
            });
            tl1.to('.earth-bg-section .earth-gra-bg', {
                scrollTrigger: {
                    trigger: '.earth-bg-section',
                    start: `1200px center`,
                    end: `1200px center`,
                    scrub: true,
                    // markers: true,
                },
                left : '-30%'
            });
            tl1.to('.earth-bg-section .earth-gra-bg', {
                scrollTrigger: {
                    trigger: '.earth-bg-section',
                    start: `1800px center`,
                    end: `1800px center`,
                    scrub: true,
                    // markers: true,
                },
                width : '3000px',
            });
            tl1.to('.earth-bg-section .earth-front-text-div', {
                scrollTrigger: {
                    trigger: '.earth-bg-section',
                    start: `1800px center`,
                    end: `1800px center`,
                    scrub: true,
                    // markers: true,
                },
                opacity : '0.1',
                left : '-60px'
            });
            tl1.to('.earth-bg-section .earth-blur-box.first', {
                scrollTrigger: {
                    trigger: '.earth-bg-section',
                    start: `2400px center`,
                    end: `2400px center`,
                    scrub: true,
                    // markers: true,
                },
                opacity : '1',
                top : '50%'
            });
            tl1.to('.earth-bg-section .earth-blur-box.first', {
                scrollTrigger: {
                    trigger: '.earth-bg-section',
                    start: `3000px center`,
                    end: `3000px center`,
                    scrub: true,
                    // markers: true,
                },
                opacity : '0',
                top : '0%'
            });
            tl1.to('.earth-bg-section .earth-blur-box.two', {
                scrollTrigger: {
                    trigger: '.earth-bg-section',
                    start: `3600px center`,
                    end: `3600px center`,
                    scrub: true,
                    // markers: true,
                },
                opacity : '1',
                top : '50%'
            });
            tl1.to('.earth-bg-section .earth-blur-box.two', {
                scrollTrigger: {
                    trigger: '.earth-bg-section',
                    start: `4200px center`,
                    end: `4200px center`,
                    scrub: true,
                    // markers: true,
                },
                opacity : '0',
                top : '0%'
            });
            tl1.to('.earth-bg-section .earth-left-top-title>p', {
                scrollTrigger: {
                    trigger: '.earth-bg-section',
                    start: `4800px center`,
                    end: `4800px center`,
                    scrub: true,
                    // markers: true,
                },
                top : '0'
            });
            tl1.to('.earth-bg-section .left-top-bottom-text', {
                scrollTrigger: {
                    trigger: '.earth-bg-section',
                    start: `4800px center`,
                    end: `4800px center`,
                    scrub: true,
                    // markers: true,
                },
                opacity : '1'
            });
            tl1.to('.earth-bg-section .left-bottom-scroll-div', {
                scrollTrigger: {
                    trigger: '.earth-bg-section',
                    start: `5000px center`,
                    end: `5000px center`,
                    scrub: true,
                    // markers: true,
                },
                opacity : '1',
                scale : '1',
                left : '150px',
                top : '40%'
            });
            tl1.to('.earth-bg-section .right-more-view-wrapper', {
                scrollTrigger: {
                    trigger: '.earth-bg-section',
                    start: `5000px center`,
                    end: `5000px center`,
                    scrub: true,
                    // markers: true,
                },
                opacity : '1',
                scale : '1',
                right : '150px'
            });
        }
        gsap.to('.earth-bg-section', {
            scrollTrigger: {
                trigger: '.earth-bg-section',
                start: `4800px center`,
                end: `4800px center`,
                scrub: true,
                // markers: true,
                onEnterBack : () => {
                    setIsRotating(true)
                    setShowMarkers(false);
                    setIsMarker(false)
                }
            },
        });
    }, []);

    useEffect(() => {
        if (isMarker) {
            const timer = setTimeout(() => {
                setShowMarkers(true);
            }, 700); // 0.5초 후에 표시

            return () => clearTimeout(timer);
        } else {
            setShowMarkers(false);
        }
    }, [isMarker]);

    return (
        <section className={'earth-bg-section'}>
            <div className={'earth-3d-sticky-wrap'}>
                <div className={'earth-sticky-inner'}>
                    <div className={'earth-front-wrapper'}>
                        <div className={'earth-front-text-gra'}>
                            <div className={'earth-front-text-div'}>
                                <p>
                                    global<br/>
                                    technology<br/>
                                    furonteer
                                </p>
                            </div>
                            <div className={'earth-gra-bg'}></div>
                        </div>
                        <div>
                            <div className={'earth-blur-box first'}>
                                <p className={'earth-blur-box-text'}>
                                    A LEADING <br/>
                                    GLOBAL COMPANY
                                </p>
                            </div>
                            <div className={'earth-blur-box two'}>
                                <p className={'earth-blur-box-text'}>
                                    FUTURE ADVANCEMENTS <br/>
                                    IN TECHNOLOGY
                                </p>
                            </div>
                        </div>
                        <div>
                            <div className={'earth-world-left-top-wrap'}>
                                <div className={'earth-left-top-title'}>
                                    <p>GLOBAL TECHNOLOGY</p>
                                </div>
                                <div className={'earth-left-top-title'}>
                                    <p>FURONTEER</p>
                                </div>
                                <div className={'left-top-bottom-text'}>
                                    Pioneer of Future Frontier with<br />
                                    Cutting-edge Technology
                                </div>
                            </div>
                            <div className={'left-bottom-scroll-div'}>
                                <div className={'left-bottom-title-wrap'}>
                                    <div className={'left-bottom-scroll-icon-wrap'}>
                                        <MdOutlineStar />
                                    </div>
                                    <p>Technology Point</p>
                                </div>
                                <div className={'earth-scroll-wrapper'}>
                                    {moreTextArray.map((item) => (
                                        <div
                                            key={item.index}
                                            className={`scrolled-unit-div ${selectedIndex === item.index ? 'active' : ''}`}
                                            onClick={() => handleScrollItemClick(item.index)}
                                        >
                                            <p>Point 0{item.index}</p>
                                            <p>{item.main}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className={'right-more-view-wrapper'}>
                                <div className={'right-bottom-unit-wrap'}>
                                    <div className={'right-bottom-unit'}>
                                        <p className={'right-point-text'}>Point 0{selectedIndex}</p>
                                        <div className={'right-bottom-icon-and-text'}>
                                            <div className={'right-bottom-icon-wrap'}>
                                                <img src={`images/Main/earth-bg-section/${selectedIndex}.png`} alt={`Point 0${selectedIndex}`} />
                                            </div>
                                            <div className={'right-bottom-text'}>
                                                <p>{selectedText.main}</p>
                                            </div>
                                        </div>
                                        <p className={'right-bottom-context'}>
                                            {selectedText.context}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {isMarker &&
                                <div className={'earth-country-name-wrap'}>
                                    <p className={'earth-count-name'}>{countryName}</p>
                                    {showMarkers &&
                                        <div className={'earth-count-marker-wrap'}>
                                            <div className={'earth-count-marker'}></div>
                                            <div className={'earth-count-marker'}></div>
                                            <div className={'earth-count-marker-blur'}></div>
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                    <div className={'earth-bg-3d-wrapper'} ref={trheeDBgWrapper}>
                        <Canvas
                            camera={{
                                fov: 20,
                                near: 1,  // near 값을 1로 설정
                                far: 600, // far 값을 적절히 조정
                            }}
                        >
                            <OrthographicCamera >
                                <ThreeDContents
                                    isRotating={isRotating}
                                    earthRotationSet={earthRotationSet}
                                />
                            </OrthographicCamera>
                        </Canvas>
                    </div>
                </div>
            </div>
        </section>
    );
}