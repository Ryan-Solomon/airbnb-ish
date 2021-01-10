import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styled from 'styled-components/native';
import { SText } from '../styles/text';

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
        <Marker coordinate={{ latitude: 37, longitude: -122 }}>
          <View style={styles.marker}>
            <SText padding='8px' fontColor='#d0cece'>
              $400
            </SText>
          </View>
        </Marker>
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  marker: {
    backgroundColor: '#151515',
    borderRadius: 10,
  },
});
