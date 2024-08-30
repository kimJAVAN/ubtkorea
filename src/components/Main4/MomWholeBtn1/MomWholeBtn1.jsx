import "./MomWholeBtn1.css"
import {useEffect, useRef, useState} from "react";
import {wrap} from "gsap/gsap-core";
import gsap from "gsap";
import ScrollTrigger from "gsap/scrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import { GoArrowRight } from "react-icons/go";
import { GoArrowUpRight } from "react-icons/go";
export default function MomWholeBtn1(props) {

    const btnName = props.name
    
    useEffect(() => {

    }, []);

    return (
        <div className={`mom-whole-btn1`}>
            <div className={'mom-btn-wrapper'}>
                <div className={'mom-left-btn'}>
                    <p className={'mom-inner-text'}>
                        {btnName}
                    </p>
                    <p className={'mom-bg-inner-text'}>
                        {btnName}
                    </p>
                    <div className={'mom-right-arrow'}>
                        <GoArrowRight/>
                    </div>
                </div>
                <div className={'mom-right-btn'}></div>
                <div className={'mom-arrow'}><GoArrowUpRight /></div>
            </div>
        </div>
    )
}