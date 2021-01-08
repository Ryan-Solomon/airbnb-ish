import React from 'react';
import { SearchResults } from './src/screens/SearchResults';
import styled from 'styled-components/native';

export default function App() {
  return (
    <SContainer>
      <SearchResults />
    </SContainer>
  );
}

const SContainer = styled.SafeAreaView`
  margin-top: 25px;
`;
