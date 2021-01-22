import React from 'react';
import styled from 'styled-components/native';
import { useSavedPostsContext } from '../context/savedPostsContext';
import { FlatList } from 'react-native';
import { Post } from '../components/Post';
import { SText } from '../styles/text';

export default function SavedPostsScreen() {
  const { posts } = useSavedPostsContext();

  if (posts.length === 0) {
    return (
      <NoPostsContainer>
        <SText>You have no saved posts</SText>
      </NoPostsContainer>
    );
  }

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

const NoPostsContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const PostContainer = styled.View``;
