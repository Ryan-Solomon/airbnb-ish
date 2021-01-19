import React from 'react';
import { DetailedPost } from '../components/DetailedPost';
import styled from 'styled-components/native';

export const DetailedPostScreen = () => {
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
