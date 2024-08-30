import "./MoveChangeText.css";
import { useEffect } from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
import gsap from "gsap";

const MoveChangeText = () => {

    useEffect(() => {
        const units = document.querySelectorAll('.move-bottom-unit');

        units.forEach(unit => {
            const textElement = unit.querySelector('.move-front-text');
            textElement.style.top = '50%'; // 기본 위치 설정

            const handleMouseMove = (event) => {
                const rect = unit.getBoundingClientRect();
                const mouseY = event.clientY - rect.top;
                const unitHeight = rect.height;

                // 20% ~ 80% 사이로 top 값을 계산
                const minTop = 15; // percentage
                const maxTop = 85; // percentage

                const percentage = ((mouseY / unitHeight) * 100);
                const limitedTop = Math.min(Math.max(percentage, minTop), maxTop);

                textElement.style.top = `${limitedTop}%`;
            };

            const handleMouseLeave = () => {
                textElement.style.top = '50%'; // 마우스가 나가면 기본 위치로 복원
            };

            unit.addEventListener('mousemove', handleMouseMove);
            unit.addEventListener('mouseleave', handleMouseLeave);

            return () => {
                unit.removeEventListener('mousemove', handleMouseMove);
                unit.removeEventListener('mouseleave', handleMouseLeave);
            };
        });

        gsap.to('.move-change-text', {
            scrollTrigger: {
                trigger: '.move-change-text',
                start: "top center",
                end: "top center",
                scrub: 0,
                // markers : true,
                onEnter : (()=>{
                    document.querySelector('.move-change-text').classList.add('active')
                }),
                onLeaveBack : (()=>{
                    document.querySelector('.move-change-text').classList.remove('active')
                })
            },
        })

        const paragraphs = document.querySelectorAll('.move-change-text .move-main-title > p');

        paragraphs.forEach((p, index) => {
            const additionalDelay = 0.1 * index;
            p.style.animationDelay = `${additionalDelay}s`;
        });

    }, []);

    return (
        <section className={`move-change-text`}>
            <div className="move-change-inner">
                <div className={'move-top-title'}>
                    <p className={'move-top-mini-text'}>MAIN PRODUCTS</p>
                    <div className={'move-main-title'}>
                        <p>알려지지</p>
                        <p>않은</p>
                        <p>아름다움으로</p>
                        {/* <p>확인하시면</p> */}
                    </div>
                    <div className={'move-main-title'}>

                        <p>삶을</p>
                        <p>바꾸는</p>
                        <p>우리의</p>
                        <p>제품</p>
                        {/* <p>됩니다</p> */}
                    </div>
                </div>
                <div className={'move-bottom-context-wrapper'}>
                    <div className={'move-bottom-unit'}>
                        <div className={'move-front-text'}>
                            <p>A01</p>
                            <p>Product</p>
                            <p><MdOutlineArrowOutward/></p>
                        </div>
                        <div className={'move-bottom-img-wrapper'}>
                            <img
                                src={'/move-change-text/1.png'}/>
                        </div>
                    </div>
                    <div className={'move-bottom-unit'}>
                        <div className={'move-front-text'}>
                            <p>A02</p>
                            <p>Product</p>
                            <p><MdOutlineArrowOutward/></p>
                        </div>
                        <div className={'move-bottom-img-wrapper'}>
                            <img
                                src={'/move-change-text/2.png'}/>
                        </div>
                    </div>
                    <div className={'move-bottom-unit'}>
                        <div className={'move-front-text'}>
                            <p>A03</p>
                            <p>Product</p>
                            <p><MdOutlineArrowOutward/></p>
                        </div>
                        <div className={'move-bottom-img-wrapper'}>
                            <img
                                src={'/move-change-text/3.png'}/>
                        </div>
                    </div>
                    <div className={'move-bottom-unit'}>
                        <div className={'move-front-text'}>
                            <p>A04</p>
                            <p>Product</p>
                            <p><MdOutlineArrowOutward/></p>
                        </div>
                        <div className={'move-bottom-img-wrapper'}>
                            <img
                                src={'/move-change-text/4.png'}/>
                        </div>
                    </div>
                    <div className={'move-bottom-unit'}>
                        <div className={'move-front-text'}>
                            <p>A05</p>
                            <p>Product</p>
                            <p><MdOutlineArrowOutward/></p>
                        </div>
                        <div className={'move-bottom-img-wrapper'}>
                            <img
                                src={'/move-change-text/5.png'}/>
                        </div>
                    </div>
                    <div className={'move-bottom-unit'}>
                        <div className={'move-front-text'}>
                            <p>A06</p>
                            <p>Product</p>
                            <p><MdOutlineArrowOutward/></p>
                        </div>
                        <div className={'move-bottom-img-wrapper'}>
                            <img
                                src={'/move-change-text/6.png'}/>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default MoveChangeText;
