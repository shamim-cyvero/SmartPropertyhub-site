import React from 'react';
import './Brand.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import brand1 from '../../../Assets/brand1.jpg';
import brand2 from '../../../Assets/brand2.png';
import brand3 from '../../../Assets/brand3.jpg';
import brand4 from '../../../Assets/brand4.jpg';
import brand5 from '../../../Assets/brand5.png';
import brand6 from '../../../Assets/brand6.png';
import brand7 from '../../../Assets/brand7.png';

const Brand = ({id}) => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    const brandImages = [
        brand1,
        brand2,
        brand3,
        brand4,
        brand5,
        brand6,
        brand7
    ];

    return (
        <>
            <div
                className="text-center mx-auto mb-5 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ maxWidth: 600 }}
                id={id}
            >
                <h1 className="mb-3" style={{ color: "#0E2E50", fontWeight: "700", fontSize: "2.5rem" }}>BRANDS AT LONDON MART</h1>
            </div>

            <div className="slider-container border">
                <Slider {...settings}>
                    {brandImages.map((image, index) => (
                        <div className='brnd' key={index}>
                            <img src={image} alt={`Brand ${index + 1}`} width="100%" />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default Brand;
