import React from 'react';
import "./MomLastSection.css";
import MomWholeBtn from '../MomWholeBtn/MomWholeBtn';
import { FaArrowUp } from "react-icons/fa6";


const MomLastSection = () => {
    return (
        <section className='mom-last-section'>
            <div className="mom-last-container">

                <p className='mom-last-desc'>
                    Wanna work <br />
                    with us?
                </p>

                <h2 className='mom-last-title'>
                    Just get <br />
                    in touch!
                </h2>
                <div className='mom-last-button'>
                    <MomWholeBtn name={'Contact Us'} />
                </div>




            </div>
            <div className="mom-last-gotop">
                <div className='mom-last-whitebutton'>
                    <FaArrowUp />
                    <p>Top</p>
                </div>


                <div className="mom-last-bluebutton">
                    <FaArrowUp />
                    <p>Top</p>
                </div>
            </div>
        </section>
    );
};

export default MomLastSection;