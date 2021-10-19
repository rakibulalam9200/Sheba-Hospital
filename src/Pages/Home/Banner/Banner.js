import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner1.png'
import banner2 from '../../../images/banner2.png'
import banner3 from '../../../images/banner3.png'

const Banner = () => {
    return (
        <div>
            <Carousel className= "h-50"  variant="dark">
                <Carousel.Item interval={1000}>
                    <img
                    className="d-block w-100"
                    src={banner1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Committed to Health Serivce</h3>
                    <p>Our Experts Doctors and Nurses try to best effore to cure the patient.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={500}>
                    <img
                    className="d-block w-100"
                    src={banner2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h3>Varity in Healthy Service</h3>
                    <p>Our Doctors try to different approaches to serve the optimal solution to patient.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={banner3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h3>Vision to create Healthy World</h3>
                    <p>We help people to spread happies and health awareness among the people.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            
        </div>
    );
};

export default Banner;