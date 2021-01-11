import React, { FC } from 'react';
import { Marker } from 'react-native-maps';
import { View, StyleSheet } from 'react-native';
import { SText } from '../styles/text';
import { TPost } from '../types/appTypes';

type Props = {
  mark: TPost;
  onPress: (id: string) => void;
  isSelected: boolean;
};

export const MarkerComponent: FC<Props> = ({ mark, onPress, isSelected }) => {
  const { totalPrice, coordinate, id } = mark;
  console.log(coordinate);
  return (
    <Marker
      onPress={() => onPress(id)}
      coordinate={{
        latitude: coordinate.latitude,
        longitude: coordinate.longitude,
      }}
    >
      <View
        style={{
          ...styles.marker,
          backgroundColor: isSelected ? '#d0cece' : '#151515',
        }}
      >
        <SText padding='8px' fontColor={isSelected ? '#151515' : '#d0cece'}>
          ${totalPrice}
        </SText>
      </View>
    </Marker>
  );
};

const styles = StyleSheet.create({
  marker: {
    borderRadius: 10,
  },
});
