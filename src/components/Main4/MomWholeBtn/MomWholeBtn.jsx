import "./MomWholeBtn.css"
import {useEffect, useRef, useState} from "react";
import {wrap} from "gsap/gsap-core";
import gsap from "gsap";
import ScrollTrigger from "gsap/scrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function MomWholeBtn() {

    useEffect(() => {

    }, []);

    return (
        <div className={`mom-whole-btn`}>
            <div className={'mom-btn-wrapper'}>

            </div>
        </div>
    )
}