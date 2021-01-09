import React from 'react';
import styled from 'styled-components/native';
import { GuestsScreen } from './src/screens/GuestsScreen';

export default function App() {
  return (
    <SContainer>
      <GuestsScreen />
    </SContainer>
  );
}

const SContainer = styled.SafeAreaView`
  margin-top: 25px;
`;
