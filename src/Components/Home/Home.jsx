import React, { useCallback, useEffect, useState } from 'react';
// import Form from '../Form/Form';
import p1 from '../../Assets/Home.jpg';
import p2 from '../../Assets/Home2.jpg';

import elite1 from '../../Assets/Elite/home1.1.webp'
import eldeco1 from '../../Assets/eldeco/slide2.jpg';
import Sikka1 from '../../Assets/Sikka/slide1.jpg'




import './Home.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Box, Button, Heading, IconButton, Stack, Text, VStack,Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure,  } from '@chakra-ui/react';
import About from '../About/About';
import Agent from '../Agent/Agent';
import Contact from '../Contact/Contact';
import Properties from '../LatestProperty/Properties';
import MySlider from '../MySlider/MySlider';
import Testimonials from '../Testimonial/Testimonials';
import AlertModalForContact from '../AlertModalForContact/AlertModalForContact';
const Home = () => {
  const sliderImages = [
    {
      url: p1,
    },

    {
      url: eldeco1,
    },
    // {
    //   url: Sikka1,
    // },

    {
      url: p2,
    },

  ];
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [activeImageNum, setCurrent] = useState(0);


    const length = sliderImages.length;
    var nextSlide = () => {
      setCurrent(activeImageNum === length - 1 ? 0 : activeImageNum + 1);
    };
    var prevSlide = () => {
      setCurrent(activeImageNum === 0 ? length - 1 : activeImageNum - 1);
    };
    if (!Array.isArray(sliderImages) || sliderImages.length <= 0) {
      return null;
    }

  return (
    <>
    <Stack w={'100%'} direction={{base:'column',lg:'row'}} justifyContent={{base:'center',lg:'center'}} alignItems={{base:'center',lg:'center'}} >
      <VStack  w={{base:'90%',lg:'50%'}} p={'2vmax'} justifyContent={'center'} alignItems={'flex-start'}>
        <Heading size={'2xl'} textAlign={{base:'center',lg:'left'}} children={'Find the Perfect Family Home'}/>
        <Text children={`Discover Your Family's Perfect Home - Reach Out to Our Certified Agents Today! Experience personalized service and expert guidance every step of the way. Your dream home is just a call away.`} />
        <Button _hover={{bgColor:'#00B66E'}} bgColor={'#00B98E'} color={'white'}  children={'Get Start'} />
      </VStack>

      <Box  w={{base:'90%',lg:'50%'}} h={{base:'90%',lg:'50%'}} >
        <section  className="image-slider">
          <div className="left">
            <IconButton
              isRound={true}
              _hover={{bgColor:'#00B66E'}} bgColor={'#00B98E'} color={'white'} 
              aria-label='Done'
              icon={<FaArrowLeft />}
              onClick={prevSlide} 
              fontSize={['20px','22px']}
            />
          </div>
          <div className="right">
            <IconButton
              isRound={true}
              _hover={{bgColor:'#00B66E'}} bgColor={'#00B98E'} color={'white'} 
              aria-label='Done'
              icon={<FaArrowRight />}
              onClick={nextSlide} 
              fontSize={['20px','22px']}
            />
          </div>

          {sliderImages.map((currentSlide, ind) => {
            return (
              /*className={ind === activeImageNum? 'currentSlide active': 'currentSlide'}*/ 
              <div key={currentSlide.url} >   
                {ind === activeImageNum && (
                  <img style={{width:'100%',height:'50%',objectFit:"fill"}} key={ind} src={currentSlide.url} alt={currentSlide.url}/>
                )}
              </div>
            );
          })}
        </section>
      </Box>
    </Stack>
      
    <Heading size={'2xl'} m={'3vmax 0'} textTransform={'uppercase'} textAlign={'center'} letterSpacing={'10px'} children={'Our Properties'} />
    <About
      title={'LONDON MARTTHE'}
      description={'London Mart is conceived and conceptualized by Mart Promoters. They are a multi-facet establishment of companies which specializes not just into real estate and urban space planning but also have their wings spread out into fields of advertising & media, motion production and hospitality sector. '}
      points={['LONDON MARTLUXURY REDEFINED','SHOPPER’S PARADISEGET YOUR GLAM ON','BETTER TOMORROWMART PROMOTERS']} 
      siteLink={'london'}
      image={p2} 
      index={1}
    />
    <About
      title={'ELITE - X'}
      description={`
        ELITE-X: Elevate Your Lifestyle with Unmatched Luxury and Performance. Discover a new level of excellence designed
         just for you. Upgrade to ELITE-X and experience luxury redefined. Join the elite few who enjoy the best in class with ELITE-X
        `}
      points={['More than 75% open area','Every building with a drop-ff lobby','High speed elevators','100% power back-up','3 tier security system 24x7']} 
      siteLink={'elitex'}
      image={elite1} 
      index={2}
    />
    <About
      title={'Eldeco'}
      description={'Situated in the thriving locale of Greater Noida West, Eldeco La Vida Bella puts you at the centre of excitement and convenience. Set amidst beautiful landscape, here 5 palatial towers, each apartment is equipped with all-weather air conditioning, welcome you to experience the eptiome of a modern lifestyle '}
      points={['All Weather Air Conditioning In All Rooms','9-Ft Entrance Door With Digital Lock','Floor To Floor Height 11 Ft Height','Double height air-conditioned lobby','Rooftop swimming pool with loungers']} 
      siteLink={'eldeco'}
      image={eldeco1} 
      index={3}
    />
    <About
      title={`SIKKA KAAMYA GREENS `}
      description={'Sikka Kaamya Greens is a nicely located residential project by Sikka Group. It is located in Sector-10, Greater Noida West. Sikka Kaamya Greens offering 2, 3 and 4 Specious Apartments in Noida Extension. The Residential Project used 75% of total area as greens space and 25% as construction area. Its a two side open plot with green belt and proximity to hospital, commercial zone and institutional zone. '}
      points={['All Weather Air Conditioning In All Rooms','9-Ft Entrance Door With Digital Lock','Floor To Floor Height 11 Ft Height',]} 
      siteLink={'sikka'}
      image={Sikka1} 
      index={4}
    />
    {/* <Properties /> */}
    <Agent />
    <Contact />
    {/* <Testimonials /> */}
    {/* <MySlider /> */}




    </>
  );
};

export default Home;
