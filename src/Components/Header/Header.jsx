import {
  Box,
  Button,
  HStack,
  IconButton,
  Stack,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  useDisclosure,
  VStack,
  Heading,
  Img,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  MenuButton,
  MenuItem,
  Menu,
  MenuList,
  Text,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { FaHamburger } from 'react-icons/fa';
import { HiMenu } from 'react-icons/hi';
// import { useDispatch, useSelector } from 'react-redux';
// import { logout } from '../../redux/actions/UserActions';
// import ContactForm from '../ContactForm/ContactForm';
// import TemplatesSlider from '../TemplateSlider/Templates';
// import PhoneTemplatesSlider from '../TemplateSlider/PhoneTemplatesSlider/PhoneTemplatesSlider';
// import { IoChevronDownCircleOutline } from 'react-icons/io5';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Assets/smartPropertyLogo/logo1.png'
import AlertModalForContact from '../AlertModalForContact/AlertModalForContact';

const Header = () => {

  const isAuthenticated=true
  // const {  isAuthenticated } = useSelector(
  //   state => state.userContainer
  // );
  const {isOpen,onClose,onOpen}=useDisclosure();
  const [ShowphoneMenu,setShowPhoneMenu]=useState()

  const navigate=useNavigate()
  // const dispatch=useDispatch()


  const LogoutHandler=async()=>{
      // await dispatch(logout())
      navigate('/')
  }
  const showPhoneMenu=(Show_id)=>{
    setShowPhoneMenu(Show_id)
  }
  // const contactModel=()=>{ 
  //   // e.stopPropagation();
  //   onOpen()
  // }

  let timeout;
function myFunction() {
  timeout = setTimeout(alertFunc, 5000);
}
function alertFunc() {
  onOpen()
}

useEffect(()=>{
  myFunction()
},[])
  return (
    <>
    
    <HStack  zIndex={'20'} bgColor={'white'} p={'5px'} boxShadow={'md'}  w={'100%'} justifyContent={'space-between'} alignItems={'center'}  pos={'sticky'} top={'0'} left={'0'} >

      <Box  w={{base:'20%',md:'15%',lg:'10%'}} m={'0 1vmax'}>
          <Img  src={logo} alt={'logo'} onClick={()=>navigate('/')} cursor={'pointer'} />
          {/* <Text children={'SmartPropertyHub.io'} /> */}
      </Box>

      <HStack w={'70%'}  justifyContent={'flex-end'}>
        <HStack display={{base:'none',lg:'flex'}} > 
          <Button color={'black'} _hover={{color:'green'}} m={'0 10px'} fontSize={['sm','sm']} variant={'Link'} onClick={()=>navigate('/')} children={'Home'} />
          {/* <Button _hover={{color:'purple'}} m={'0 10px'} fontSize={['sm','sm']} variant={'Link'} onClick={()=>navigate('/')} children={'About'} /> */}

          <Button color={'black'} _hover={{color:'green'}} m={'0 10px'} fontSize={['sm','sm']} variant={'Link'}  onClick={()=>navigate('/sikka')} children={'Sikka'} />
          <Button color={'black'} _hover={{color:'green'}} m={'0 10px'} fontSize={['sm','sm']} variant={'Link'}  onClick={()=>navigate('/eldeco')} children={'Eldeco'} />
          <Button color={'black'} _hover={{color:'green'}} m={'0 10px'} fontSize={['sm','sm']} variant={'Link'} onClick={()=>navigate('/london')} children={'London Mart'} /> 
          <Button color={'black'} _hover={{color:'green'}} m={'0 10px'} fontSize={['sm','sm']} variant={'Link'} onClick={()=>navigate('/elitex')} children={'Elite-X'} /> 

          {/* {
            isAuthenticated?(
              <>
                <Button colorScheme={'whatsapp'}  m={'0 10px'} fontSize={['sm','sm']} variant={'solid'} onClick={()=>navigate('/profile')} children={'Profile'} />
                <Button colorScheme={'whatsapp'} color={'green'} m={'0 10px'} fontSize={['sm','sm']} variant={'outline'}  onClick={()=>LogoutHandler()} children={'Logout'} />
              </>
            ):(
              <>
                <Button _hover={{color:'purple'}} m={'0 10px'} fontSize={['sm','sm']} variant={'ghost'}  onClick={()=>navigate('/login')} children={'Login'} />
                <Button colorScheme={'whatsapp'}  m={'0 10px'} fontSize={['sm','sm']} variant={'solid'}  onClick={()=>navigate('/signup')} children={'SignUp'} />
              </>
            )
          } */}

        </HStack>
       
        <Button       
          variant={'ghost'}
          colorScheme={'black'}
          children={<HiMenu />}
          onClick={()=>showPhoneMenu(1)}
          fontSize={'2xl'}
          display={{base:'flex',lg:'none'}}
          justifyContent={'center'}
          alignItems={'center'}
          p={'2'}
          color={'black'}
          _hover={{color:'green'}}
          w={'10%'}
        />
      </HStack>

    </HStack>
<AlertModalForContact isOpen={isOpen} onOpen={onOpen} onClose={onClose} />

  {
    ShowphoneMenu && ShowphoneMenu===1?(
      <Drawer isOpen={isOpen} onClose={onClose} placement={'right'} >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
           <Heading bgGradient={'linear(to-l,#FF0080, #00B66E)'} bgClip={'text'} size={'md'} children={'Smart Property Hub'} />
          </DrawerHeader>
          <DrawerBody>
            <VStack alignItems={'flex-start'} justifyContent={'center'}>
              <Button textAlign={'center'} w={'100%'} variant={'outline'} colorScheme={'whatsapp'} onClick={()=>(navigate('/'), onClose() )} children={'Home'} />
              {/* {
                isAuthenticated?(
                  <Button textAlign={'center'} w={'100%'} variant={'outline'} colorScheme={'whatsapp'} onClick={()=>(navigate('/profile'), onClose() )} children={'Profile'} />
                ):null
              } */}
              <Button textAlign={'center'} w={'100%'} variant={'outline'} colorScheme={'whatsapp'} onClick={()=>(navigate('/london'), onClose() )} children={'London Mart'} />
              <Button textAlign={'center'} w={'100%'} variant={'outline'} colorScheme={'whatsapp'} onClick={()=>(navigate('/elitex'), onClose() )} children={'Elite-X'} />
              <Button textAlign={'center'} w={'100%'} variant={'outline'} colorScheme={'whatsapp'} onClick={()=>(navigate('/eldeco'), onClose() )} children={'Eldeco'} />
              <Button textAlign={'center'} w={'100%'} variant={'outline'} colorScheme={'whatsapp'} onClick={()=>(navigate('/sikka'), onClose() )} children={'Sikka'} />
              
            </VStack>
            {/* <HStack justifyContent={'center'} alignItems={'center'} w={'100%'} >
              <PhoneTemplatesSlider />
            </HStack> */}
          </DrawerBody>
          <DrawerFooter  >
            <HStack w={'100%'} justifyContent={'space-between'} mb={'8'} >
              {/* {
                isAuthenticated?(
                  <Button _hover={{bgColor:'#00B66E'}} bgColor={'#00B98E'} color={'white'} fontSize={['sm','sm']} variant={'solid'} onClick={()=>LogoutHandler()}  children={'Log Out'} />
                  
                  ):(
                    <>
                   <Button colorScheme={'purple'} onClick={()=>(navigate('/login'), onClose() )}  children={'Login'} />
                    <Button _hover={{bgColor:'#00B66E'}} bgColor={'#00B98E'} color={'white'}  m={'0 10px'} fontSize={['sm','sm']} variant={'solid'} onClick={()=>(navigate('/login'), onClose() )} children={'Login'} />
                    <Button _hover={{bgColor:'#00B66E'}} bgColor={'#00B98E'} color={'white'}  m={'0 10px'} fontSize={['sm','sm']} variant={'solid'} onClick={()=>(navigate('/signUp'), onClose() )} children={'signUp'} />
                    
                    <Button colorScheme={'purple'} onClick={()=>(navigate('/signUp'), onClose() )}  children={'signUp'} />
                    </>
                    )
                    }            
              */}
              {/* <Button _hover={{bgColor:'#00B66E'}} bgColor={'#00B98E'} color={'white'}  m={'0 10px'} fontSize={['sm','sm']} variant={'solid'} onClick={()=>(navigate('/signUp'), onClose() )} children={'Agent'} /> */}
            </HStack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
  ):(null)
  }


   
  </>
  );
};

export default Header;
