import React, { useState } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

import { feedData } from '../../assets/data/feed';
import { MarkerComponent } from '../components/Marker';

export const SearchResultsMap = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const setSelected = (id: string) => {
    setSelectedId(id);
  };
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <MapView
        style={{ width: '100%', height: '100%' }}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3915637,
          longitude: -16.6291304,
          latitudeDelta: 0.08,
          longitudeDelta: 0.08,
        }}
      >
        {feedData.map((place) => (
          <MarkerComponent
            isSelected={place.id === selectedId}
            onPress={setSelected}
            key={place.id}
            mark={place}
          />
        ))}
      </MapView>
    </View>
  );
};
