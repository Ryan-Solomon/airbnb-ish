import React from 'react';
import { Post } from './src/components/Post';
import { TPost } from './src/types/appTypes';
const img = require('./assets/images/postImg.jpg');

const fakePost: TPost = {
  image: img,
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad harum sapiente dicta animi odio temporibus saepe officiis soluta ratione nobis.',
  pricePerNight: '$30',
  totalPrice: '$100',
  type: '1 bed 1 bath',
};

export default function App() {
  return <Post post={fakePost} />;
}
