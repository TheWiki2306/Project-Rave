import React from 'react'
import './liveEvent.css';
import Image2 from '../../assets/images/rave_pic8.jpg';
import Image3 from '../../assets/images/rave_pic5.jpg';
import AfroImg from '../../assets/images/afronation.jpg';
import { FaGreaterThan } from 'react-icons/fa';

const LiveEvent = () => {
    return (
        <section>
            <div className="container live__container">
                <div className="live__container-flex">
                    <img src={AfroImg} alt="Afronation live" />
                    <div className="container-wrap">
                        <h4>AFRONATION</h4>
                        <small>is now live!</small>
                        <p>Portugal</p>
                    </div>
                </div>
                <small className='date'>
                    Wed Aug 18 - 11:00 PM
                </small>

                <div className="container__over">
                    <div className='over__images'>
                        <img src={Image2} alt="" className='img1' />
                        <img src={Image3} alt="" className='img2' />
                    </div>
                    <small>+12 friends going</small>
                </div>
                <FaGreaterThan className='greater__than' />
            </div>
        </section>

    )
}

export default LiveEvent;
