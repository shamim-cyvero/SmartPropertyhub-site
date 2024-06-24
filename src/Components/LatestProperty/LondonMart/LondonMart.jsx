import React, { useEffect, useId } from 'react';
import HomeSlider from '../HomeSlider/HomeSlider';
import FloorPlan from '../FloorPlan/FloorPlan';
import Price from '../Price/Price';
import Brand from '../Brand/Brand';
import Highlight from '../Highlight/Highlight';
import Amenties from '../Amenties/Amenties';
import Kitchen from '../Kitchen/Kitchen';
import home1 from '../../../Assets/LondonS1.jpg';
import home2 from '../../../Assets/LondonS2.jpg';
import home3 from '../../../Assets/LondonS3.jpg';

import price from '../../../Assets/price1.png';
import price2 from '../../../Assets/price2.png';
import ContactUs from '../../ContactUs/ContactUs';
import AlertModalForContact from '../../AlertModalForContact/AlertModalForContact';
import { useDisclosure } from '@chakra-ui/react';

const LondonMart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const LondonMartsliderLogo=useId()


  const HomeSliderCardData = [
    {
      image: home1,
      // title:'LONDON MARTTHE WORLD WILLREVOLVE AROUND YOU',
      btn: 'Contact Now',
      // description:'The Best Choise for Your Convenience The Best Choise for Your Convenience The Best Choise for Your Convenience'
    },
    {
      image: home2,
      // title:'LONDON MARTTHE WORLD WILLREVOLVE AROUND YOU',
      btn: 'Contact Now',
      // description:'The Best Choise for Your Convenience The Best Choise for Your Convenience The Best Choise for Your Convenience'
    },
    {
      image: home3,
      // title:'LONDON MARTTHE WORLD WILLREVOLVE AROUND YOU',
      btn: 'Contact Now',
      // description:'The Best Choise for Your Convenience The Best Choise for Your Convenience The Best Choise for Your Convenience'
    },
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

      <FloorPlan />
      <Price price={price} price2={price2} />
      <Brand id={LondonMartsliderLogo} />
      <Highlight />
      <Amenties />
      <Kitchen />
      {/* <AlertModalForContact isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}
    </>
  );
};

export default LondonMart;
