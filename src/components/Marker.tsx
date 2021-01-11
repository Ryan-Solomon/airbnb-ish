import React, { FC } from 'react';
import { Marker } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';
import { SText } from '../styles/text';
import { TPost } from '../types/appTypes';

type Props = {
  mark: TPost;
};

export const MarkerComponent: FC<Props> = ({ mark }) => {
  return (
    <Marker coordinate={{ latitude: 37, longitude: -122 }}>
      <View style={styles.marker}>
        <SText padding='8px' fontColor='#d0cece'>
          $400
        </SText>
      </View>
    </Marker>
  );
};

const styles = StyleSheet.create({
  marker: {
    backgroundColor: '#151515',
    borderRadius: 10,
  },
});
