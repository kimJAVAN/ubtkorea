import React from "react";
import BsnSwiperMainSection2 from "./BsnSwiperMainSection2/BsnSwiperMainSection2.jsx";
import EarthBgSection from "./EarthBgSection/EarthBgSection.jsx";
import HighLightsSection from "./HighlightsSection/HighLightsSection.jsx";
import ProgressSlideSection from "./ProgressSlideSection/ProgressSlideSection.jsx";
import LineMovingSection from "./LineMovingSection/LineMovingSection.jsx";
import NewsBoardSection from "./NewsBoardSection/NewsBoardSection.jsx";
import NoticeSection from "./NoticeSection/NoticeSection.jsx";
import EunoFooter from "./euno-footer/EunoFooter.jsx";

export default function MainContainer(props) {
    const {
        windowWidth
    } = props

    return (
        <>
            <BsnSwiperMainSection2/>
            <EarthBgSection/>
            <HighLightsSection/>
            <ProgressSlideSection/>
            <LineMovingSection/>
            <NewsBoardSection/>
            <NoticeSection/>
            <EunoFooter/>
        </>

    )
}