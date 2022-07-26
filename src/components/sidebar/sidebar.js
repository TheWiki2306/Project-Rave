import React from 'react';
import './sidebar.css'
import Image1 from '../../assets/images/artiste_pic1.jpg';
import Image2 from '../../assets/images/rave_pic8.jpg';
import Image3 from '../../assets/images/rave_pic5.jpg';
import Image4 from '../../assets/images/rave_pic7.jpg'
import Image5 from '../../assets/images/rave_pic9.jpg'
import Image6 from '../../assets/images/rave_pic3.jpg'
import Image7 from '../../assets/images/rema.jpg';
import { FaGreaterThan } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { AiOutlineDownload } from 'react-icons/ai'
import { GoPrimitiveDot } from 'react-icons/go';
import { AiOutlineCalendar } from 'react-icons/ai'
import { BiHeart } from 'react-icons/bi'

const Sidebar = () => {
    return (
        <section>
            <div className="container sidebar__container">
                <div className="box__container">
                    <img src={Image1} alt="The 21st party" />
                    <small>Aug 21</small>
                    <a href="https://youtube.com"><FaYoutube className='youtube_icon' /></a>
                    <p>20% off</p>
                </div>
                <div className="sidebar-sub">
                    <div className='over__images'>
                        <img src={Image2} alt="" className='img1' />
                        <img src={Image3} alt="" className='img2' />
                    </div>
                    <small>+12 friends going</small>
                </div>


                <div className="sidebar__people">
                    <div className="dates">
                        <ul className='date'>
                            <li className='item1'>Aug21 - Aug23</li>
                            <li className='item2'>Aug21 - Aug23</li>
                            <li className='item3'>Aug21 - Aug23</li>
                            <li className='item4'>Aug21 - Aug23</li>
                            <li className='item5'>Sold Out</li>
                            <li className='item6'>20% Off</li>
                        </ul>
                    </div>

                    <div className="people__going">
                        <div className="text__images">
                            <div className="over__images">
                                <img src={Image3} alt="raver" className='img3' />
                                <img src={Image5} alt="raver" className='img4' />
                                <img src={Image6} alt="raver" className='img5' />
                            </div>
                            <div className="over__text">
                                <h5>235+</h5>
                                <small>People going</small>
                            </div>
                        </div>
                        <div className="people__going-account">
                            <img src={Image4} alt="personal account" />
                            <p>Account</p>
                        </div>

                        <p className='going'>
                            I'm Going
                        </p>
                    </div>
                </div>

                <div className="dates__list">
                    <small className='date__list1'>17</small>
                    <small className='date__list2'>18</small>
                    <small className='date__list3'>19</small>
                    <small className='date__list4'>20<GoPrimitiveDot className='Dot' /></small>
                    <small className='date__list3'>21</small>

                </div>

                <div className="already__booked">
                    <img src={Image7} alt="Rema" />
                    <h4>REMA</h4>
                    <small>Marquinox NightClub<GoPrimitiveDot className='dot' />South Africa<GoPrimitiveDot className='dot' />After Hours</small>
                    <div className="already__booked-date">
                        <AiOutlineCalendar className='calender' />
                        <small>Friday April 20 - 11:00 PM</small>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Sidebar;
