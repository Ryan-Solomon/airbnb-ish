import React from 'react';
import { Post } from '../components/Post';
import { feedData } from './../../assets/data/feed';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const SearchResults = () => {
  return (
    <SContainer>
      <FlatList
        data={feedData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Post post={item} />}
      />
    </SContainer>
  );
};

const SContainer = styled.View``;
