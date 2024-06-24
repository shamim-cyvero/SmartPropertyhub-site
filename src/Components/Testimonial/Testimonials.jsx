import React from 'react'
import './Testimonial.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import pic from '../../Assets/testimonial-1.jpg';
import pic2 from '../../Assets/testimonial-2.jpg';
import pic3 from '../../Assets/testimonial-3.jpg';

const Testimonials = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const data = [
        {
            name: "client name",
            description: "Eirmod sed ipsum dolor sit rebum labore magna erat Tempor ut dolore lorem kasd vero ipsum sit eirmod sit Ipsum diam justo sed rebum vero dolor duo",
            img: pic,
            desti:"professional"
        },
        {
            name: "client name",
            description: "Eirmod sed ipsum dolor sit rebum labore magna erat Tempor ut dolore lorem kasd vero ipsum sit eirmod sit Ipsum diam justo sed rebum vero dolor duo",
            img: pic2,
            desti:"professional"
        },
        {
            name: "client name",
            description: "Eirmod sed ipsum dolor sit rebum labore magna erat Tempor ut dolore lorem kasd vero ipsum sit eirmod sit Ipsum diam justo sed rebum vero dolor duo",
             img: pic3,
             desti:"professional"
        },
        {
            name: "client name",
            description: "Eirmod sed ipsum dolor sit rebum labore magna erat Tempor ut dolore lorem kasd vero ipsum sit eirmod sit Ipsum diam justo sed rebum vero dolor duo",
            img: pic,
            desti:"professional"
            
        },
        {
            name: "client name",
            description: "Eirmod sed ipsum dolor sit rebum labore magna erat Tempor ut dolore lorem kasd vero ipsum sit eirmod sit Ipsum diam justo sed rebum vero dolor duo",
            img: pic,
            desti:"professional"
        }
    ];
    return (
        <>
            <div className="Casousal">
                <div
                    className="text-center mx-auto mb-5 wow fadeInUp"
                    data-wow-delay="0.1s"
                    style={{ maxWidth: 600 }}
                >
                    <h1 className="mb-3" style={{color:"#0E2E50"}}>Our Clients Say!</h1>
                    <p style={{color:"grey",fontSize:".9rem"}}>
                        Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
                        lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero
                        dolor duo.
                    </p>
                </div>
                <Slider {...settings}>
                    {
                        data.map((item) => (
                            <div class="MainBox">

                                <div class="Content">
                                    <div class="subTitle">
                                        <p>
                                            {item.description}</p>
                                    </div>
                                    <div className="caraousalImgSection">
                                        <img src={pic} alt="" />

                                        <div className="caption">
                                            <h5>{item.name}</h5>
                                            <small>{item.desti}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }




                </Slider>
            </div>
        </>
    )
}

export default Testimonials