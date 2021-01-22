import React, { FC, useState } from 'react';
import styled from 'styled-components/native';
import { TPost } from '../types/appTypes';
import { Image, StyleSheet } from 'react-native';
import { SText } from '../styles/text';
import { useNavigation } from '@react-navigation/native';
import { useSavedPostsContext } from '../context/savedPostsContext';

const days = 3;

type TProps = {
  post: TPost;
  showSaveListing?: boolean;
};

export const Post: FC<TProps> = ({ post, showSaveListing = true }) => {
  const { image, title, bed, bedroom, newPrice, type, id } = post;
  const navigation = useNavigation();
  const { addPost } = useSavedPostsContext();
  const [saved, setSaved] = useState(false);

  const setSavedPost = () => {
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  const navigateToDetailedPost = () => {
    navigation.navigate('DetailedPost', {
      itemId: id,
    });
  };

  return (
    <SContainer onPress={navigateToDetailedPost}>
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
      <SaveListingContainer>
        <SText fontSize='20px' margin='2px 0px' fontColor='#f5f5f5'>
          ${newPrice * days} total
        </SText>
        {showSaveListing && (
          <SavePostButton
            onPress={() => {
              addPost(post);
              setSavedPost();
            }}
          >
            {saved ? <SText>Saved!</SText> : <SText>Save Listing</SText>}
          </SavePostButton>
        )}
      </SaveListingContainer>
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

const SaveListingContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const SavePostButton = styled.TouchableOpacity`
  background: #444;
  padding: 10px;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  border-radius: 4px;
`;
