import React, { useEffect } from 'react'
import HomeSlider from '../HomeSlider/HomeSlider'
import slide1 from '../../../Assets/Sikka/slide1.jpg'
import slide2 from '../../../Assets/Sikka/slide2.jpg'
import slide3 from '../../../Assets/Sikka/slide3.jpg'
import slide4 from '../../../Assets/Sikka/slide4.jpg'
import kaamyaGreensSite from '../../../Assets/Sikka/sikka-kaamya-greens-site-map.jpeg'
import FlatLayout from '../Elite-x/FlatLayout/FlatLayout'
import { Box,HStack,Heading,Image, VStack, useDisclosure } from '@chakra-ui/react'
import Kamyafloor from './Kamyafloor/Kamyafloor'
import ContactUs from '../../ContactUs/ContactUs'
import AlertModalForContact from '../../AlertModalForContact/AlertModalForContact'

// import ReactImageZoom from 'react-image-zoom';
import ImageZoom from "react-image-zooom";
import SikkaAmenties from './SikkaAmenties/SikkaAmenties'


const HomeSliderCardData=[
  {
    image:slide1,
    btn:'Contact Now',
  },
  {
    image:slide2,
    btn:'Contact Now',
  },
      {
    image:slide3,
    btn:'Contact Now',
  },
      {
    image:slide4,
    btn:'Contact Now',
  },
  
]
  // const brandImages = [
    //     flatLayout1,
    //     flatLayout2,
    //     flatLayout3,
    //     flatLayout4,
    //     flatLayout5,
    //     flatLayout6,
    //     flatLayout7,
    //     flatLayout8,
    //     flatLayout9
        
    // ];
const Sikka = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const props = {width: 500,height: 250, zoomPosition :'bottom', img: slide1};

  // let timeout;
  // function myFunction() {
  //   timeout = setTimeout(alertFunc, 3000);
  // }
  // function alertFunc() {
  //   onOpen()
  // }

  // useEffect(()=>{
  //   myFunction()
  // },[])

  return (
  <>
    <HomeSlider HomeSliderCardData={HomeSliderCardData} />
        {/* <FlatLayout brandImages={brandImages} /> */}

     <ContactUs />
     <Kamyafloor />
    <VStack w={'50%'} m={'3vmax auto'} alignItems={'center'} >
        <Heading letterSpacing={'10px'} textAlign={'center'} children={'SITE PLAN'} />
        {/* <Image w={'100%'} border={'1px solid red'}  src={kaamyaGreensSite} alt='kaamyaGreensSite' /> */}
        <ImageZoom src={kaamyaGreensSite} alt="kaamyaGreensSite" zoom="300"   />

     </VStack>



     {/* <AlertModalForContact isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}

    {/* <HStack w={'100%'}  >
      <ReactImageZoom {...props} />
    </HStack> */}
    {/* <ImageZoom src={slide1} alt="A image to apply the ImageZoom plugin" zoom="200"/> */}
    <SikkaAmenties />
  </>
  )
}

export default Sikka