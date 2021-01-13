import React from 'react';
import styled from 'styled-components/native';
import 'react-native-gesture-handler';
import { Router } from './src/navigation/Router';
import { HomeScreen } from './src/screens/HomeScreen';

import Amplify from 'aws-amplify';
// @ts-ignore
import config from './aws-exports';
Amplify.configure(config);

export default function App() {
  return (
    <>
      <Router />
    </>
  );
}

const SContainer = styled.View``;
