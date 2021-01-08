import React from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { GuestsCounter } from '../components/GuestsCounter';

const guestCategories = [
  { title: 'Adults', description: 'Ages 13 or above' },
  { title: 'Children', description: 'Ages 2 to 12' },
  { title: 'Infants', description: 'Under 2' },
];

export const GuestsScreen = () => {
  return (
    <SContainer>
      <FlatList
        data={guestCategories}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          const { title, description } = item;
          return <GuestsCounter title={title} description={description} />;
        }}
      />
    </SContainer>
  );
};

const SContainer = styled.View``;
