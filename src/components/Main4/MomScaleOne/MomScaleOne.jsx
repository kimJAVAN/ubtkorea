import "./MomScaleOne.css"
import {useEffect, useRef, useState} from "react";
import {wrap} from "gsap/gsap-core";
import gsap from "gsap";
import ScrollTrigger from "gsap/scrollTrigger";
import MomWholeBtn from "../MomWholeBtn/MomWholeBtn.jsx";

gsap.registerPlugin(ScrollTrigger);


export default function MomScaleOne() {

    useEffect(() => {

    }, []);

    return (
        <section className={`mom-scale-one`}>
            <div className={'mom-scale-wrapper'}>
                <div className={'mom-sticky-wrapper'}>
                    <div className={'mom-go-to-top-unit'}>
                        <div className={'mom-loding-wrapper'}>
                            <div className={'mom-center-load'}></div>
                        </div>
                        <div className={'mom-top-texts-wrapper'}>
                            <div className={'mom-top-title-wrapper'}>
                                <p className={'mom-top-title'}>Vibe Interior</p>
                                <div className={'mom-top-cate-wrap'}>
                                    <div className={'mom-top-cate-unit'}>
                                        <p>Growth Partner</p>
                                    </div>
                                    <div className={'mom-top-cate-unit'}>
                                        <p>Growth Partner</p>
                                    </div>
                                    <div className={'mom-top-cate-unit'}>
                                        <p>Growth Partner</p>
                                    </div>
                                </div>
                            </div>
                            <div className={'mom-btm-wrapper'}>
                                <div className={'mom-btm-img-wrapper'}>
                                    <img src={'/mom-scale-one/1.jpg'} alt={'UBT'}/>
                                </div>
                                <div className={'mom-btm-text-wrapper'}>
                                    <div className={'mom-btm-left-text-wrap'}>
                                        <p className={'mom-btm-small-text'}>MOMENTHUM X VIBE INTERIOR</p>
                                        <p className={'mom-btm-larger-text'}>
                                        Collaborating with <br/>
                                            Good Vives at Each Step
                                        </p>
                                    </div>
                                    <div className={'mom-btn-wrapper'}>
                                        <MomWholeBtn/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'mom-go-to-top-unit'}>
                        <div className={'mom-loding-wrapper'}>
                            <div className={'mom-center-load'}></div>
                        </div>
                        <div className={'mom-top-texts-wrapper'}>
                            <p className={'mom-top-title'}>Vibe Interior</p>
                            <div className={'mom-top-cate-wrap'}>
                                <div className={'mom-top-cate-unit'}>
                                    <p>Growth Partner</p>
                                </div>
                                <div className={'mom-top-cate-unit'}>
                                    <p>Growth Partner</p>
                                </div>
                                <div className={'mom-top-cate-unit'}>
                                    <p>Growth Partner</p>
                                </div>
                            </div>
                            <div className={'mom-btm-wrapper'}>
                                <div className={'mom-btm-img-wrapper'}>
                                    <img src={'/mom-scale-one/2.jpg'} alt={'UBT'}/>
                                </div>
                                <div className={'mom-btm-text-wrapper'}>
                                    <div className={'mom-btm-left-text-wrap'}>
                                        <p className={'mom-btm-small-text'}>MOMENTHUM X VIBE INTERIOR</p>
                                        <p className={'mom-btm-larger-text'}>
                                            Collaborating with <br/>
                                            Good Vives at Each Step
                                        </p>
                                    </div>
                                    <div className={'mom-btn-wrapper'}>
                                        <MomWholeBtn/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={'mom-go-to-top-unit'}>
                        <div className={'mom-loding-wrapper'}>
                            <div className={'mom-center-load'}></div>
                        </div>
                        <div className={'mom-top-texts-wrapper'}>
                            <p className={'mom-top-title'}>Vibe Interior</p>
                            <div className={'mom-top-cate-wrap'}>
                                <div className={'mom-top-cate-unit'}>
                                    <p>Growth Partner</p>
                                </div>
                                <div className={'mom-top-cate-unit'}>
                                    <p>Growth Partner</p>
                                </div>
                                <div className={'mom-top-cate-unit'}>
                                    <p>Growth Partner</p>
                                </div>
                            </div>
                            <div className={'mom-btm-wrapper'}>
                                <div className={'mom-btm-img-wrapper'}>
                                    <img src={'/mom-scale-one/3.jpg'} alt={'UBT'}/>
                                </div>
                                <div className={'mom-btm-text-wrapper'}>
                                    <div className={'mom-btm-left-text-wrap'}>
                                        <p className={'mom-btm-small-text'}>MOMENTHUM X VIBE INTERIOR</p>
                                        <p className={'mom-btm-larger-text'}>
                                            Collaborating with <br/>
                                            Good Vives at Each Step
                                        </p>
                                    </div>
                                    <div className={'mom-btn-wrapper'}>
                                        <MomWholeBtn/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}