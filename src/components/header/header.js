import React from 'react';
import './header.css'
import Img1 from '../../assets/images/burna.jpg'
import Img2 from '../../assets/images/wizkid_pic.jpg'
import Img3 from '../../assets/images/Ag.jpg'
import Img4 from '../../assets/images/davido.jpg'
import Img5 from '../../assets/images/tems.jpg'
import Img6 from '../../assets/images/fireboy1.jpg'
import { FaGreaterThan } from 'react-icons/fa';

const data = [
    {
        id: 1,
        image: Img1,
        name: 'Burnaboy'
    },
    {
        id: 2,
        image: Img2,
        name: 'Wizkid'
    },
    {
        id: 3,
        image: Img3,
        name: 'Ag Baby'
    },
    {
        id: 4,
        image: Img4,
        name: 'Davido'
    },
    {
        id: 5,
        image: Img5,
        name: 'Tems'
    },
    {
        id: 6,
        image: Img6,
        name: 'Fireboy'
    },
]

const Header = () => {
    return (
        <header>


            <div className='container header__container'>
                <div className="header__container-heading">
                    <h3>Artistes</h3>
                    <small>All <FaGreaterThan className='greater-than' /></small>
                </div>

                <div className="contain-container">
                    {
                        data.map(({ id, image, name }) => {
                            return (
                                <article key={id} className='header__container-container'>
                                    <div className="header__container-images">
                                        <img src={image} alt={name} />
                                    </div>
                                    <h4>{name}</h4>
                                </article>
                            )
                        })

                    }
                </div>
            </div>
        </header>
    )
}

export default Header;
