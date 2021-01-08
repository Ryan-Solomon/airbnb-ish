import React, { FC } from 'react';
import styled from 'styled-components/native';
import { TPost } from '../types/appTypes';
import { Image, StyleSheet } from 'react-native';
import { SText } from '../styles/text';

type TProps = {
  post: TPost;
};

export const Post: FC<TProps> = ({ post }) => {
  const { image, description, bed, bedroom, newPrice, totalPrice, type } = post;

  return (
    <SContainer>
      <Image style={styles.image} source={{ uri: image }} />
      <SText margin='2px 0px' fontColor='#949494'>
        {type} - {bed} Bed {bedroom} Bath
      </SText>
      <SText fontSize='20px' margin='2px 0px' fontColor='#212121'>
        {description.substring(0, 100)}...
      </SText>
      <SText margin='2px 0px' fontColor='#727272'>
        {newPrice}/night
      </SText>
      <SText fontSize='20px' margin='2px 0px' fontColor='#383838'>
        {totalPrice} total
      </SText>
    </SContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 200,
    borderRadius: 15,
    marginBottom: 5,
  },
});

const SContainer = styled.View`
  margin-top: 10px;
  padding: 20px;
`;
