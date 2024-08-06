import "./three-merit-section.css"
import {useState} from "react";

export default function ThreeMeritSection() {
    const serviceData = [
        {
            title: "인공지능 딥러닝",
            desc: "인공지능 딥러닝에 관련한 자세한\n" +
                "제품 설명이 들어갈 예정입니다.",
            img: "/images/Main2/esMain/three-merit-section/1.png",
            video: "/images/Main2/esMain/three-merit-section/2-1.mp4",
            link:'/pro_s1'
        },
        {
            title: "레이저 센서",
            desc: "레이저 센서에 관련한 자세한\n" +
                "제품 설명이 들어갈 예정입니다.",
            img: "/images/Main2/esMain/three-merit-section/2.png",
            video: "/images/Main2/esMain/three-merit-section/2-2.mp4",
            link:'/pro_x10'
        },
        {
            title: "인공지능 영역 설정",
            desc: "인공지능 영역 설정에 관련한 자세한\n" +
                "제품 설명이 들어갈 예정입니다.",
            img: "/images/Main2/esMain/three-merit-section/3.png",
            video: "/images/Main2/esMain/three-merit-section/2-3.mp4",
            link:'/'
        },
    ];
    const [activeIndex, setActiveIndex] = useState(null);
    const handleButtonClick = (idx) => {
        setActiveIndex(idx === activeIndex ? null : idx);
    };
    const handleMouseEnter = (idx) => {
        setActiveIndex(idx);
    };

    const handleMouseLeave = () => {
        setActiveIndex(null);
    };

    return (
        <div className="three-merit-section">
            <div className="three-merit-section-container">
                <div className="three-merit-section-wrap">
                    {serviceData.map((data, idx) => (
                        <div className={`three-merit-section-content ${activeIndex === idx ? 'active' : ''}`} key={idx}
                             onMouseEnter={() => handleMouseEnter(idx)}
                             onMouseLeave={() => handleMouseLeave(idx)}
                        >
                            <div className="three-merit-section-content-img-wrap">
                                {activeIndex === idx ?
                                    // <video style={{background: '#000'}} src={data.video ?data.video:data.img2} muted autoPlay loop
                                    //        playsInline></video>
                                    data.video ? (
                                        <video style={{background: '#000'}} src={data.video} muted autoPlay loop playsInline></video>
                                    ) : (
                                        <img src={data.img2} alt="img" />
                                    )
                                    : <img src={data.img} alt="img" />
                                }
                            </div>
                            {activeIndex !== idx &&
                                <div className="three-merit-section-content-img-text-wrap">
                                    <div className="three-merit-section-content-img-title"
                                         dangerouslySetInnerHTML={{__html: data.title}}>
                                    </div>
                                    <div className="three-merit-section-content-img-desc"
                                         dangerouslySetInnerHTML={{__html: data.desc}}>
                                    </div>
                                </div>
                            }
                            {/*{activeIndex === idx &&*/}
                            {/*    <a href={data.link} className="three-merit-section-content-btn" onClick={() => handleButtonClick(idx)}>*/}
                            {/*        보러가기*/}
                            {/*    </a>}*/}

                        </div>
                    ))}
                </div>
                <div className="three-merit-section-title">
                    {/*세계 최초 올인원 스테이션 청소기*/}
                    세계 최고 회사의 드론 핵심 기술 네비게이션 알고리즘 탑재 <br/>
                    A.I 스마트 로봇청소기
                </div>
            </div>
        </div>
    )
}