import React, { FC } from 'react';
import { TPost } from '../types/appTypes';
import styled from 'styled-components/native';
import { StyleSheet, Image } from 'react-native';
import { SText } from '../styles/text';

type Props = {
  post: TPost;
};

export const DetailedPost: FC<Props> = ({ post }) => {
  const { image, title, bed, bedroom, newPrice, type, id, description } = post;

  return (
    <SContainer>
      <Image style={styles.image} source={{ uri: image }} />
      <SText margin='2px 0px' fontColor='#d8d8d8'>
        {bed} Bed {bedroom} Bath
      </SText>
      <SText fontSize='20px' margin='2px 0px' fontColor='#ebebeb'>
        {type} - {title}
      </SText>
      <SText margin='2px 0px' fontColor='#c1c1c1'>
        ${newPrice}/night
      </SText>
      <SText fontSize='20px' margin='2px 0px' fontColor='#f5f5f5'>
        {description}
      </SText>
    </SContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: 224,
    borderRadius: 15,
    marginBottom: 5,
  },
});

const SContainer = styled.TouchableOpacity`
  padding: 20px;
`;
