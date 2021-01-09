import React from 'react';
import styled from 'styled-components/native';
import 'react-native-gesture-handler';
import { Router } from './src/navigation/Router';
import { HomeScreen } from './src/screens/HomeScreen';

export default function App() {
  return (
    <>
      <Router />
    </>
  );
}

const SContainer = styled.View``;
