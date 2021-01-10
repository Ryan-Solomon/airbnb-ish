import React from 'react';
import { useState } from 'react';
import { FlatList } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styled from 'styled-components/native';
import { searchData } from '../../assets/data/search';
import { LocationCard } from '../components/LocationCard';

export const DestinationSearch = () => {
  const [searchDataState, setSearchDataState] = useState(searchData);
  return (
    <SContainer>
      <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'YOUR API KEY',
          language: 'en',
        }}
      />

      <SInput placeholderTextColor='black' placeholder='Where are you going?' />
      <FlatList
        data={searchDataState}
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
  border-color: #f15454;
  border-style: solid;
  margin: auto;
  padding: 10px;
  border-radius: 10px;
  margin-top: 40px;
  font-size: 16px;
`;
