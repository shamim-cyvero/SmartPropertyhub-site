import React from 'react';
import { useLocation } from 'react-router-dom';

const GetData = () => {
  const location = useLocation();
  const { imageDetails } = location.state;
  return (
    <>
      <div>
        <h1>{imageDetails.name}</h1>
        <img src={imageDetails.img} alt={imageDetails.name} />
        <p>{imageDetails.desc}</p>
        <p>{imageDetails.add}</p>
        <p>{imageDetails.price}</p>
      </div>
    </>
  );
};

export default GetData;
