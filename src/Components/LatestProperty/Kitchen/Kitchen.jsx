import React from 'react'
import pic from '../../../Assets/home6.jpg'
import pic2 from '../../../Assets/home7.jpg'
import './Kitchen.css'

const Kitchen = () => {
  return (
    <>
    <div className="container-xxl py-5">
        <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
        >
            <h1 className="mb-3" style={{ color: "#0E2E50", fontWeight: "700", fontSize: "2.5rem" }}>Kitchen Apartment</h1>
            <p style={{ color: "grey", fontSize: ".9rem" }}>
                The open layout seamlessly connects the kitchen to the living area, creating an inviting atmosphere for hosting dinner parties or casual get-togethers.
            </p>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-md-6 mb-3">
                    <div className="img-container" style={{ width: "100%" }}>
                        <img src={pic} alt="" width="100%" className="img-hover" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="img-container" style={{ width: "100%" }}>
                        <img src={pic2} alt="" width="100%" className="img-hover" />
                    </div>
                </div>
            </div>
        </div>
    </div>

</>
  )
}

export default Kitchen