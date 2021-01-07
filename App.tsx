import React from 'react';
import { Post } from './src/components/Post';
import { TPost } from './src/types/appTypes';
const img = require('./assets/images/postImg.jpg');

const fakePost: TPost = {
  image: img,
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi itaque veniam recusandae totam? Non est corrupti nulla mollitia magnam, pariatur at architecto omnis voluptates adipisci dignissimos. Maiores illum similique cupiditate adipisci, debitis praesentium laudantium nobis facere consequuntur omnis dignissimos esse sequi quam, iste quas fugiat obcaecati vel quibusdam. At reprehenderit cum quos eaque. Tenetur, vero fugiat!',
  pricePerNight: '$30',
  totalPrice: '$100',
  type: '1 bed 1 bath',
};

export default function App() {
  return <Post post={fakePost} />;
}
