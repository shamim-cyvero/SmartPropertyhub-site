import React from 'react';
import './BellaGallery.css';
import gal from '../../../../Assets/eldeco/g1-sm.webp';
import gal2 from '../../../../Assets/eldeco/g2-sm.webp';
import gal3 from '../../../../Assets/eldeco/g3-sm.webp';
import gal4 from '../../../../Assets/eldeco/g4-sm.webp';
import gal5 from '../../../../Assets/eldeco/g5-sm.webp';
import gal6 from '../../../../Assets/eldeco/g6-sm.webp';
import gal7 from '../../../../Assets/eldeco/g7-sm.webp';
import gal8 from '../../../../Assets/eldeco/g8-sm.webp';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import ImageZoom from 'react-image-zooom';

function BellaGallery() {
  return (
    <>
      <div className="galleryContainer mt-5">
        <h1 className="text-center">Gallery</h1>
        <div className="Galleryrow">
          <img src={gal} alt="" />
          <img src={gal2} alt="" />
          <img src={gal3} alt="" />
          <img src={gal4} alt="" />
          <img src={gal5} alt="" />
          <img src={gal6} alt="" />
          <img src={gal7} alt="" />
          <img src={gal8} alt="" />
        </div>
      </div>

      {/* <Zoom>
        <img
          alt="That Wanaka Tree, New Zealand by Laura Smetsers"
          src={gal8}
          width="5000"
        />
      </Zoom> */}
    </>
  );
}

export default BellaGallery;
