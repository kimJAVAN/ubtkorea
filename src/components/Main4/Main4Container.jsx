import React from "react";
import Footer from "../Main2/footerComponents/Footer.jsx";
import MomMainUp from "./MomMainUp/MomMainUp.jsx";
import MomScaleOne from "./MomScaleOne/MomScaleOne.jsx";
import MomCardsNews from "./MomCardsNews/MomCardsNews.jsx";
import MomHiddenSwiper from "./MomHiddenSwiper/MomHiddenSwiper.jsx";
import MomXScroll from './MomXScroll/MomXScroll.jsx';
// import TestMainSection from "./test-main-section/TestMainSection.jsx";

export default function Main4Container(props) {
    const {
        windowWidth
    } = props

    return (
        <>
            <MomMainUp />
            <MomScaleOne />
            <MomXScroll />
            <MomCardsNews />
            <MomHiddenSwiper />
            <Footer />
        </>

    )
}