import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FaFacebook, FaTwitterSquare, FaLinkedin, FaPhone, FaUser } from "react-icons/fa";
import { Button, HStack, Heading, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast } from '@chakra-ui/react';
import { MdCall } from 'react-icons/md';
import axios from 'axios';
import { server } from '../..';

const Footer = () => {
  const [phone,setPhone]=useState()
  const { isOpen, onOpen, onClose } = useDisclosure(); 
  const toast = useToast()


  const contactHandler =async () => {
    try {
      
      if (phone.length === 10) {
        const {data}=await axios.post(`${server}/contact/email`,
          {phone},
          {
            headers:{
              "Content-Type":"Application/json"
            }
          }
        )
          setPhone('')
          onClose()
          toast({
            title: data.message,
            description: "Agent reach out soon",
            status: 'success',
            duration: 6000,
            isClosable: true,
          })
      } else {
        return alert('Phone Number not valid');
      }
   
    } catch (error) {
      alert(error)
      
    }

  };
  return (
    <div className="footer-container mt-5">
      <div className="FooterBox">
        <div className="FooterBoxItem">
        <ul>
          <li><Link>Real estate in Noida</Link></li>
          <li><Link>Real estate in Noida West</Link></li>
          <li><Link>Real estate in Greater Noida</Link></li>
          <li><Link>Real estate in Greater Noida West</Link></li>
          <li><Link>Real estate in Delhi</Link></li>
          <li><Link>Real estate in U.P</Link></li>
          <li><Link>Real estate in Ghaziabad</Link></li>
        </ul>

        <ul>
          <li><Link>Flats for Rent in Greater Noida West</Link></li>
          <li><Link>Flats for Rent in Greater Noida</Link></li>
          <li><Link>Flats for Rent in Noida </Link></li>
          <li><Link>Flats for Rent in Noida West</Link></li>
          <li><Link>Flats for Rent in Ghaziabad</Link></li>
          <li><Link>Flats for Rentin Delhi</Link></li>
          <li><Link>Flats for Rentin U.P</Link></li>
        </ul>

        <ul>
          <li><Link>New Projects Greater Noida West</Link></li>
          <li><Link>New Projects Greater Noida</Link></li>
          <li><Link>New Projects Noida West</Link></li>
          <li><Link>New Projects Noida</Link></li>
          <li><Link>New Projects in Delhi</Link></li>
          <li><Link>New Projects in Ghaziabad</Link></li>
          <li><Link>New Projects in U.P</Link></li>
        </ul>
        </div>
      
        <div className="FooterBoxItem">
        <ul>
          <li><Link>Commercial Property in Greater Noida West</Link></li>
          <li><Link>Commercial Property in Greater Noida</Link></li>
          <li><Link>Commercial Property in Noida West</Link></li>
          <li><Link>Commercial Property in Noida</Link></li>
          <li><Link>Commercial Property in Delhi</Link></li>
          <li><Link>Commercial Property in Ghaziabad</Link></li>
          <li><Link>Commercial Property in U.P</Link></li>
        </ul>
        <ul>
          <li><Link>Commercial Property for rent in Greater Noida West</Link></li>
          <li><Link>Commercial Property for rent in Greater Noida</Link></li>
          <li><Link>Commercial Property for rent in Noida West</Link></li>
          <li><Link>Commercial Property for rent in Noida</Link></li>
          <li><Link>Commercial Property for rent in Delhi</Link></li>
          <li><Link>Commercial Property for rent in Ghaziabad</Link></li>
          <li><Link>Commercial Property for rent in U.P</Link></li>
        </ul>
       </div>
      </div>

      <div className="underline"></div>

      <div className="container">
        <div className="footerSection">
          <div className="footerBox" >
            <h3>SmartPropertyhub.io</h3>
            <small>SmartPropertyHub.io: Your Gateway to the Perfect Home. Discover, Connect, and Invest with Confidence. Explore top listings, get expert advice, and find your dream property today!</small>
            <div className="footer-icons">
              <p><FaFacebook size={20} /></p>
              <p><FaTwitterSquare size={20} /></p>
              <p><FaLinkedin size={20} /></p>
            </div>
          </div>
{/* 
          <div class="footerBox">
            <h3>Courses</h3>
            <ul>
              <li><a href="#">Development</a></li>
              <li><a href="#">Marketing</a></li>
              <li><a href="#">Finance</a></li>
              <li><a href="#">Programing</a></li>
            </ul>
          </div>

          <div class="footerBox">
            <h3>Services</h3>
            <ul>
              <li><a href="#">Content Creation</a></li>
              <li><a href="#">Graphic Design</a></li>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Consulting Services</a></li>
            </ul>
          </div> */}

          {/* <div class="footerBox">
              <h3>Links</h3>
              <ul>
                <li><a href="#">Samsung</a></li>
                <li><a href="#">Samsung</a></li>
                <li><a href="#">Samsung</a></li>
                <li><a href="#">Samsung</a></li>
              </ul>
            </div> */}

          <div className="footerBox">
            <h3>Contact Us</h3>
            <Button
              onClick={() => onOpen()}
              w={{ base: '90%' }}
              leftIcon={<MdCall />}
              colorScheme={'gray'}
              // variant={'outline'}
              children={'Call Agent'}
              // color={'white'}
              // _hover={{ color: 'white' }}

            />
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
                >
                  Call
                </Button>
              </HStack>
            </ModalBody>

            <ModalFooter>
      
            </ModalFooter>
          </ModalContent>
          </Modal>
            {/* <p>+123 456 7890</p> */}
            <p style={{marginTop:'1vmax'}} >company@gmail.com</p>
          </div>
        </div>



        <div
      
          style={{ color: "#5a5a5a", borderTop: "1px solid #5a5a5a", fontSize: "1rem",textAlign:"center",paddingTop:"1rem" }}
        >
          © 2024 all Copyright reserved
        </div>

      </div>
      
    </div>
  )
}

export default Footer