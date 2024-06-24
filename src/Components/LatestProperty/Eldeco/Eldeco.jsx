import React, { useEffect, useId } from 'react';
import slide1 from '../../../Assets/eldeco/slide1.jpg';
import slide2 from '../../../Assets/eldeco/slide2.jpg';

import flatLayout1 from '../../../Assets/eldeco/flatLayout1.jpg';
import flatLayout2 from '../../../Assets/eldeco/flatLayout2.jpg';
import flatLayout3 from '../../../Assets/eldeco/flatLayout3.jpg';
import flatLayout4 from '../../../Assets/eldeco/flatLayout4.jpg';
import flatLayout5 from '../../../Assets/eldeco/flatLayout5.jpg';
import flatLayout6 from '../../../Assets/eldeco/flatLayout6.jpg';
import flatLayout7 from '../../../Assets/eldeco/flatLayout7.jpg';
import flatLayout8 from '../../../Assets/eldeco/flatLayout8.jpg';
import flatLayout9 from '../../../Assets/eldeco/flatLayout9.jpg';

import HomeSlider from '../HomeSlider/HomeSlider';
import FlatLayout from '../Elite-x/FlatLayout/FlatLayout';
import BellaHigh from './BellaHigh/BellaHigh';
import BellaGallery from './BellaGallery/BellaGallery';
import BellaAbout from './BellaAbout/BellaAbout';
import ContactUs from '../../ContactUs/ContactUs';
import AlertModalForContact from '../../AlertModalForContact/AlertModalForContact';
import { useDisclosure } from '@chakra-ui/react';



const Eldeco = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const sliderLayout=useId()

  const HomeSliderCardData = [
    {
      image: slide1,
      btn: 'Contact Now',
    },
    {
      image: slide2,
      btn: 'Contact Now',
    },
  ];
  const brandImages = [
    flatLayout1,
    flatLayout2,
    flatLayout3,
    flatLayout4,
    flatLayout5,
    flatLayout6,
    flatLayout7,
    flatLayout8,
    flatLayout9,
  ];
  // let timeout;
  // function myFunction() {
  //   timeout = setTimeout(alertFunc, 5000);
  // }
  // function alertFunc() {
  //   onOpen();
  // }

  // useEffect(() => {
  //   myFunction();
  // }, []);

  return (
    <>
      <HomeSlider HomeSliderCardData={HomeSliderCardData} />
      <ContactUs />

      <BellaAbout />
      <BellaHigh />
      <FlatLayout id={sliderLayout} brandImages={brandImages} />
      <BellaGallery />

      {/* <AlertModalForContact isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
    </>
  );
};

export default Eldeco;
