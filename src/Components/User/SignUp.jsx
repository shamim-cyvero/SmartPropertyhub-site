import {
  Box,
  Button,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const server='http://localhost:2000';
const SignUp = () => {
  const [name, SetName] = useState('');
  const [phone, SetPhone] = useState('');
  const [email, SetEmail] = useState('');
  const [password, SetPassword] = useState('');
  const SignupHandler = async e => {
    console.log(name,phone,email,password)
    e.preventDefault();
    try {
      await axios.post(
        `http://localhost:2000/api/v1/admin/signup`,
        { name, phone, email, password },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <VStack
      border={'1px solid blue'}
      w={'100%'}
      h={'100vh'}
      spacing={'16'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      <Heading
        letterSpacing={'5px'}
        fontFamily={'Roboto'}
        children={'Registration to Easy Invoice system '}
        textAlign={'center'}
      />
      <Box w={{ base: '90%', md: '50%' }}>
        <form onSubmit={SignupHandler}>
          <Input
            focusBorderColor={'purple.400'}
            required
            value={name}
            onChange={e => SetName(e.target.value)}
            fontFamily={'Roboto'}
            size={'lg'}
            fontSize={['2vmax', '1.8vmax', '1.2vmax']}
            type="text"
            placeholder="Enter Your Name"
          />
          <Input
            focusBorderColor={'purple.400'}
            required
            value={phone}
            onChange={e => SetPhone(e.target.value)}
            fontFamily={'Roboto'}
            size={'lg'}
            fontSize={['2vmax', '1.8vmax', '1.2vmax']}
            m={'2vmax 0'}
            type="email"
            placeholder="Enter Your Email"
          />
          <Input
            focusBorderColor={'purple.400'}
            required
            value={email}
            onChange={e => SetEmail(e.target.value)}
            fontFamily={'Roboto'}
            size={'lg'}
            fontSize={['2vmax', '1.8vmax', '1.2vmax']}
            type="text"
            placeholder="Enter Your Phone"
          />
          <Input
            focusBorderColor={'purple.400'}
            required
            value={password}
            onChange={e => SetPassword(e.target.value)}
            fontFamily={'Roboto'}
            size={'lg'}
            fontSize={['2vmax', '1.8vmax', '1.2vmax']}
            m={'2vmax 0'}
            type="password"
            placeholder="Enter Your Password"
          />
          <Button
            letterSpacing={'5px'}
            fontFamily={'Roboto'}
            w={'100%'}
            type={'submit'}
            children={'SignUp'}
            variant={'solid'}
            colorScheme={'purple'}
          />

          <Text fontSize={['sm', 'md']} textAlign={'center'} m={'1vmax'}>
            I have done Registration or Singup -
            <Button
              fontFamily={'Roboto'}
              ml={'1vmax'}
              variant={'link'}
              colorScheme={'purple'}
            >
              <Link to={'/login'}>Login</Link>
            </Button>
          </Text>
        </form>
      </Box>
    </VStack>
  );
};

export default SignUp;
