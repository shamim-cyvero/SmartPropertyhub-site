// ParentComponent.js
import React from 'react';
import LatesProperty from './LatesProperty';
import pic from '../../Assets/green-cliffs-viewing.jpg';
import pic2 from '../../Assets/home4.jpg';
import pic3 from '../../Assets/home5.jpg';

const properties = [
    {
        image: pic,
        status: 'For Sell',
        type: 'Apartment',
        price: '12,345',
        title: 'Golden Urban House For Sell',
        location: '123 Street, New York, USA',
        size: '1000',
        bedrooms: '3',
        bathrooms: '2'
    },
    {
        image: pic2,
        status: 'For Rent',
        type: 'Villa',
        price: '12,345',
        title: 'Golden Urban House For Rent',
        location: '123 Street, New York, USA',
        size: '1000',
        bedrooms: '3',
        bathrooms: '2'
    },
    {
        image: pic3,
        status: 'For Sell',
        type: 'Office',
        price: '12,345',
        title: 'Golden Urban Office For Sell',
        location: '123 Street, New York, USA',
        size: '1000',
        bedrooms: '3',
        bathrooms: '2'
    },
    {
        image: pic3,
        status: 'For Sell',
        type: 'Office',
        price: '12,345',
        title: 'Golden Urban Office For Sell',
        location: '123 Street, New York, USA',
        size: '1000',
        bedrooms: '3',
        bathrooms: '2'
    },
    {
        image: pic3,
        status: 'For Sell',
        type: 'Office',
        price: '12,345',
        title: 'Golden Urban Office For Sell',
        location: '123 Street, New York, USA',
        size: '1000',
        bedrooms: '3',
        bathrooms: '2'
    },
    {
        image: pic3,
        status: 'For Sell',
        type: 'Office',
        price: '12,345',
        title: 'Golden Urban Office For Sell',
        location: '123 Street, New York, USA',
        size: '1000',
        bedrooms: '3',
        bathrooms: '2'
    }
    
];

const Properties = () => {
    return (
        <LatesProperty properties={properties} />
    );
}

export default Properties;
