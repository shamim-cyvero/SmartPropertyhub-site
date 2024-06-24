import React from 'react';
// import './Brand.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import flatLayout1 from '../../../../Assets/Elite/flatLayout1.jpg'
import flatLayout2 from '../../../../Assets/Elite/flatLayout2.jpg'
import flatLayout3 from '../../../../Assets/Elite/flatLayout3.jpg'
import flatLayout4 from '../../../../Assets/Elite/flatLayout4.jpg'
import flatLayout5 from '../../../../Assets/Elite/flatLayout5.jpg'
import flatLayout6 from '../../../../Assets/Elite/flatLayout6.jpg'
import flatLayout7 from '../../../../Assets/Elite/flatLayout7.jpg'
import flatLayout8 from '../../../../Assets/Elite/flatLayout8.jpg'
import flatLayout9 from '../../../../Assets/Elite/flatLayout9.jpg'
import flatLayout10 from '../../../../Assets/Elite/flatLayout10.jpg'
import flatLayout11 from '../../../../Assets/Elite/flatLayout11.jpg'


const FlatLayout = ({brandImages,id}) => {
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

    // const brandImages = [
    //     flatLayout1,
    //     flatLayout2,
    //     flatLayout3,
    //     flatLayout4,
    //     flatLayout5,
    //     flatLayout6,
    //     flatLayout7,
    //     flatLayout8,
    //     flatLayout9,
    //     flatLayout10,
    //     flatLayout11
    // ];

    return (
        <>
            <div
                className="text-center mx-auto mb-5 wow fadeInUp"
                data-wow-delay="0.1s"
                style={{ maxWidth: 600 ,margin:'2.5vmax 0'}}
                id={id}
            >
                <h1 className="mb-3" style={{ color: "#0E2E50", fontWeight: "700", fontSize: "2.5rem" }}>Flat Layout</h1>
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

export default FlatLayout;
