import React from 'react'
import './BellaHigh.css'

import h1 from '../../../../Assets/eldeco/h1.png'
import h2 from '../../../../Assets/eldeco/h2.png'
import h3 from '../../../../Assets/eldeco/h3.png'
import h4 from '../../../../Assets/eldeco/h4.png'
import h5 from '../../../../Assets/eldeco/h5.png'

const BellaHigh = () => {
    return (
        <>
            <div className="bellaHighBg mt-5">
                <h1 className='text-center text-light'>Highlights</h1>
                <div className="Container amentiesSection mb-5 mt-5">
                  
            
                        <div className="bellhigh">
                            <img src={h1} alt="" className='mb-1' />
                            <p>All Weather Air Conditioning In All Rooms</p>
                        </div>
                    
                    <div className="bellhigh">
                        <img src={h2} alt="" className='mb-1' />
                        <p>9-Ft Entrance Door With Digital Lock</p>
                    </div>

                    <div className="bellhigh">
                        <img src={h3} alt="" className='mb-1' />
                        <p>Floor To Floor Height 11 Ft Height</p>
                    </div>

                    <div className="bellhigh">
                        <img src={h4} alt="" className='mb-1' />
                        <p>Double height air-conditioned lobby</p>
                    </div>

                    <div className="bellhigh">
                        <img src={h5} alt="" className='mb-1' />
                        <p>Rooftop swimming pool with loungers</p>
                    </div>

                    <div className="bellhigh">
                        <img src={h3} alt="" className='mb-1' />
                        <p>High street retail 9 kms</p>
                    </div>

                </div>
            </div >
        </>
    )
}

export default BellaHigh