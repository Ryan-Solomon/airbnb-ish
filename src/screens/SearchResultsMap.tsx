import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

export const SearchResultsMap = () => {
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <MapView
        style={{ width: '100%', height: '100%' }}
        initialRegion={{
          latitude: 37,
          longitude: -122,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04,
        }}
      />
    </View>
  );
};
