import { useEffect, useState, useRef } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./chit-header-container.css"
import gsap from "gsap";
import ScrollTrigger from 'gsap/scrollTrigger';

export default function ChitHeader() {
    const userData = JSON.parse(sessionStorage.getItem("ud"));
    const nav = useNavigate();
    const [scrollPosition, setScrollPosition] = useState(0);
    const [topValue, setTopValue] = useState(0);
    const backWhite = useRef(null);
    const boxRefs = useRef([]);
    const asideRef = useRef(null); // ref 생성
    const [mobHeaderModal, setMobHeaderModal] = useState(false);
    const toggleMobHeaderModal = () => {
        setMobHeaderModal(prevState => !prevState); // 현재 상태를 반전시킵니다.
    };

    const handleNavLinkClick = () => {
        setMobHeaderModal(false); // 모달을 닫습니다.
    };

    useEffect(() => {
        if (asideRef.current) {
            if (mobHeaderModal) {
                asideRef.current.classList.add('active');
            } else {
                asideRef.current.classList.remove('active');
            }
        }
    }, [mobHeaderModal]);

    const handleHashLinkClick = (e) => {
        const targetId = e.currentTarget.getAttribute("href").split("#")[1];
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    };
    const { pathname } = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            if (position === 0) {
                setTopValue(0);
            } else if (position > scrollPosition) {
                setTopValue(-180);
            } else {
                setTopValue(0);
            }
            setScrollPosition(position);
        };

        // 모바일 화면에서는 handleScroll 이벤트를 처리하지 않음
        if (!mobHeaderModal) {
            window.addEventListener("scroll", handleScroll);
        } else {
            // 모달이 열릴 때 스크롤 이벤트 리스너를 제거
            window.removeEventListener("scroll", handleScroll);
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scrollPosition, mobHeaderModal]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        boxRefs.current.forEach((boxRef) => {
            gsap.to(boxRef, {
                scrollTrigger: {
                    trigger: "body",
                    start: "5px top",
                    end: "5px top",
                    scrub: true,
                    onEnter: function () {
                        boxRef.classList.add("active");
                    },
                    onLeaveBack: function () {
                        boxRef.classList.remove("active");
                    },
                },
            });
        });
    }, []);


    // 글자색 변경을 위한 클래스 이름 결정
    const navClass = pathname.startsWith("/recipe") ? "black-text" : "";

    return (
        <header
            className={`chit-header ${window.scrollY !== 0 ? "chit-header-white" : ""}`}
            style={{ top: `${topValue}px` }}
            ref={(el) => (backWhite.current = el)} // backWhite ref 설정
        >
            <div className="chit-header-container pc-only">
                <nav className="chit-header-nav pc-only">
                    <a href="/main2">
                    <div className="chit-header-dato-logo">
                        <img src="images/Header/chit-header/logo.png" alt="" className="chit-header-dato-img" />
                        {/*<p className={`dato-logo-text`}>DATO</p>*/}
                    </div>
                    </a>
                    <ul>
                        <li>
                            <div className={`chit-header-nav-link ${navClass}`}>
                                <NavLink
                                    to="#"
                                    className="header-nav-unit"
                                    ref={(el) => (boxRefs.current[0] = el)}
                                    onClick={handleHashLinkClick}
                                >
                                    ABOUT
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <div className={`chit-header-nav-link ${navClass}`}>
                                <NavLink
                                    to="#"
                                    className="header-nav-unit"
                                    ref={(el) => (boxRefs.current[1] = el)}
                                >
                                    CATEGORY
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <div className={`chit-header-nav-link ${navClass}`}>
                                    <NavLink
                                        to="#"
                                        className="header-nav-unit"
                                        ref={(el) => (boxRefs.current[2] = el)}
                                    >
                                        NEWS
                                    </NavLink>
                                </div>
                        </li>
                        <li>
                            <div className={`chit-header-nav-link ${navClass}`}>
                                    <NavLink
                                        to="#"
                                        className="header-nav-unit"
                                        ref={(el) => (boxRefs.current[3] = el)}
                                    >
                                        CONTACT
                                    </NavLink>
                                </div>
                        </li>

                        {/*<li className={`more`}>*/}
                        {/*    <div className={`chit-header-nav-link`}>*/}
                        {/*        /!* <span class="material-symbols-outlined">*/}
                        {/*            density_large*/}
                        {/*        </span> *!/*/}
                        {/*        <div className="chit-header-nav-link not-use">*/}
                        {/*            <svg xmlns="https://www.w3.org/2000/svg" viewBox="0 0 54 54" className="menu-img">*/}
                        {/*                <path className="btn-t" d="M-4542-24v-3h48v3zm0-12v-3h48v3z" transform="translate(4545 59)"></path>*/}
                        {/*                <path className="btn-bg" d="M0 0h54v54H0z"></path>*/}
                        {/*            </svg>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</li>*/}
                    </ul>
                </nav>
            </div>
            {/* 모바일 메뉴 버튼 및 메뉴 */}
            <div className="chit-header-container mobile-only">
                <div className="chit-header-nav-wrap">
                    <h1 className="chit-header-logo">
                        <NavLink to={"/"}>
                            <img
                                className="chit-header-logoimg"
                                src="/Header/furonteer-header/logo-w.png"
                                alt="enc"
                            />
                        </NavLink>
                    </h1>
                    <div className="chit-header-more">
                        <button className="chit-header-mo-btn" type="button" onClick={toggleMobHeaderModal}>
                            <span className="material-symbols-outlined">
                                {mobHeaderModal ? 'Minimize' : 'sort'}
                            </span>
                        </button>
                    </div>
                </div>
                <aside ref={asideRef} className="chit-mo-aside">
                    <div className="chit-mo-container">
                        <nav className="chit-mo-aside-nav">
                            <ul className="chit-mo-aside-nav-wrap">
                                <li onClick={handleNavLinkClick}>
                                    <div className={`chit-header-nav-link ${navClass}`}>
                                        <NavLink
                                            to="/#about"
                                            className="header-nav-unit"
                                            ref={(el) => (boxRefs.current[0] = el)}
                                        >
                                            ABOUT
                                        </NavLink>
                                    </div>
                                </li>
                                <li onClick={handleNavLinkClick}>
                                    <div className={`chit-header-nav-link ${navClass}`}>
                                        <NavLink
                                            to="/project"
                                            className="header-nav-unit"
                                            ref={(el) => (boxRefs.current[1] = el)}
                                        >
                                            CATEGORY
                                        </NavLink>
                                    </div>
                                </li>
                                <li onClick={handleNavLinkClick}>
                                    <div className={`chit-header-nav-link ${navClass}`}>
                                        <div className="chit-header-nav-link not-use">
                                            <NavLink
                                                to="/#solution"
                                                className="header-nav-unit"
                                                ref={(el) => (boxRefs.current[2] = el)}
                                            >
                                                NEWS
                                            </NavLink>
                                        </div>
                                    </div>
                                </li>
                                <li onClick={handleNavLinkClick}>
                                    <div className={`chit-header-nav-link ${navClass}`}>
                                        <div className="chit-header-nav-link not-use">
                                            <NavLink
                                                to="/notice"
                                                className="header-nav-unit"
                                                ref={(el) => (boxRefs.current[3] = el)}
                                            >
                                                CONTACT
                                            </NavLink>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </aside>
            </div>
        </header>
    );
}
