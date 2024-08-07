import React, {useEffect, useState, useRef} from 'react';
import "./main-border-section.css";
import { LuMinus } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import gsap from "gsap";

export default function MainBorderSection(props) {
    const {windowWidth} = props
    // const [isActive, setIsActive] = useState(false);
    // const [isDetailActive, setIsDetailActive] = useState(false);
    const [colors, setColors] = useState(Array(5).fill('#fff'));
    const [activeIndex, setActiveIndex] = useState(0);
    const [direction, setDirection] = useState(1); // 1은 증가, -1은 감소
    const containerRef = useRef(null);
    const detailRef = useRef(null);

    const getRandomColor = () => {
        const colors = ['#fff', 'rgba(255, 255, 255, 0.7)', 'rgba(255, 255, 255, 0.3)'];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    useEffect(() => {
        // 전체 컨테이너 활성화 애니메이션
        gsap.to(containerRef.current, {
            scale: 1,
            duration: 0.3,
            delay: 0.3,
            onComplete: () => {
                // Detail 활성화 애니메이션이 containerRef 애니메이션이 끝난 후 시작
                gsap.to(detailRef.current, {
                    opacity: 1,
                    duration: 0.3,
                    delay: 1.2 // Optional: small delay for better visual effect
                });
            }
        });
    }, []);

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setIsActive(true);
    //     }, 100);
    //
    //     const detailTimeout = setTimeout(() => {
    //         setIsDetailActive(true);
    //     }, 2000); // Detail 활성화 시간 설정
    //
    //     return () => {
    //         clearTimeout(timeout);
    //         clearTimeout(detailTimeout);
    //     };
    // }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setColors(colors.map(() => getRandomColor()));
        }, 200);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => {
                if (direction === 1) {
                    if (prevIndex === 13) {
                        setDirection(-1);
                        return prevIndex - 1;
                    } else {
                        return prevIndex + 1;
                    }
                } else {
                    if (prevIndex === 1) {
                        setDirection(1);
                        return prevIndex + 1;
                    } else {
                        return prevIndex - 1;
                    }
                }
            });
        }, 100);

        return () => clearInterval(interval);
    }, [direction]);


    return(
        <>
            <section className="main-border-section">
                <div className={`main-border-container`} ref={containerRef}>
                    <div className="main-border-empty-for-nonCursor"></div>
                    <div className="main-border-img-wrap">
                        <img src="/images/Main/main-border-section/border.png" alt="" className="main-border-img"/>
                    </div>
                    <div className="main-border-bgWrap">
                        <video src="/images/Main/main-border-section/main.mp4" className="main-border-bg" autoPlay muted loop
                               playsInline></video>
                    </div>

                </div>
                {/*<div className={`main-border-detail-wrap`} ref={detailRef}>*/}
                {/*    <div className="main-border-detail-square">*/}
                {/*        {colors.map((color, index) => (*/}
                {/*            <div*/}
                {/*                key={index}*/}
                {/*                className={`main-border-small-square`}*/}
                {/*                style={{backgroundColor: color}}*/}
                {/*            ></div>*/}
                {/*        ))}*/}
                {/*        <div className="main-border-small-square"></div>*/}
                {/*    </div>*/}
                {/*    <div className="main-border-detail-volume">*/}
                {/*        <LuMinus/>*/}
                {/*        {[...Array(15)].map((_, index) => (*/}
                {/*            <div*/}
                {/*                key={index}*/}
                {/*                className={`main-border-small-stick ${index === activeIndex ? 'active' : ''}`}*/}
                {/*            ></div>*/}
                {/*        ))}*/}
                {/*        <GoPlus/>*/}
                {/*    </div>*/}
                {/*    <div className="main-border-detail-empty">*/}

                {/*    </div>*/}
                {/*</div>*/}
            </section>
        </>
    )
}