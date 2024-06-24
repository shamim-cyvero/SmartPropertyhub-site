import React from 'react'
import './Price.css'


const Price = ({price,price2}) => {
    return (
        <>
            <div id="floor" className="team-box">
                <div className="container">
                    <div
                        className="text-center mx-auto mb-5 wow fadeInUp"
                        data-wow-delay="0.1s"
                        style={{ maxWidth: 600 }}
                    >
                        <h1 className="mb-3" style={{ color: "#0E2E50", fontWeight: "700", fontSize: "2.5rem" }}> Price List</h1>
                        {/* <p style={{ color: "grey", fontSize: ".9rem" }}>
                            The open layout seamlessly connects the kitchen to the living area, creating an inviting atmosphere for hosting dinner parties or casual get-togethers.
                        </p> */}
                    </div>
                    <div className="row">
                        <div className="col-md-6 ">
                            <ul className="popup-gallery clearfix">
                                <a href="/Img/price1.png">
                                    <div className="our-team">
                                        <div className="pic">
                                            <img
                                                src={price}
                                                alt="price"
                                                style={{ width:"100%" }}
                                            />
                                        </div>
                                    </div>
                                </a>
                            </ul>
                        </div>
                        <div className="col-md-6 ">
                            <ul className="popup-gallery clearfix">
                            <a href="Img/price2.png">
                                    <div className="our-team">
                                        <div className="pic">
                                            <img
                                                src={price2}
                                                alt="price2"
                                                style={{ width:"100%" }}
                                            />
                                        </div>
                                        
                                    </div>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Price