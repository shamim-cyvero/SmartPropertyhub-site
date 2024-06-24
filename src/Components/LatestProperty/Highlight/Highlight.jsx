import React from 'react'
import './Highlight.css'
import pic from '../../../Assets/highPic.jpg'
import { FaCheckCircle } from "react-icons/fa";

const Highlight = () => {
  return (
    <>
      <div style={{margin:"3vmax 0"}} className="container-fluid">
        <div className="highContainer">
          <div className="highImg ">
            <img src={pic} alt="" />
          </div>

          <div className="highContent">
            <h1 className='text-center mt-2' style={{color:"#00B98E"}}>HIGHLIGHTS</h1>

            <div className="highBox">
              <div className="highDetails">
                <div className="highPoint">
                  <p><FaCheckCircle color='#00B98E'/></p>
                  <p>1st Theme Based Retail High-Street, Premium Eateries, Food Court, Entertainment Zone, Multiplex and Banquet</p>
                </div>

                <div className="highPoint">
                  <p><FaCheckCircle color='#00B98E'/></p>
                  <p>Close proximity to the proposed Metro Station for Greater Noida West</p>
                </div>

                <div className="highPoint">
                  <p><FaCheckCircle color='#00B98E'/></p>
                  <p>Retail Shops with marquee ceiling upto 16 feet</p>
                </div>

              </div>

              <div className="highDetails">
                <div className="highPoint">
                  <p><FaCheckCircle color='#00B98E'/></p>
                  <p>Ideal demographics for higher footfall from 35 thousand families residing within the vicinity</p>
                </div>

                <div className="highPoint">
                  <p><FaCheckCircle color='#00B98E'/></p>
                  <p>Beautiful Landscaped Gardens and Water Bodies within the campus</p>
                </div>

                <div className="highPoint">
                  <p><FaCheckCircle color='#00B98E'/></p>
                  <p>Roof-top revolving resturant (360 degree panoramic view of Noida)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Highlight