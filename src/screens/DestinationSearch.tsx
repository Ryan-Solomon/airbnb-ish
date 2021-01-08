import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { searchData } from '../../assets/data/search';
import { LocationCard } from '../components/LocationCard';

export const DestinationSearch = () => {
  return (
    <SContainer>
      <SInput placeholderTextColor='black' placeholder='Where are you going?' />
      <FlatList
        data={searchData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <LocationCard searchData={item} />;
        }}
      />
    </SContainer>
  );
};

const SContainer = styled.View``;

const SInput = styled.TextInput`
  width: 90%;
  border-bottom-width: 1px;
  border-color: #af24f5;
  border-style: solid;
  margin: auto;
  padding: 10px;
  border-radius: 10px;
  margin-top: 10px;
  font-size: 16px;
`;
