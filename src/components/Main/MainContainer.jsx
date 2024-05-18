import React from "react";
import TestMainSection from "./test-main-section/TestMainSection.jsx";

export default function MainContainer(props) {
    const {
        windowWidth
    } = props

    return (
        <>
            <TestMainSection />

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