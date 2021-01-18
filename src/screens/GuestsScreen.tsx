import React, { Children } from 'react';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { GuestsCounter } from '../components/GuestsCounter';
import { SText } from '../styles/text';
import { useNavigation } from '@react-navigation/native';
import { useAppContext } from '../context/AppContext';

const guestCategories = [
  { title: 'Adults', description: 'Ages 13 or above' },
  { title: 'Children', description: 'Ages 2 to 12' },
  { title: 'Infants', description: 'Under 2' },
];

export const GuestsScreen = () => {
  const navigation = useNavigation();

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
      <SearchButton
        onPress={() =>
          navigation.navigate('Home', {
            screen: 'Explore',
            params: {
              screen: 'SearchResults',
            },
          })
        }
      >
        <SText fontColor='#ebebeb'>Search Listings</SText>
      </SearchButton>
    </SContainer>
  );
};

const SContainer = styled.View`
  flex: 1;
`;

const SearchButton = styled.TouchableOpacity`
  background-color: #222;
  padding: 15px;
  width: 50%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-bottom: 60px;
`;
