import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styled from 'styled-components/native';
import { searchData } from '../../assets/data/search';
import { LocationCard } from '../components/LocationCard';

export const DestinationSearch = () => {
  return (
    <SContainer>
      <GooglePlacesAutocomplete
        placeholder='Where are you going?'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        fetchDetails
        styles={{
          textInput: styles.textInput,
        }}
        query={{
          key: 'AIzaSyAzv4SuX2PUkOUfd5WdXc4QQHEl4uR6DGY',
          language: 'en',
          type: '(cities)',
        }}
        suppressDefaultStyles
        renderRow={(item) => <LocationCard item={item} />}
      />
    </SContainer>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '90%',
    borderBottomWidth: 1,
    borderColor: '#f15454',
    borderStyle: 'solid',
    margin: 'auto',
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderRadius: 10,
    marginTop: 20,
    fontSize: 16,
  },
});

const SContainer = styled.View`
  flex: 1;
`;
