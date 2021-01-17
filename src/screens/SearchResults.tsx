import React from 'react';
import { Post } from '../components/Post';
import styled from 'styled-components/native';
import { FlatList, Text, View } from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import { listPosts } from '../graphql/queries';
import { TPost } from '../types/appTypes';

type TStatus = 'pending' | 'error' | 'fulfilled';

export const SearchResults = () => {
  const [feedData, setFeedData] = React.useState<TPost[]>([]);
  const [status, setStatus] = React.useState<TStatus>('pending');

  React.useEffect(() => {
    const getPosts = async () => {
      setStatus('pending');
      try {
        const res = (await API.graphql(graphqlOperation(listPosts))) as any;
        const data = res.data.listPosts.items as TPost[];
        setFeedData(data);
        setStatus('fulfilled');
      } catch (e) {
        console.log(e.message);
        setStatus('error');
      }
    };

    getPosts();
  }, []);

  if (status === 'pending') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading..</Text>
      </View>
    );
  }

  if (status === 'error') {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Something went wrong</Text>
      </View>
    );
  }

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
