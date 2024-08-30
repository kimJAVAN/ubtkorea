import React from "react";
import Footer from "../Main2/footerComponents/Footer.jsx";
import MomMainUp from "./MomMainUp/MomMainUp.jsx";
import MomScaleOne from "./MomScaleOne/MomScaleOne.jsx";
import MomCardsNews from "./MomCardsNews/MomCardsNews.jsx";
import MomHiddenSwiper from "./MomHiddenSwiper/MomHiddenSwiper.jsx";
import MomXScroll from './MomXScroll/MomXScroll.jsx';
// import TestMainSection from "./test-main-section/TestMainSection.jsx";
import BrxeSection from "./BrxeSection/brxe-section.jsx";
import BrxeYwnrmc from "./BrxeYwnrmc/brxe-ywnrmc.jsx"
import LineMovingSection from '../Main/LineMovingSection/LineMovingSection.jsx';
import MoveChangeText from './MoveChangeText/MoveChangeText.jsx';
export default function Main4Container(props) {
    const {
        windowWidth
    } = props

    return (
        <>
            <MomMainUp />
            <LineMovingSection />
            <MomScaleOne />
            <MomXScroll />
            <MoveChangeText />
            <MomCardsNews />
            <MomHiddenSwiper />
            <BrxeSection/>
            <BrxeYwnrmc/>
            <Footer />
        </>

    )
}