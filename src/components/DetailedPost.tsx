import React, { FC } from 'react';
import { TPost } from '../types/appTypes';
import styled from 'styled-components/native';
import { StyleSheet, Image } from 'react-native';
import { SText } from '../styles/text';
import { useSavedPostsContext } from '../context/savedPostsContext';

type Props = {
  post: TPost;
};

export const DetailedPost: FC<Props> = ({ post }) => {
  const { image, title, bed, bedroom, newPrice, type, id, description } = post;
  const { addPost } = useSavedPostsContext();

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
      <SavePostButton onPress={() => addPost(post)}>
        <SText fontSize='16px'>Save Listing</SText>
      </SavePostButton>
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

const SavePostButton = styled.TouchableOpacity`
  background: #747474;
  padding: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-top: 16px;
`;
