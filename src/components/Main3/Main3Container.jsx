import React from "react";
import BsnSwiperMainSection3 from "./BsnSwiperMainSection3/BsnSwiperMainSection3.jsx";
import EarthBgSection from "./EarthBgSection/EarthBgSection.jsx";
import HighLightsSectionV3 from "./HighlightsSectionV3/HighLightsSectionV3.jsx";
import ProgressSlideSectionV3 from "./ProgressSlideSectionV3/ProgressSlideSectionV3.jsx";
import LineMovingSectionV3 from "./LineMovingSectionV3/LineMovingSectionV3.jsx";
import NewsBoardSectionV3 from "./NewsBoardSectionV3/NewsBoardSectionV3.jsx";
import NoticeSectionV3 from "./NoticeSectionV3/NoticeSectionV3.jsx";
import EunoFooter from "./euno-footer-main3/EunoFooterMain3.jsx";
import MainBorderSection from "./MainBorderSection/MainBorderSection.jsx";

export default function Main3Container(props) {
    const {
        windowWidth
    } = props

    return (
        <>
            {/*<BsnSwiperMainSection3/>*/}
            <MainBorderSection/>
            <EarthBgSection/>
            <HighLightsSectionV3/>
            <ProgressSlideSectionV3/>
            <LineMovingSectionV3/>
            <NewsBoardSectionV3/>
            <NoticeSectionV3/>
            <EunoFooter/>
        </>

    )
}