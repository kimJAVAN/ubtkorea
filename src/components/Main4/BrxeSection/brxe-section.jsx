import "./brxe-section.css"
import {useEffect, useRef, useState} from "react";
import {wrap} from "gsap/gsap-core";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/scrollTrigger";
import {NavLink} from "react-router-dom";

// gsap.registerPlugin(ScrollTrigger);
export default function BrxeSection() {

    return (
        <>
            <section  className="brxe-section">
                <div  className="brxe-container">
                    <div className="left-box">

                        <h3 className="subh-anim2">OUR
                            PURPOSE</h3>
                    </div>
                    <div  className="brxe-jilxcl">
                        <div  className="brxe-right">
                            <div  className="brxe-text">
                                <p>
                                    <span className={"white"} >We’re all about leveling up every part of</span>

                                    <span >your business in the digital landscape,</span>

                                    <span className={"white"}> making sure that we do everything necessary to reach your objectives</span>

                                    <span >and also make you stand out</span>
                                   
                                    <span className={"white"}> in the crowd.</span></p>
                            </div>
                            <div className="brxe-rhbvyi">
                                {/*트랜지션*/}
                                <NavLink to={""} className="brxe-asapip">
                                    <div  className="buton-cu-cerc">
                                        <p className="brxe-heading">Get
                                            In Touch</p>
                                        <div className="brxe-gdcxec">
                                            <div  className="bg2-but-cerc"></div>
                                            <div  className="brxe-katjhy">
                                                <p className="t2-but-cerc">
                                                    Get In Touch</p></div>
                                        </div>
                                    </div>
                                    {/*    트랜지션*/}
                                    <div  className="cerc-but-cu-cerc">
                                        <img src="https://momenthumagency.com/wp-content/uploads/2024/06/Line-536-1.png"
                                             className="brxe-image" alt=""
                                        />
                                        <div className="">
                                            <div  className="bg-abs-but-cu-cerc">
                                                <div className="horizontal">
                                                    <div className="line"></div>
                                                </div>
                                            </div>
                                            <div  className="brxe-image">
                                                <img src="https://momenthumagency.com/wp-content/uploads/2024/06/Line-536-1.png" className="brxe-image"/>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                                <NavLink  to={""} className="but-fade2">
                                    <div  className="buton-cu-cerc">
                                        <h3  className="t-but-cerc">Services</h3>
                                        <div  className="">
                                            <div className="bg2-but-cerc"></div>
                                            <div className="">
                                                <h3 className="t2-but-cerc">Services</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div  className="cerc-but-cu-cerc">
                                        <img
                                            src="https://momenthumagency.com/wp-content/uploads/2024/06/Line-536-1.png"
                                            className="brxe-image" alt=""
                                        />
                                        <div className="brxe-container">
                                            <div  className="bg-abs-but-cu-cerc">
                                                <div  className="horizontal">
                                                    <div className="line"></div>
                                                </div>
                                            </div>
                                            <div className="bg-icon2">
                                                <img className="brxe-image" src="https://momenthumagency.com/wp-content/uploads/2024/06/Line-536-1.png"/>
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}