import React, { FC } from 'react';
import { DetailedPost } from '../components/DetailedPost';
import styled from 'styled-components/native';

type Props = {
  route: {
    params: {
      itemId: string;
    };
  };
};

export const DetailedPostScreen: FC<Props> = ({ route }) => {
  const { itemId } = route.params;
  console.log(itemId);
  return (
    <DetailedPostContainer>
      <DetailedPost />
    </DetailedPostContainer>
  );
};

const DetailedPostContainer = styled.View`
  flex: 1;
  background-color: #222;
`;
