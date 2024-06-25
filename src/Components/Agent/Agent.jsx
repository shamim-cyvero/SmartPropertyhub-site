import React, { useState } from 'react';
import './Agent.css';
import pic from '../../Assets/home11.jpg';
import { MdCall } from 'react-icons/md';
import {
  Stack,
  useDisclosure,
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
  InputGroup,
  InputLeftElement,
  useToast,
} from '@chakra-ui/react';
import AlertModalForContact from '../AlertModalForContact/AlertModalForContact';
import { FaPhone, FaUser } from 'react-icons/fa';
import axios from 'axios';
import { server } from '../..';
const Agent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure(); 

  const [phone,setPhone]=useState()
  const [loading, setloading] = useState(false);

  const toast = useToast()


  const [showIndex, setShowIndex] = useState();

  const contactHandler =async () => {
    try {
      
      if (phone.length === 10) {
        setloading(true);
        const {data}=await axios.post(`${server}/contact/email`,
          {phone},
          {
            headers:{
              "Content-Type":"Application/json"
            }
          }
        )
        setPhone('')
        setloading(false);
        onClose()
        toast({
          title: data.message,
          description: "Agent Reach out Soon",
          status: 'success',
          duration: 6000,
          isClosable: true,
        })
          
      } else {
        setloading(false);
        return alert('Enter Valid Phone Number');
      }

    } catch (error) {
      return console.log(error)      
    }

  };

  const showModal = id => {
    if (id === 1) {
      setShowIndex(id);
      onOpen();
    } else {
      return null;
    }
  };
  const getAppointment = id => {
    if (id === 2) {
      setShowIndex(id);
      onOpen();
    } else {
      return null;
    }
  };

  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="bg-light rounded p-3 " id="greenbg">
            <div
              className="bg-white rounded p-4"
              style={{ border: '1px dashed rgba(0, 185, 142, .3)' }}
            >
              <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                  <img
                    className="img-fluid rounded w-100"
                    src={pic}
                    alt="pic"
                  />
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                  <div className="mb-4">
                    <h1
                      className="mb-3"
                      style={{
                        color: '#0E2E50',
                        fontWeight: '700',
                        fontSize: '2.5rem',
                      }}
                    >
                      Contact With Our Certified Agent
                    </h1>
                    <p style={{ color: 'grey', fontSize: '.9rem' }}>
                      Connect With Our Certified Agents Today - Your Dream Home
                      Is Just a Call Away! Experience personalized service and
                      expert guidance every step of the way. Reach out now and
                      start your journey to finding the perfect property!.
                    </p>
                  </div>
                  <Stack
                    w={'100%'}
                    spacing={'4'}
                    direction={{ base: 'column', lg: 'row' }}
                    justifyContent={{ base: 'center', lg: 'center' }}
                    alignItems={{ base: 'center', lg: 'center' }}
                  >
                    <Button
                      onClick={() => showModal(1)}
                      w={{ base: '90%' }}
                      leftIcon={<MdCall />}
                      _hover={{ bgColor: '#00B66E' }}
                      bgColor={'#00B98E'}
                      color={'white'}
                      children={'Make A Call'}
                    />
                    <Button
                      w={{ base: '90%' }}
                      leftIcon={<MdCall />}
                      colorScheme={'gray'}
                      children={' Get Appoinment'}
                      onClick={() => getAppointment(2)}
                    />
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showIndex && showIndex === 1 ? (
        <Modal size={'lg'} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay
            bg="blackAlpha.300"
            backdropFilter="blur(10px) hue-rotate(90deg)"
          />
          <ModalContent>
            <ModalHeader>
              <Heading
                fontWeight={'500'}
                letterSpacing={'5px'}
                margin={'1vmax 0'}
                textAlign={'center'}
                children={'Contact Agent Now'}
              />
            </ModalHeader>
            <ModalCloseButton color={'green'} />

            <ModalBody>
              <HStack
                w={'100%'}
                justifyContent={'space-between'}
                alignItems={'center'}
              >
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FaPhone color="gray.300" />
                  </InputLeftElement>
                  <Input
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    w={'300px'}
                    focusBorderColor={'#00B66E'}
                    borderColor="#00B98E"
                    type="number"
                    placeholder="Number"
                  />
                </InputGroup>
                <Button
                  letterSpacing={'2px'}
                  _hover={{ bgColor: '#00B66E' }}
                  bgColor={'#00B98E'}
                  color={'white'}
                  onClick={() => contactHandler()}
                  leftIcon={<FaUser />}
                  isLoading={loading}
                >
                  Call
                </Button>
              </HStack>
            </ModalBody>

            <ModalFooter>
              {/* <HStack w={'100%'} justifyContent={'center'}>
              <Button
                letterSpacing={'2px'}
                colorScheme="blue"
                mr={3}
                onClick={onClose}
              >
                Close
              </Button>
              <Button
                letterSpacing={'2px'}
                _hover={{ bgColor: '#00B66E' }}
                bgColor={'#00B98E'}
                color={'white'}
                onClick={() => contactHandler()}
              >
                Contact Now
              </Button>
            </HStack> */}
            </ModalFooter>
          </ModalContent>
        </Modal>
      ) : null}

      {showIndex && showIndex === 2 ? (
        <AlertModalForContact
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}  
        />
      ) : null}
    </>
  );
};

export default Agent;
