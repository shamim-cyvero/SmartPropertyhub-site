
import React from 'react';
import ImageZoom from "react-image-zooom";

const FloorPlanItem = ({ image, description }) => {
    return (
        <div className="kamyaback">
            <div className="kamyaFloor">
                {/* <img src={image} alt={description} /> */}
                <ImageZoom src={image} alt={description} zoom="300"   />

            </div>
            <p>{description}</p>
        </div>
    );
};

export default FloorPlanItem;
