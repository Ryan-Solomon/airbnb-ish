import React, { FC } from 'react';
import styled from 'styled-components/native';
import { TPost } from '../types/appTypes';
import { Image, StyleSheet, useWindowDimensions } from 'react-native';
import { SText } from '../styles/text';

type TProps = {
  post: TPost;
};

export const PostCarousel: FC<TProps> = ({ post }) => {
  const { image, title, bed, bedroom, newPrice, totalPrice, type } = post;
  const windowWidth = useWindowDimensions().width;

  return (
    <SContainer width={windowWidth - 100}>
      <Image style={{ ...styles.image }} source={{ uri: image }} />
      <ContentContainer>
        <SText margin='2px 0px' fontColor='#d0d0d0'>
          {bed} Bed {bedroom} Bath
        </SText>

        <SText margin='2px 0px' fontColor='#d3d3d3'>
          ${newPrice}/night
        </SText>
      </ContentContainer>
    </SContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: 150,
    height: 150,
    borderRadius: 15,
    marginBottom: 5,
  },
});

type ContainerProps = { width: number };

const SContainer = styled.View<ContainerProps>`
  flex-direction: row;
  width: ${({ width }) => width.toFixed(0)}px;
  background-color: #464646;
  border-radius: 10px;
  margin: 4px;
`;

const ContentContainer = styled.View`
  flex: 1;
  padding: 10px 15px;
  justify-content: space-evenly;
`;
