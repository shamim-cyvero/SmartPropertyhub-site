import React from 'react'

const SikkaItem = ({ image, description }) => {
  return (
    <>


      <div className="SikkaFloor">
        <img src={image} alt={description} />
        <p>{description}</p>
      </div>


    </>
  )
}

export default SikkaItem