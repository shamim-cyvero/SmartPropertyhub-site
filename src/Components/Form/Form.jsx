import { Button, HStack, Img, Input } from '@chakra-ui/react';
import axios from 'axios';

import React, { useState } from 'react';

const Form = () => {
  const [name, SetName] = useState('');
  const [category, SetCategory] = useState('');
  const [location, SetLocation] = useState('');
  const [price, SetPrice] = useState('');
  const [sqft, SetSqft] = useState('');
  const [bed, SetBed] = useState('');
  const [bath, SetBath] = useState('');
  const [postImages, SetPostImages] = useState('');

  const ImgHandler = e => {
    const file = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        SetPostImages(fileReader.result);
      }
    };
  };

  const ContactHandler = async e => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `/api/v1/contact`,
        { name, category, location, price, sqft, bed, bath },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <HStack w={'100%'} justifyContent={'center'} alignItems={'center'}>
        <form style={{ width: '50%' }} onSubmit={ContactHandler}>
          <Input
            value={name}
            onChange={e => SetName(e.target.value)}
            type="text"
            placeholder="name"
          />
          <Input
            value={category}
            onChange={e => SetCategory(e.target.value)}
            type="text"
            placeholder="category"
          />
          <Input
            value={location}
            onChange={e => SetLocation(e.target.value)}
            type="text"
            placeholder="location"
          />
          <Input
            value={price}
            onChange={e => SetPrice(e.target.value)}
            type="text"
            placeholder="price"
          />
          <Input
            value={sqft}
            onChange={e => SetSqft(e.target.value)}
            type="text"
            placeholder="sqft"
          />
          <Input
            value={bed}
            onChange={e => SetBed(e.target.value)}
            type="text"
            placeholder="bed"
          />
          <Input
            value={bath}
            onChange={e => SetBath(e.target.value)}
            type="text"
            placeholder="bath"
          />
          <Input
            onChange={e => ImgHandler(e)}
            accept="image/*"
            type="file"
            placeholder="postImages"
          />
          <Button
            mb={'4'}
            type={'submit'}
            children={'Submit'}
            variant={'solid'}
            colorScheme={'purple'}
          />
        </form>
      </HStack>

      <Img src={postImages} alt="img" />
    </>
  );
};

export default Form;
