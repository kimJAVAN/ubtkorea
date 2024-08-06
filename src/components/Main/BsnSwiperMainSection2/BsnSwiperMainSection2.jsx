import "./bsn-swiperMain-section2.css"
import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, Controller,Parallax,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/parallax';
import 'swiper/css/pagination';

const BsnSwiperMainSection2 = () => {
    const mainSwiperData =[
        {imgUrl : '/images/Main/bsn-swiperMain-section/1.jpg',},
        {imgUrl : '/images/Main/bsn-swiperMain-section/2.jpg',},
        {imgUrl : '/images/Main/bsn-swiperMain-section/5.png',},
        {imgUrl : '/images/Main/bsn-swiperMain-section/4.jpg',},
    ]
    return (
        <>
            <section className="bsn-swiperMain-section2">
                <div className="bsn-swiperMain-inner">
                    <Swiper
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={1}
                        speed={1000}
                        spaceBetween={0}
                        loop={true}
                        parallax={true}
                        className="bsn-swiperMain-swiper"
                        pagination={{
                            clickable: true,
                            renderBullet: (index, className) => {
                                return `<span class="${className}"><img src="/images/Main/bsn-swiperMain-section/${index + 1}.jpg" alt="pagination-icon"/></span>`;
                            }
                        }}
                        modules={[Autoplay, Controller,Parallax,Pagination]}
                    >
                        {mainSwiperData.map((data,idx)=>{
                            return(
                                <SwiperSlide className={`bsn-swiperMain-slide`} key={idx}>
                                    <div className={`bsn-swiperMain-slideWrap`} data-swiper-parallax="100%">
                                        <div className="bsn-swiperMain-imgWrap">
                                            <img src={data.imgUrl} alt="main-img"/>
                                        </div>
                                        <div className="bsn-swiperMain-top">
                                            <p>BSN CONSTRUCTION</p>
                                            <p className={`bsn-swiperMain-top-flex`}><span>BSN GROUP</span><span>BUILDING</span><span>REMODELING</span></p>
                                        </div>
                                        <div className="bsn-swiperMain-text">
                                            <p>
                                                중소형빌딩 전문가 BSN그룹입니다. 우리는 건물을 사용하는 <br/>
                                                사람들의 감정과 경험을 고려하여 공간을 디자인하고 <br/>
                                                사용자에게 의미와 기억을 전달합니다.
                                            </p>
                                        </div>
                                    </div>

                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>

            </section>
        </>
    )
}

export default BsnSwiperMainSection2;