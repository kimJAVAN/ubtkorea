import React from "react";
import TestMainSection from "./test-main-section/TestMainSection.jsx";

export default function Main2Container(props) {
    const {
        windowWidth
    } = props

    return (
        <>
            {/*<TestMainSection />*/}
ddd
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