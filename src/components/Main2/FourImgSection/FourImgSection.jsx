import "./four-img-section.css"
import React, {useEffect, useRef} from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/scrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FourImgSection(){
  const AniRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const isMobile = window.innerWidth <768;

  useEffect(() => {
    AniRefs.forEach((AniRefs, index) => {
      if (AniRefs.current) {
        gsap.to(AniRefs.current, {
          scrollTrigger: {
            trigger: AniRefs.current,
            start: `top ${isMobile ? "70%":"bottom"}`,
            end: "bottom top",
            scrub: true,
            // markers:true,
            onEnter: () => {
              AniRefs.current.classList.add("active");
            },
            // onEnterBack: () => {
            //   AniRefs.current.classList.add("active");
            // },
            // onLeave: () => {
            //   AniRefs.current.classList.remove("active");
            // },
            onLeaveBack: () => {
              AniRefs.current.classList.remove("active");
            },
          },
        });
      }
    });

    // if (innerWidth>768 ){
    //
    // }else {
    //
    //
    //
    //     gsap_one()
    //     gsap_two()
    //     gsap_three()
    //     gsap_four()
    //
    //   function gsap_one() {
    //     gsap.to(".top-img-wrap.item1", {
    //       scrollTrigger: {
    //         trigger: ".four-img-section",
    //         start: "top center",
    //         end: "400px center",
    //         scrub: true,
    //         markers: false,
    //       },
    //       y: '-54px',
    //       scale: '0.8',
    //       ease: "power1.out"
    //     });
    //   }
    //   function gsap_two() {
    //     gsap.to(".top-img-wrap.item2", {
    //       scrollTrigger: {
    //         trigger: ".four-img-section",
    //         start: "400px center",
    //         end: "800px center",
    //         markers: false,
    //         scrub: true,
    //       },
    //       y: '70px',
    //       scale: '0.85',
    //       ease: "power1.out"
    //     });
    //   }
    //   function gsap_three() {
    //     gsap.to(".top-img-wrap.item3", {
    //       scrollTrigger: {
    //         trigger: ".four-img-section",
    //         start: "800px center",
    //         end: "1200px center",
    //         markers: false,
    //         scrub: true,
    //       },
    //       y: '105px',
    //       scale: '0.9',
    //       ease: "power1.out"
    //     });
    //   }
    //   function gsap_four() {
    //     gsap.to(".top-img-wrap.item4", {
    //       scrollTrigger: {
    //         trigger: ".four-img-section",
    //         start: "1200px center",
    //         end: "1600px center",
    //         markers: false,
    //         scrub: true,
    //       },
    //       y: '140px',
    //       scale: '0.95',
    //       ease: "power1.out"
    //     });
    //   }
    //   }

  }, []);

  return(
    <section className={'four-img-section'}>
      <h2 className={`four-img-title`}>글로벌 유통 이제 UBT  <br className={`mobile-only`}/>
        Korea과 함께하세요</h2>
      <div className={'four-img-top'}>
        <div className={'top-img-wrap item1'} ref={AniRefs[0]}>
          <img className={'four-img four-img-one'} src="/images/Main2/esMain/four-img-section/2.jpg"/>
        </div>
        <div className={'top-img-wrap item2'} ref={AniRefs[1]}>
          <img className={'four-img four-img-two'}  src="/images/Main2/esMain/four-img-section/two.jpg"/>
        </div>
        <div className={'top-img-wrap item3'} ref={AniRefs[2]}>
          <img className={'four-img four-img-three'} src="/images/Main2/esMain/four-img-section/three.png"/>
        </div>
        <div className={'top-img-wrap item4'} ref={AniRefs[3]}>
          <img className={'four-img four-img-four'} src="/images/Main2/esMain/four-img-section/four.png"/>
        </div>
      </div>
    </section>

  )
}