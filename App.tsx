import React from 'react';
import { Post } from './src/components/Post';
import { feedData } from './assets/data/feed';

export default function App() {
  return <Post post={feedData[0]} />;
}
