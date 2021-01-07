import React, { FC } from 'react';
import styled from 'styled-components/native';
import { TPost } from '../types/appTypes';
import { Image, StyleSheet } from 'react-native';

type TProps = {
  post: TPost;
};

export const Post: FC<TProps> = ({ post }) => {
  const { image, description, pricePerNight, totalPrice, type } = post;

  return (
    <SContainer>
      <Image
        style={styles.image}
        source={require('../../assets/images/postImg.jpg')}
      />
    </SContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
});

const SContainer = styled.View`
  margin-top: 10px;
  padding: 20px;
`;
