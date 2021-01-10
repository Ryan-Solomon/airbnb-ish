import React from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

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
        <Marker coordinate={{ latitude: 37, longitude: -122 }} />
      </MapView>
    </View>
  );
};
