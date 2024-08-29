import React from "react";
import Footer from "../Main2/footerComponents/Footer.jsx";
import MomMainUp from "./MomMainUp/MomMainUp.jsx";
import MomScaleOne from "./MomScaleOne/MomScaleOne.jsx";
// import TestMainSection from "./test-main-section/TestMainSection.jsx";

export default function Main4Container(props) {
    const {
        windowWidth
    } = props

    return (
        <>
            <MomMainUp />
            <MomScaleOne />
            <Footer />
        </>

    )
}