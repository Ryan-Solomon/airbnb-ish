import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styled from 'styled-components/native';
import { SText } from '../styles/text';
import { feedData } from '../../assets/data/feed';
import { MarkerComponent } from '../components/Marker';

export const SearchResultsMap = () => {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <MapView
        style={{ width: '100%', height: '100%' }}
        initialRegion={{
          latitude: 37,
          longitude: -122,
          latitudeDelta: 0.08,
          longitudeDelta: 0.08,
        }}
      >
        {feedData.map((place) => {
          return <MarkerComponent key={place.id} mark={place} />;
        })}
      </MapView>
    </View>
  );
};
