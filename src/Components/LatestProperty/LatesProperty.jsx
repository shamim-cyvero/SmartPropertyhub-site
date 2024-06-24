// LatesProperty.js
import React from 'react';
import './LatestProperty.css';
// import { IoLocationSharp } from "react-icons/io";
// import { TbRulerMeasure } from "react-icons/tb";
import { FaBed, FaBath,FaLocationArrow } from "react-icons/fa";
import { HStack, Icon, Text } from '@chakra-ui/react';
import { MdLocationOn  } from "react-icons/md";
import { GiThermometerScale } from "react-icons/gi";
const LatesProperty = ({ properties }) => {
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="row g-0 gx-5 align-items-end">
                    <div className="col-lg-6">
                        <div className="text-start mx-auto mb-5 wow slideInLeft" data-wow-delay="0.1s">
                            <h1 className="mb-3" style={{ color: "#0E2E50", fontWeight: "700", fontSize: "2.5rem" }}>Our Property</h1>
                            {/* <p style={{ color: "grey", fontSize: ".9rem" }}>
                                Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore
                                lorem kasd vero ipsum sit eirmod sit diam justo sed rebum.
                            </p> */}
                        </div>
                    </div>
                    {/* <div className="col-lg-6 text-start text-lg-end wow slideInRight" data-wow-delay="0.1s">
                        <ul className="nav nav-pills d-inline-flex justify-content-end mb-5">
                            <li className="nav-item me-2">
                                <a className="btn propertybtn active" data-bs-toggle="pill" href="#tab-1">Featured</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="btn propertybtn" data-bs-toggle="pill" href="#tab-2">For Sell</a>
                            </li>
                            <li className="nav-item me-0">
                                <a className="btn propertybtn" data-bs-toggle="pill" href="#tab-3">For Rent</a>
                            </li>
                        </ul>
                    </div> */}
                </div>
                <div className="tab-content">
                    <div id="tab-1" className="tab-pane fade show p-0 active">
                        <div className="row g-4">
                            {properties.map((property, index) => (
                                <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                    <div className="property-item rounded overflow-hidden">
                                        <div className="position-relative overflow-hidden">
                                            <a href="">
                                                <img className="img-fluid" src={property.image} alt={property.image} />
                                            </a>
                                            <div className="rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3" style={{backgroundColor:"#00B66E"}}>
                                                {property.status}
                                            </div>
                                            {/* <div className="bg-white2 rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                                                {property.type}
                                            </div> */}
                                        </div>
                                        <div className="p-4 pb-0">
                                            <h5 className="mb-3 bg-white2">${property.price}</h5>
                                            <a className="d-block h5 mb-2" href="">
                                                {property.title}
                                            </a>
                                            <p style={{display:'flex',alignItems:"center",gap:"10px"}} className=''>
                                                <FaLocationArrow color='#00B98E' />
                                                {property.location}
                                            </p>
                                            {/* <HStack  alignItems={'center'} >
                                                <FaLocationArrow  color='#00B98E' />
                                                <Text children={`${property.location} `} />
                                            </HStack> */}
                                        </div>
                                        <HStack justifyContent={'space-around'} alignItems={'center'} >
                                            <small  className="flex-fill text-center border-end py-2" style={{display:'flex',alignItems:"center",justifyContent:"center",gap:"10px"}}>
                                                <FaLocationArrow color='#00B98E' />
                                                {property.size} Sqft
                                            </small>
                                            {/* <HStack justifyContent={'space-between'} alignItems={'center'} >
                                                <GiThermometerScale color='#00B98E' />
                                                <Icon as={FaLocationArrow} />
                                                <Text textAlign={'center'} children={`${property.size} Sqft`} />
                                            </HStack> */}
                                            {/* <HStack justifyContent={'space-between'} alignItems={'center'} >
                                                <FaBed color='#00B98E' />
                                                <Text children={`${property.bedrooms} Bed`} />
                                            </HStack>
                                            <HStack justifyContent={'space-between'} alignItems={'center'} >
                                                <FaBath color='#00B98E' />
                                                <Text children={`${property.bathrooms} Bath`} />
                                            </HStack> */}
                                            <small className="flex-fill text-center border-end py-2" style={{display:'flex',alignItems:"center",justifyContent:"center",gap:"10px"}}>
                                                <FaBed color='#00B98E' />{property.bedrooms} Bed
                                            </small>
                                            <small className="flex-fill text-center py-2" style={{display:'flex',alignItems:"center",justifyContent:"center",gap:"10px"}}>
                                                <FaBath color='#00B98E' />{property.bathrooms} Bath
                                            </small>
                                        </HStack>
                                    </div>
                                </div>
                            ))}
                            {/* <div className="col-12 text-center wow fadeInUp my-5" data-wow-delay="0.1s">
                                <a className="propertybtn py-3 px-5" href="">
                                    Browse More Property
                                </a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LatesProperty;
