import "./three-merit-section.css"
import {useState} from "react";

export default function ThreeMeritSection() {
    const serviceData = [
        {
            title: "프렌차이즈 건설업",
            desc: "프렌차이즈 건설업으로 피자먹다, 카페 보스, <br/> 에그박스, 꿀마니 닭강정 등이 있습니다.",
            img: "/images/Main2/esMain/three-merit-section/1.png",
            video: "/images/Main2/esMain/three-merit-section/2-1.mp4",
            link:'/pro_s1'
        },
        {
            title: "복지/폐쇄몰 온라인 마켓",
            desc: "복지/ 폐쇄물 온라인 마켓으로 네이버,<br/>쿠팡, 11번가, 현대백화점, 기업은행 임직원몰 등이 있습니다.",
            img: "/images/Main2/esMain/three-merit-section/2.png",
            video: "/images/Main2/esMain/three-merit-section/2-2.mp4",
            link:'/pro_x10'
        },
        {
            title: "리퍼, 오프라인 매장 수출",
            desc: "리퍼, 오프라인 매장 수출라인 보유함으로<br/>리퍼 업체 리퍼프렌즈 및 해외 업체 수출 관련하여<br/>진행하고 있습니다.",
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
                    다양한 종류의 유통채널 보유
                </div>
            </div>
        </div>
    )
}