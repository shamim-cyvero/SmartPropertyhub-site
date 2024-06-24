import React from 'react'
import './TopSlider.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import pic from '../../Assets/home11.jpg'
import pic2 from '../../Assets/Home.jpg'
import pic3 from '../../Assets/home4.jpg'
import Carousel from 'react-bootstrap/Carousel';

const TopSlider = () => {

    return (
        <>
            <Carousel>
                <Carousel.Item interval={1000}>
                    <div style={{ width: "500%", height: "100vh" }}>
                        <img src={pic} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <div style={{ width: "100%", height: "100vh" }}>
                        <img src={pic2} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div style={{ width: "100%", height: "100vh" }}>
                        <img src={pic3} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                </Carousel.Item>
            </Carousel>


        </>
    )
}

export default TopSlider