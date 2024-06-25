import {
  Button,
  HStack,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { server } from '../..';

const AlertModalForContact = ({ isOpen, onOpen, onClose }) => {

  const toast = useToast()

  const [name,setName]=useState('')
  const [phone,setPhone]=useState()


  const contactHandler=async ()=>{
    try {
      
      if(!name||!phone){
         return alert('both value required')
      }
      if(phone.length===10){
      
       const {data}= await axios.post(`${server}/contact/email`,
          {phone,name},
          {
            headers:{
              "Content-Type":"Application/json"
            },
            withCredentials:true

          }
        )
          onClose()
          setPhone('')
          setName('')
        
          toast({
            title: data.message,
            description: "Agent Reach out Soon",
            status: 'success',
            duration: 6000,
            isClosable: true,
          })
      }else{
        return alert('Enter Valid Phone Number')
      }
 
    } catch (error) {
      return console.log(error)
    }
     
  }
  const OverlayTwo = () => (
    <ModalOverlay
    //   bg="none"
    //   backdropFilter="auto"
    //   backdropInvert="80%"
    //   backdropBlur="2px"
           bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  );

  return (
    <>
      <Modal size={'lg'} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(10px) hue-rotate(90deg)'/>
        <ModalContent>
          <ModalHeader>
            <Heading fontWeight={'500'} letterSpacing={'5px'} margin={'1vmax 0'} textAlign={'center'} children={'REGISTER NOW'} />
          </ModalHeader>
          <ModalCloseButton color={'green'} />

          <ModalBody>
            <VStack w={'100%'} spacing={'4'} >
                <Input required value={name} onChange={(e)=>setName(e.target.value)} w={'300px'} focusBorderColor={'#00B66E'} borderColor='#00B98E' type="text" placeholder="Name" />
                <Input required value={phone} onChange={(e)=>setPhone(e.target.value)} w={'300px'} focusBorderColor={'#00B66E'} borderColor='#00B98E' type="number" placeholder="Number" />
            </VStack>
          </ModalBody>

          <ModalFooter>
            <HStack w={'100%'} justifyContent={'center'}>
                <Button letterSpacing={'2px'} colorScheme="blue" mr={3} onClick={onClose}>
                    Close
                </Button>
                <Button letterSpacing={'2px'} _hover={{bgColor:'#00B66E'}} bgColor={'#00B98E'} color={'white'}  onClick={()=>contactHandler()}>Contact Now</Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default AlertModalForContact;
