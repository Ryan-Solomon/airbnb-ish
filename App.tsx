import React from 'react';
import styled from 'styled-components/native';
import { GuestsScreen } from './src/screens/GuestsScreen';
import 'react-native-gesture-handler';
import { Router } from './src/navigation/Router';

export default function App() {
  return (
    <SContainer>
      <GuestsScreen />
      <Router />
    </SContainer>
  );
}

const SContainer = styled.SafeAreaView`
  margin-top: 25px;
`;
