import React from 'react';
import styled from 'styled-components/native';
import { useSavedPostsContext } from '../context/savedPostsContext';
import { FlatList } from 'react-native';
import { Post } from '../components/Post';
import { SText } from '../styles/text';

export default function SavedPostsScreen() {
  const { posts, removePost } = useSavedPostsContext();

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
              <Post showSaveListing={false} post={item} />
              <RemoveListing onPress={() => removePost(item.id)}>
                <SText>Remove</SText>
              </RemoveListing>
            </PostContainer>
          );
        }}
      />
    </SavedPostsContainer>
  );
}

const SavedPostsContainer = styled.View`
  flex: 1;
  background-color: #222;
`;

const NoPostsContainer = styled.View`
  flex: 1;
  background-color: #222;
  align-items: center;
  justify-content: center;
`;

const PostContainer = styled.View`
  flex-direction: column;
`;

const RemoveListing = styled.TouchableOpacity`
  margin-left: 20px;
  background-color: #444;
  padding: 10px;
  justify-content: center;
  align-items: center;
  width: 200px;
`;
