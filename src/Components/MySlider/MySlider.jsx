import React from 'react';
import './MySlider.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import pic from '../../Assets/green-cliffs-viewing.jpg';
import pic2 from '../../Assets/home4.jpg';
import pic3 from '../../Assets/home5.jpg';
import { Link } from 'react-router-dom';
import GetData from './GetData';

const MySlider = () => {
  // const handleSlideClick = () => {
  //   window.location.href = '/GetData';
  // };

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
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      name: 'Goyal Floors 1',
      description: '2,3,4 BHK Apartments',
      add: 'Sector 15 Dwarka,south West Delhi,New Delhi',
      price: '28.0 L-90.0 L',
      img: pic,
    },
    {
      name: 'Apartment Floors 1',
      description: '2,3,4 BHK Apartments',
      add: 'Okhla ,New Delhi',
      price: '28.0 L-90.0 L',
      img: pic2,
    },
    {
      name: 'Grand Floors 1',
      description: '2,3,4 BHK Apartments',
      add: 'Noida sector 63 ',
      price: '28.0 L-90.0 L',
      img: pic3,
    },
    {
      name: 'Goyal Floors 1',
      description: '2,3,4 BHK Apartments',
      add: ' Greator noida west',
      price: '28.0 L-90.0 L',
      img: pic,
    },
    {
      name: 'Goyal Floors 1',
      description: '2,3,4 BHK Apartments',
      add: 'Sector 55 Dwarka,south East Delhi,New Delhi',
      price: '28.0 L-90.0 L',
      img: pic,
    },
  ];

  return (
    <>
      <div className="casousal mb-5">
        <h2>Carousel</h2>
        <Slider {...settings}>
          {data.map((item, index) => (
            <Link
              key={index}
              to={{
                pathname: `/getdata/${index}`,
                state: { imageDetails: item },
              }}
            >
              <div className="main-box">
                <div className="img-box">
                  <img src={item.img} alt={item.name} />
                </div>

                <div className="content">
                  <div className="title">
                    <h1>{item.name}</h1>
                  </div>
                  <div className="sub-title">
                    <small>{item.description}</small>
                    <h4>{item.add}</h4>
                    <h3>Rs.{item.price}</h3>
                  </div>

                  <button>Contact</button>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default MySlider;
