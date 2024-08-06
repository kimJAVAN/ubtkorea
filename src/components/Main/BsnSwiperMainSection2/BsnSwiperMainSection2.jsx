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
        {imgUrl : '/images/Main/bsn-swiperMain-section/3.jpg',},
        // {imgUrl : '/images/Main/bsn-swiperMain-section/2.jpg',},
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
                                // Display only the first two pagination bullets
                                return `<span class="${className} "><img src="/images/Main/bsn-swiperMain-section/${index + 1}.jpg" alt="pagination-icon"/></span>`;

                                // if (index < 2) {
                                //     const bulletIndex = (index % 2); // Toggle between 0 and 1
                                //     console.log(bulletIndex)
                                //     return `<span class="${className} ${bulletIndex === 0 ? 'active' : ''}"><img src="/images/Main/bsn-swiperMain-section/${bulletIndex + 1}.jpg" alt="pagination-icon"/></span>`;
                                // } else {
                                //     return '';
                                // }
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
                                            <p>UBT KOREA</p>
                                            <p className={`bsn-swiperMain-top-flex`}><span>UNIDENTIFIED</span><span>BEAUTIFUL</span><span>THINGS</span></p>
                                        </div>
                                        <div className="bsn-swiperMain-text">
                                            <p>
                                                더 나은 더 합리적인 유통 전략을 고민하고 <br/>
                                                제품과 우리의 아름다움을 알려드리겠습니다.
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