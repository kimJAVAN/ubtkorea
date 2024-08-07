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
              src="/images/Main2/esMain/main2.mp4"
              muted loop autoPlay playsInline ></video>
          <img className={`es-bg-video`} src="/images/Main2/esMain/card1.jpg" alt="bg-img"/>
        </div>
        <div className="es-main-inner">
          <p
              className={`es-main-title ${titleActive && "active"} ${
                  bigFont && "bigFont"
              }`}
          >
            {/*<span>S1 Pro&nbsp;</span>*/}
            {/*<span>Omni</span>*/}
          </p>
          <div
              className={`se-main-s1-imgWrap ${imgActive && "active"} ${
                  shadow && "shadow"
              }`}
          >
            <img
                className={`se-main-s1-img`}
                src="/images/Main2/esMain/2.png"
                alt="s1-img"
                ref={esMainImgRef}
            />
            <img className={`se-main-s1-img-logo mobile-only`} src="/images/Main2/esMain/logo.png" alt="logo" ref={logoRef}/>
            <div className={`se-main-img-text`} ref={titleRefs[0]}>
              전 세계를 하나로 연결하는 유통 솔루션 <br/>
              글로벌 네트워크와 신뢰할 수 있는 서비스로<br/>

              언제나 고객님의 곁에 있습니다.
            </div>
            <div className={`se-main-img-text img-text2`} ref={titleRefs[1]}>
              혁신적인 기술과 서비스를 통해
              <br/>
              미래를 여는 글로벌 유통 파트너 <br/>UBT Korea
            </div>
            <div className={`se-main-img-text img-text3`} ref={titleRefs[2]}>
              <p>
                <img src="/images/Main2/esMain/icon1.png" alt="icon1" />
                OFF- LINE
              </p>
              <p>
                <img src="/images/Main2/esMain/icon2.png" alt="icon2" />
                ON- LINE
              </p>
              <p>
                <img src="/images/Main2/esMain/icon3.png" alt="icon3" />
                REFURBISH
              </p>
            </div>
          </div>

          <div className={`es-main-height-aniWrap`}>
            <div className="es-main-height-ani"></div>
          </div>

          <div className={`es-main-text-wrap`}>
            <p className={`es-main-text`}>
              글로벌 유통채널 UBT Korea <br/>
              더 나은 더 합리적인 유통 전략을 고민하고<br/>
              제품과 우리의 아름다움을 알려드리겠습니다.<br/>

            </p>
            <p>TechUtopia 199K subscribers</p>
            {/*<img*/}
            {/*    className={`es-main-logo-img`}*/}
            {/*    src="/images/Main2/esMain/logo.png"*/}
            {/*    alt="logo-img"*/}
            {/*/>*/}
          </div>
        </div>
      </div>
  );
}

