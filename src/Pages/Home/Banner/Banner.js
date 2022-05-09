import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

import banner1 from '../../../images/banner/banner-1.jpg'
import banner2 from '../../../images/banner/banner-2.jpg'
import banner3 from '../../../images/banner/banner-3.jpg'

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                />
                <Carousel.Caption className='slider-1'>
                    <h3 className='text-warning'>PERSONAL <br></br> TRAINING</h3>
                    <p className='fw-bold'>Premium weight loss and lifestyle transformations<br></br> which create long lasting, dramatic results to your<br></br> health, body & mind.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                />

                <Carousel.Caption className='slider-2'>
                    <h3>Take Your Fitness <br></br> <span className='text-warning'>​To The Next Level</span></h3>
                    <p className='fw-bold'>This is a private personal training studio in Dhaka <br></br>
                        who help busy men and women stop "trying to get in shape".<br></br>
                        and finally achieve a health and body transformation they won't rebound from...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                />

                <Carousel.Caption className='slider-3'>
                    <h3 className='text-warning'>GET A COACH. <br></br>
                        GET CONSISTENT. <br></br>
                        GET RESULT
                    </h3>
                    <p className='fw-bold'>
                        I’ve helped hundreds of people to improve their relationship <br></br> with food and their bodies. But more than that, <br></br>they've extended their lives and put the spark back into their training.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Banner;