import React from 'react';
import { useState } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import styled from 'styled-components/native';
import { searchData } from '../../assets/data/search';
import { LocationCard } from '../components/LocationCard';

export const DestinationSearch = () => {
  const [searchDataState, setSearchDataState] = useState(searchData);
  return (
    <SContainer>
      <View style={{ height: 500 }}>
        <GooglePlacesAutocomplete
          placeholder='Where are you going?'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          styles={{
            textInput: styles.textInput,
          }}
          query={{
            key: 'YOUR API KEY',
            language: 'en',
          }}
          renderRow={(item) => <LocationCard item={item} />}
        />
      </View>
    </SContainer>
  );
};

const styles = StyleSheet.create({
  textInput: {
    width: '80%',
    borderBottomWidth: 1,
    borderColor: '#f15454',
    borderStyle: 'solid',
    margin: 'auto',
    paddingHorizontal: 20,
    borderRadius: 10,
    marginTop: 20,
    fontSize: 16,
  },
});

const SContainer = styled.View``;
