import React from "react";
import './notice-section.css';
import {FaArrowRight} from "react-icons/fa6";

export default function NoticeSection(props) {
    const {windowWidth} = props

    return(
        <>
            <section className="notice-section">
                <div className="notice-container">
                    <div className="notice-title-wrap">
                        {/*<p className={`notice-title-sub`}>F.A.Q.</p>*/}
                        <p className={`notice-title-title`}>Furonteer Notice</p>
                        <p className={`notice-title-content`}>퓨런티어의 공지사항을 확인해보세요</p>
                        <div className="notice-contact-btn">
                            <a href="">
                                <span>More</span>
                                <FaArrowRight />
                            </a>
                        </div>
                    </div>
                    <div className="notice-content-wrap">
                        <ul className="notice-list-wrap">
                            <li className={`notice-list-item`}>
                                <a href="" className={`notice-list-link`}>
                                    <div className={`notice-list-num`}>
                                        <p>01</p>
                                    </div>
                                    <div className={`notice-list-txtWrap`}>
                                        <p>세계 최고의 기술력으로 시장 공략한 퓨런티어</p>
                                    </div>
                                </a>
                            </li>
                            <li className={`notice-list-item`}>
                                <a href="" className={`notice-list-link`}>
                                    <div className={`notice-list-num`}>
                                        <p>02</p>
                                    </div>
                                    <div className={`notice-list-txtWrap`}>
                                        <p>2024 퓨런티어 고객사 및 협력사 초청행사 개최</p>
                                    </div>
                                </a>
                            </li>
                            <li className={`notice-list-item`}>
                                <a href="" className={`notice-list-link`}>
                                    <div className={`notice-list-num`}>
                                        <p>03</p>
                                    </div>
                                    <div className={`notice-list-txtWrap`}>
                                        <p>퓨런티어 글로벌 시장 확장 계획서</p>
                                    </div>
                                </a>
                            </li>
                            <li className={`notice-list-item`}>
                                <a href="" className={`notice-list-link`}>
                                    <div className={`notice-list-num`}>
                                        <p>04</p>
                                    </div>
                                    <div className={`notice-list-txtWrap`}>
                                        <p>글로벌 기업 퓨런티어의 소식을 뉴스레터로 받아보세요</p>
                                    </div>
                                </a>
                            </li>
                            <li className={`notice-list-item`}>
                                <a href="" className={`notice-list-link`}>
                                    <div className={`notice-list-num`}>
                                        <p>05</p>
                                    </div>
                                    <div className={`notice-list-txtWrap`}>
                                        <p>독보적인 공정 솔루션 보유 업체, 퓨런티어</p>
                                    </div>
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>
            </section>
        </>
    )
}