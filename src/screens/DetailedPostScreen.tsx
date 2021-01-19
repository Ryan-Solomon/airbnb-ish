import React, { FC } from 'react';
import { DetailedPost } from '../components/DetailedPost';
import styled from 'styled-components/native';
import { TPost } from '../types/appTypes';
import { TStatus } from './SearchResults';
import { API, graphqlOperation } from 'aws-amplify';
import { getPost } from './../graphql/queries';

type Props = {
  route: {
    params: {
      itemId: string;
    };
  };
};

export const DetailedPostScreen: FC<Props> = ({ route }) => {
  const { itemId } = route.params;
  const [post, setPost] = React.useState<TPost>();
  const [status, setStatus] = React.useState<TStatus>('pending');

  React.useEffect(() => {
    const getPosts = async () => {
      setStatus('pending');
      try {
        const res = (await API.graphql(
          graphqlOperation(getPost, {
            id: itemId,
          })
        )) as any;
        const data = res.data.getPost as TPost;
        setPost(data);
        setStatus('fulfilled');
      } catch (e) {
        console.log(e.message);
        setStatus('error');
      }
    };

    getPosts();
  }, []);

  if (status === 'pending')
    return (
      <LoadingContainer>
        <LoadingText>Loading...</LoadingText>
      </LoadingContainer>
    );
  if (status === 'error' || !post)
    return (
      <LoadingContainer>
        <LoadingText>Something went wrong</LoadingText>
      </LoadingContainer>
    );

  return (
    <DetailedPostContainer>
      <DetailedPost post={post} />
    </DetailedPostContainer>
  );
};

const DetailedPostContainer = styled.View`
  flex: 1;
  background-color: #222;
`;

const LoadingContainer = styled.View`
  flex: 1;
  background-color: #222;
  align-items: center;
  justify-content: center;
`;

const LoadingText = styled.Text`
  color: #fff;
  font-size: 20px;
`;
