import React from "react";
// import TestMainSection from "./test-main-section/TestMainSection.jsx";
import EsMainSection2 from "./EsMainSection2/EsMainSection2.jsx";
export default function Main2Container(props) {
    const {
        windowWidth
    } = props

    return (
        <>
            <EsMainSection2 />
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
        </>

    )
}