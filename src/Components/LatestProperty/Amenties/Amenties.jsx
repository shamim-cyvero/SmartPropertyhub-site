import React from 'react'
import './amenties.css'
import pic from '../../../Assets/parking.png'
import pic2 from '../../../Assets/firestation.png'
import pic3 from '../../../Assets/firesystem.png'
import pic4 from '../../../Assets/officespace.png'
import pic5 from '../../../Assets/ssystem.png'
import pic6 from '../../../Assets/elevator.png'

const Amenties = () => {
  return (
    <>
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 600 }}
      >
        <h1 className="mb-3" style={{ color: "#0E2E50", fontWeight: "700", fontSize: "2.5rem" }}>AMENITIES</h1>
      </div>

      <div className="Container amentiesSection mb-5">

        <div className="amentiesGallery">
          <img src={pic} alt="pic" className='mb-1'/>
          <p>Multi-level parking with <br />
            2000 vehicle capacity</p>
        </div>

        <div className="amentiesGallery">
          <img src={pic2} alt="pic2" className='mb-1'/>
          <p>Excellent fire and other <br />
            emergency response provision</p>
        </div>

        <div className="amentiesGallery">
          <img src={pic3} alt="pic3" className='mb-1'/>
          <p>Advanced safety features with <br />
            modern fire detection system</p>
        </div>

        <div className="amentiesGallery">
          <img src={pic4} alt="pic4"className='mb-1' />
          <p>Accessible Public <br />
            Restrooms</p>
        </div>

        <div className="amentiesGallery">
          <img src={pic5} alt="pic5" className='mb-1'/>
          <p>High speed <br />
            elevators</p>
        </div>

        <div className="amentiesGallery">
          <img src={pic6} alt="pic6" className='mb-1'/>
          <p>Advanced Multilevel <br />
            Security System</p>
        </div>

      </div></>
  )
}

export default Amenties