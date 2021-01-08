import React from 'react';
import styled from 'styled-components/native';

export const DestinationSearch = () => {
  return (
    <SContainer>
      <SInput placeholderTextColor='black' placeholder='Where are you going?' />
    </SContainer>
  );
};

const SContainer = styled.View``;

const SInput = styled.TextInput`
  width: 90%;
  border-bottom-width: 1px;
  border-color: #aaaaaa;
  border-style: solid;
  margin: auto;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  font-size: 16px;
`;
