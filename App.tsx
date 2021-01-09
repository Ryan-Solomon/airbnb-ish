import React from 'react';
import styled from 'styled-components/native';
import { GuestsScreen } from './src/screens/GuestsScreen';
import 'react-native-gesture-handler';
import { Router } from './src/navigation/Router';
import { HomeScreen } from './src/screens/HomeScreen';

export default function App() {
  return (
    <SContainer>
      <HomeScreen />
      <Router />
    </SContainer>
  );
}

const SContainer = styled.SafeAreaView``;
