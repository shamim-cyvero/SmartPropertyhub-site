import React from 'react'
import pic from '../../Assets/home11.jpg'
import './About.css'
import { FaCheck } from "react-icons/fa";
import { Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
const About = ({title,description,points,siteLink,image,index}) => {
    const navigate=useNavigate()
    return (
        <>
            <div className="container-xxl py-5">
                <div className="container"  >
                    <div className="row g-5 align-items-center" style={{display:'flex',flexDirection:index%2===0?'row-reverse':'row'}}>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img position-relative overflow-hidden p-5 pe-0">
                                <img className="img-fluid w-100" src={image} alt='image'/>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h1 className="mb-4" style={{ color: "#0E2E50", fontWeight: "700", fontSize: "2.5rem" }}>{title}</h1>
                            <p className="mb-4" style={{ color: "grey", fontSize: ".9rem" }}>
                               {description}
                            </p>
                            {
                                points && points.map((item)=>(
                                    <p key={item} style={{ color: "grey", fontSize: ".9rem",display:"flex",alignItems:'center' }}>
                                        <FaCheck style={{marginRight:"8px",color: "#00B98E"}}/>
                                        {item}
                                    </p>
                                ))
                            }
                   
                            <Button onClick={()=>navigate(siteLink)} _hover={{bgColor:'#00B66E'}} bgColor={'#00B98E'} color={'white'}  children={'Read More'} />

                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About