import React, { FC } from 'react';
import styled from 'styled-components/native';
import { TSearchData } from '../../assets/data/search';
import { SText } from '../styles/text';
import { FontAwesome } from '@expo/vector-icons';

type TProps = {
  searchData: TSearchData;
};

export const LocationCard: FC<TProps> = ({ searchData }) => {
  const { description } = searchData;
  return (
    <SContainer>
      <SBox>
        <FontAwesome name='location-arrow' size={24} color='white' />
      </SBox>
      <SText fontColor='#222'>{description}</SText>
    </SContainer>
  );
};

const SContainer = styled.View`
  border-bottom-width: 1px;
  border-color: #a9a9a9;
  padding: 10px;
  flex-direction: row;
  align-items: center;
  margin: 10px;
`;

const SBox = styled.View`
  background-color: #555;
  border-radius: 10px;
  height: 50px;
  width: 50px;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
`;
