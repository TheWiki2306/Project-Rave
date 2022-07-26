import React from 'react';
import './featuredEvents.css';
import Im1 from '../../assets/images/burna.jpg'
import Im2 from '../../assets/images/wizkid_pic.jpg'
import Im3 from '../../assets/images/Ag.jpg'


const FeaturedEvents = () => {
    return (
        <section>
            <div className="container featured__container">
                <div className="feature__container-flex">
                    <h4>Featured Events</h4>
                    <small>All <FeaturedEvents /></small>
                </div>

                <div className="featured__container-images">
                    <img src="Im1" alt="" />
                    <img src="Im1" alt="" />
                    <img src="Im1" alt="" />
                </div>
            </div>
        </section>
    )
}

export default FeaturedEvents;
