import React from 'react';
import styled from 'styled-components/native';
import { DestinationSearch } from './src/screens/DestinationSearch';

export default function App() {
  return (
    <SContainer>
      <DestinationSearch />
    </SContainer>
  );
}

const SContainer = styled.SafeAreaView`
  margin-top: 25px;
`;
