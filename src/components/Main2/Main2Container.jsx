import React from "react";
// import TestMainSection from "./test-main-section/TestMainSection.jsx";
import EsMainSection2 from "./EsMainSection2/EsMainSection2.jsx";
import ThreeMeritSection from "./ThreeMeritSection/ThreeMeritSection.jsx";
import EsBigTextSection from "./EsBigTextSection/EsBigTextSection.jsx";
import VideoMainStBigSection from "./VideoMainStBigSection/VideoMainStBigSection.jsx";
import FourImgSection from "./FourImgSection/FourImgSection.jsx";
import Footer from "./footerComponents/Footer.jsx";
export default function Main2Container(props) {
    const {
        windowWidth
    } = props

    return (
        <>
            <EsMainSection2 />
            <ThreeMeritSection />
            <EsBigTextSection />
            <VideoMainStBigSection/>
            <FourImgSection />
            {windowWidth > 768 ? (
                <>
                    {/* PC 컴포넌트 */}
                </>

            ) : (
                <>
                    {/* 모바일 컴포넌트 */}
                </>
            )
            }
            <Footer />
        </>

    )
}