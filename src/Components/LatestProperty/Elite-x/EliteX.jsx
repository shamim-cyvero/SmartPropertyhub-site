import { Box, Heading, Image, Stack, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useId } from 'react'
import home1 from '../../../Assets/Elite/home1.webp'
import home11 from '../../../Assets/Elite/home1.1.webp'
import elite from '../../../Assets/Elite/elite.jpg'
import about from '../../../Assets/Elite/about.jpg'
import price from '../../../Assets/Elite/price.jpg'
import footer from '../../../Assets/Elite/footer.jpg'
import price2 from '../../../Assets/Elite/price2.jpg'
import slide1 from '../../../Assets/Elite/slide1.webp'
import slide2 from '../../../Assets/Elite/slide2.webp'
import slide3 from '../../../Assets/Elite/slide3.webp'
import HomeSlider from '../HomeSlider/HomeSlider'
import Price from '../Price/Price'
import FlatLayout from './FlatLayout/FlatLayout'

import Slider from 'react-slick';
import flatLayout1 from '../../../Assets/Elite/flatLayout1.jpg'
import flatLayout2 from '../../../Assets/Elite/flatLayout2.jpg'
import flatLayout3 from '../../../Assets/Elite/flatLayout3.jpg'
import flatLayout4 from '../../../Assets/Elite/flatLayout4.jpg'
import flatLayout5 from '../../../Assets/Elite/flatLayout5.jpg'
import flatLayout6 from '../../../Assets/Elite/flatLayout6.jpg'
import flatLayout7 from '../../../Assets/Elite/flatLayout7.jpg'
import flatLayout8 from '../../../Assets/Elite/flatLayout8.jpg'
import flatLayout9 from '../../../Assets/Elite/flatLayout9.jpg'
import flatLayout10 from '../../../Assets/Elite/flatLayout10.jpg'
import flatLayout11 from '../../../Assets/Elite/flatLayout11.jpg'
import ContactUs from '../../ContactUs/ContactUs'
import AlertModalForContact from '../../AlertModalForContact/AlertModalForContact'

const EliteX = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
  const EliteXliderLogo=useId()


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
	]
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
    flatLayout10,
    flatLayout11
];
// let timeout;
// function myFunction() {
//   timeout = setTimeout(alertFunc, 5000);
// }
// function alertFunc() {
//   onOpen()
// }

// useEffect(()=>{
//   myFunction()
// },[])
  return (
    <>
        <Stack bgImage={{base:home11,md:home1}} bgPosition={'center' } bgSize={'cover'} bgRepeat={'no-repeat'}  w={'100%'} h={'100vh'} justifyContent={'center'} alignItems={'center'}>
          {/* <Image border={'1px solid red'} pos={'absolute'} left={'0'} top={'0'} w={'100%'}  h={'100vh'} src={[home11,home1]} alt='home1' /> */}
           <Heading letterSpacing={'10px'} size={'4xl'} verticalAlign={'center'} zIndex={'2'} color={'white'} children={'ELITE - X'} />
          {/* <Stack border={'1px solid red'} w={'100%'} pos={'relative'} justifyContent={'center'} alignItems={'center'}>

          </Stack> */}
        </Stack>

        <ContactUs />


        {/* <Box border={'1px solid red'}  w={'100%'} m={'1vmax auto'} >
          <Image w={'100%'} border={'1px solid red'}  src={elite} alt='elite' />
        </Box> */}

        <Price price={price2} price2={price} />
        <HomeSlider HomeSliderCardData={HomeSliderCardData} />
        
        <FlatLayout id={EliteXliderLogo} brandImages={brandImages} />

        <Box   w={'100%'} m={'1vmax auto'} >
          <Image w={'100%'}  src={about} alt='about' />
        </Box>
        {/* <Box border={'1px solid red'}  w={'100%'} m={'1vmax auto'} >
          <Image w={'100%'} border={'1px solid red'}  src={footer} alt='footer' />
        </Box> */}
     {/* <AlertModalForContact isOpen={isOpen} onOpen={onOpen} onClose={onClose} /> */}

    </>
  )
}

export default EliteX