import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import React, { useState } from 'react';
import { server } from '../..';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState();
  const toast = useToast();

  let loading = false;

  const contactHandler = async () => {
    try {
      if (!name || !phone) {
        return alert('both value required');
      }
      if (phone.length === 10) {
        loading = true;
        const { data } = await axios.post(
          `${server}/contact/email`,
          { name, phone },
          {
            headers: {
              'Content-Type': 'Application/json',
            },
            withCredentials:true

          },
        );
        loading = false;
        setPhone('');
        setName('');
        toast({
          title: data.message,
          description: 'Agent reach out soon',
          status: 'success',
          duration: 6000,
          isClosable: true,
        });
      } else {
        return alert('Phone Number is not valid');
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <Box margin={'1vmax 0'} w={'100%'} >
      <Heading
        fontWeight={'500'}
        letterSpacing={'5px'}
        margin={'1vmax 0'}
        textAlign={'center'}
        children={'REGISTER FOR BEST DEAL'}
      />
      <HStack
        margin={'2vmax auto'}
        w={'90%'}
        justifyContent={'center'}
        flexWrap={'wrap'}
      >
        <Input
          required
          value={name}
          onChange={e => setName(e.target.value)}
          w={'300px'}
          focusBorderColor={'#00B66E'}
          borderColor="#00B98E"
          type="text"
          placeholder="Name"
        />
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
        <Button
          _hover={{ bgColor: '#00B66E' }}
          bgColor={'#00B98E'}
          color={'white'}
          children={'Contact Now'}
          w={'300px'}
          onClick={() => contactHandler()}
          isLoading={loading}
        />
      </HStack>
    </Box>
  );
};

export default ContactUs;
