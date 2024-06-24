import axios from 'axios';
import React, { useState } from 'react'
import { MdCall} from "react-icons/md";
import { server } from '../..';
import { useToast } from '@chakra-ui/react';
// import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
  const [name,setName]=useState('')
  const [phone,setPhone]=useState()
  const [email,setEmail]=useState()
  const [message,setMessage]=useState()

  const toast = useToast()

  const contactHandler=async (e)=>{
    e.preventDefault()
    try {
      
      if(phone.length===10){
  
        const {data}= await axios.post(`${server}/contact`,
          {phone,name,email,message},
          {
            headers:{
              "Content-Type":"Application/json"
            },
            withCredentials:true
          }
        )
          setName('')
          setPhone('')
          setEmail('')
          setMessage('')
        
          toast({
            title: data.message,
            description: "Agent reach out soon",
            status: 'success',
            duration: 6000,
            isClosable: true,
          })
        
      }else{
        return alert('Phone Number is not valid')
  
      }
     
    } catch (error) {
      console.log(error)
    }

}
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <h1 className="mb-3" style={{ color: "#0E2E50", fontWeight: "700", fontSize: "2.5rem" }}>Contact Us</h1>
            <p style={{ color: "grey", fontSize: ".9rem" }}>
            Get in Touch with Us - Your Dream Home Awaits! Our dedicated team is ready to help you find the 
            perfect property. Contact us today and let's make your real estate dreams a reality
            </p>
          </div>
          <div className="row g-4">
            <div className="col-12" style={{ color: "grey", fontSize: "1rem" }}>
              <div className="row gy-4">
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.1s">
                  <div className="bg-light rounded p-3">
                    <div
                      className="d-flex align-items-center bg-white rounded p-3"
                      style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                    >
                      <div className="icon me-1" >
                      <MdCall style={{width:"25px",height:"25px",color:"#00B98E"}}/>
                      </div>
                      <span>123 Street, New York, USA</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.3s">
                  <div className="bg-light rounded p-3">
                    <div
                      className="d-flex align-items-center bg-white rounded p-3"
                      style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                    >
                      <div className="icon me-1">
                      <MdCall style={{width:"25px",height:"25px",color:"#00B98E"}}/>
                      </div>
                      <span>info@cyverotechnologies.com</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay="0.5s">
                  <div className="bg-light rounded p-3">
                    <div
                      className="d-flex align-items-center bg-white rounded p-3"
                      style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                    >
                      <div className="icon me-1">
                      <MdCall style={{width:"25px",height:"25px",color:"#00B98E"}}/>
                      </div>
                      <span>+012 345 6789</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <iframe
                className="position-relative rounded w-100 h-100"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameBorder={0}
                style={{ minHeight: 400, border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex={0}
              />
            </div>
            <div className="col-md-6">
              <div className="wow fadeInUp" data-wow-delay="0.5s">
                <p className="mb-4" style={{ color: "grey", fontSize: ".9rem" }}>
                Unlock Your Dream Home - Reach Out to Us Today! Our expert team is here to assist you with all your
                 real estate needs. Let's start your journey to finding the perfect property togethe
                </p>
                <form onSubmit={contactHandler} style={{ color: "grey", fontSize: ".9rem" }}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="Your Name"
                          required value={name} onChange={(e)=>setName(e.target.value)}
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          placeholder="Your Email"
                          required value={email} onChange={(e)=>setEmail(e.target.value)}
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="number"
                          className="form-control"
                          id="subject"
                          placeholder="Subject"
                          required value={phone} onChange={(e)=>setPhone(e.target.value)}
                          
                        />
                        <label htmlFor="subject">Phone</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: 150 }}
                          defaultValue={""}
                          required value={message} onChange={(e)=>setMessage(e.target.value)}

                        />
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <button  className="btn propertybtn w-100 py-3" type="submit" style={{color:'white'}}>
                        Send Message
                      </button> 
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact