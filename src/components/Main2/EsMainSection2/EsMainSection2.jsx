import { useEffect, useRef, useState } from "react";
import "./es-main-section2.css";
import gsap from "gsap";
import {borderRight} from "@mui/system";

export default function EsMainSection2() {
  const [titleActive, setTitleActive] = useState(false);
  const [imgActive, setImgActive] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [bigFont, setBigFont] = useState(false);
  const titleRefs = [useRef(null), useRef(null), useRef(null)];
  const logoRef = useRef([]);
  const isMobile = window.innerWidth < 768;
  const esMainImgRef = useRef();
  useEffect(() => {
    const textTimeout = setTimeout(() => {
      setTitleActive(true);
    }, 500);
    const imgTimeout = setTimeout(() => {
      setImgActive(true);
    }, 1800);
    const fontTimeout = setTimeout(() => {
      setBigFont(true);
    }, 2000);
    const shadowTimeout = setTimeout(() => {
      setShadow(true);
    }, 3000);

    return () => {
      clearTimeout(textTimeout);
      clearTimeout(imgTimeout);
      clearTimeout(shadowTimeout);
      clearTimeout(fontTimeout);
    };
  }, []);

  useEffect(() => {
    if(isMobile) {
      const esMainTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".es-main-section2",
          start: "2% top",
          end: "30% top",
          scrub: true,
          // markers : true,
          onEnter: () => {
            esMainImgRef.current.style.transition = "0.2s transition"
          }
        }
      })
      esMainTl.to(".es-main-section2 .se-main-s1-imgWrap .se-main-s1-img", {
        y: 0
      });
      const esMainTl21 = gsap.timeline({
        scrollTrigger: {
          trigger: ".es-main-section2",
          start: "30% top",
          end: "bottom top",
          scrub: true,
          // markers : true,
          onEnter: () => {
            document.querySelector(".es-main-page").style.backgroundColor ="black"
            esMainImgRef.current.style.transition = "0.2s transition"
          },
          onLeaveBack: () => {
            document.querySelector(".es-main-page").style.backgroundColor ="transparent"
          }
        }
      })
      esMainTl21.to(".es-main-section2 .se-main-s1-imgWrap .se-main-s1-img", {
        scale: 10,
        // opacity: 0,
      });
      esMainTl21.to(".es-main-section2", {
        opacity: 0
      });


      gsap.to(logoRef.current, {
        scrollTrigger: {
          trigger: logoRef.current,
          start: "end 20%",
          end: "end top",
          scrub: true,
          // markers:true,
          onEnter: () => {
            logoRef.current.classList.add("active");
          },
          onLeaveBack: () => {
            logoRef.current.classList.remove("active");
          },
        },
      });


    } else if(!isMobile){
      gsap.to(".es-main-title", {
        scrollTrigger: {
          trigger: ".es-main-section2",
          start: "2% top",
          end: "40% top",
          scrub: true,
          // markers : true,
        },
        y: `200px`,
      });
    }

    titleRefs.forEach((titleRefs, index) => {
      if (titleRefs.current) {
        gsap.to(titleRefs.current, {
          scrollTrigger: {
            trigger: titleRefs.current,
            // start: "center 75%",
            start: "center bottom",
            end: "center top",
            scrub: true,
            // markers:true,
            onEnter: () => {
              titleRefs.current.classList.add("active");
            },
          },
        });
      }
    });
    gsap.to(".es-main-height-ani", {
      scrollTrigger: {
        trigger: ".es-main-height-ani",
        start: "top 70%",
        end: "end 70%",
        scrub: true,
        // markers : true,
      },
      clipPath: "inset(0 0 0 0)",
    });
  }, []);

  return (
      <div className={`es-main-section2`}>
        <div className="es-bg-wrap">
          <video
              className={`es-bg-video`}
              src="/images/Main2/esMain/main1.mp4"
              muted loop autoPlay playsInline ></video>
          <img className={`es-bg-video`} src="/images/Main2/esMain/card1.jpg" alt="bg-img"/>
        </div>
        <div className="es-main-inner">
          <p
              className={`es-main-title ${titleActive && "active"} ${
                  bigFont && "bigFont"
              }`}
          >
            <span>S1 Pro&nbsp;</span>
            <span>Omni</span>
          </p>
          <div
              className={`se-main-s1-imgWrap ${imgActive && "active"} ${
                  shadow && "shadow"
              }`}
          >
            <img
                className={`se-main-s1-img`}
                src="/images/Main2/esMain/1.png"
                alt="s1-img"
                ref={esMainImgRef}
            />
            <img className={`se-main-s1-img-logo mobile-only`} src="/images/Main2/esMain/logo.png" alt="logo" ref={logoRef}/>
            <div className={`se-main-img-text`} ref={titleRefs[0]}>
              단순히 진공 청소기에서 멈추는 것이 아닌, <br />
              미적 우아함과 최첨단 기술이 조화로운 <br />
              독보적인 스마트 로봇청소기 입니다.
            </div>
            <div className={`se-main-img-text img-text2`} ref={titleRefs[1]}>
              혁신을 현실로 바꾸다. 꿈의 인공지능 로봇 청소기!<br/>
              우아한 디자인과 최첨단 기술의 조화로 <br/>생활 공간을 현대적인 안식처로 바꿔보세요!
            </div>
            <div className={`se-main-img-text img-text3`} ref={titleRefs[2]}>
              <p>
                <img src="/images/Main2/esMain/icon1.png" alt="icon1" />
                빠른 매핑 <br />
                효율적 청소
              </p>
              <p>
                <img src="/images/Main2/esMain/icon2.png" alt="icon2" />
                모든 청소 <br />
                살균 기능
              </p>
              <p>
                <img src="/images/Main2/esMain/icon3.png" alt="icon3" />
                실시간 <br />
                장애물 인식
              </p>
            </div>
          </div>

          <div className={`es-main-height-aniWrap`}>
            <div className="es-main-height-ani"></div>
          </div>

          <div className={`es-main-text-wrap`}>
            <p className={`es-main-text`}>
              프로 로봇청소기는 최첨단 기술과 범접할 수 없는 <br />
              편의성과 성능을 결합한 홈클리닝 혁신의 <br />
              정점을 보여줍니다.
            </p>
            <p>TechUtopia 199K subscribers</p>
            <img
                className={`es-main-logo-img`}
                src="/images/Main2/esMain/logo.png"
                alt="logo-img"
            />
          </div>
        </div>
      </div>
  );
}

