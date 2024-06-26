import { Box , Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react';

// import home1 from '../../../Assets/LondonS1.jpg'
// import home2 from '../../../Assets/LondonS2.jpg'
// import home3 from '../../../Assets/LondonS3.jpg'
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import Slider from 'react-slick';
import {Carousel} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';


const HomeSlider = ({HomeSliderCardData}) => {
	// const HomeSliderCardData=[
	// 	{
	// 		image:home1,
	// 		// title:'LONDON MARTTHE WORLD WILLREVOLVE AROUND YOU',
	// 		btn:'Contact Now',
	// 		// description:'The Best Choise for Your Convenience The Best Choise for Your Convenience The Best Choise for Your Convenience'
	// 	},
	// 	{
	// 		image:home2,
	// 		// title:'LONDON MARTTHE WORLD WILLREVOLVE AROUND YOU',
	// 		btn:'Contact Now',
	// 		// description:'The Best Choise for Your Convenience The Best Choise for Your Convenience The Best Choise for Your Convenience'
	// 	},
	// 	{
	// 		image:home3,
	// 		// title:'LONDON MARTTHE WORLD WILLREVOLVE AROUND YOU',
	// 		btn:'Contact Now',
	// 		// description:'The Best Choise for Your Convenience The Best Choise for Your Convenience The Best Choise for Your Convenience'
	// 	},
	// ]

	const navigate=useNavigate()

	return (
		<Box w={'100%'} >
			<Carousel  interval={2000}>
				{
					HomeSliderCardData.map((item)=>(
						<Carousel.Item key={item.image} w={'100%'} >
							<Box color={'white'} fontFamily={'Kanit, sans-serif'} w={'100%'} pos={'relative'} >

								<Image w={'100%'} h={'90vh'} src={item.image} alt="sliderImg" />								
								<VStack  w={'100%'} h={'90vh'} justify={'center'} alignItems={'center'} pos={'absolute'} left={'0%'} top={'0%'} >
									<Heading w={'50%'} fontSize={'6vmax'} fontWeight={'300'} textAlign={'center'} children={item.title} />
									<Text w={'50%'} fontSize={'1vmax'} textAlign={'center'} children={item.description} />
									{/* <Button onClick={()=>navigate('/shop')} size={'lg'} variant={'solid'} colorScheme={'orange'} children={item.btn} /> */}
								</VStack>

							</Box>
						</Carousel.Item>	
					))
				}			
			</Carousel>
		</Box>
	);
};


export default HomeSlider;
