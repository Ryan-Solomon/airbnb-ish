import React from 'react';
import styled from 'styled-components/native';
import { useSavedPostsContext } from '../context/savedPostsContext';
import { FlatList } from 'react-native';
import { Post } from '../components/Post';

export default function SavedPostsScreen() {
  const { posts } = useSavedPostsContext();

  return (
    <SavedPostsContainer>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <PostContainer>
              <Post post={item} />
              {/* Remove post */}
            </PostContainer>
          );
        }}
      />
    </SavedPostsContainer>
  );
}

const SavedPostsContainer = styled.View``;

const PostContainer = styled.View``;
