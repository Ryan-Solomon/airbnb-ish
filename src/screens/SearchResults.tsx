import React from 'react';
import { Post } from '../components/Post';
import { feedData } from './../../assets/data/feed';
import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../graphql/queries';
import { TPost } from '../types/appTypes';

export const SearchResults = () => {
  const [feedData, setFeedData] = React.useState<TPost[]>([]);

  React.useEffect(() => {
    const getPosts = async () => {
      try {
        const res = (await API.graphql(graphqlOperation(listPosts))) as any;
        const data = res.data.listPosts.items as TPost[];
        setFeedData(data);
      } catch (e) {}
    };

    getPosts();
  }, []);

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
