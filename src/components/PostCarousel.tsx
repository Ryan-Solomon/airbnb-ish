import React, { FC } from 'react';
import styled from 'styled-components/native';
import { TPost } from '../types/appTypes';
import { Image, StyleSheet, useWindowDimensions } from 'react-native';
import { SText } from '../styles/text';
import { useNavigation } from '@react-navigation/native';
import { useSavedPostsContext } from '../context/savedPostsContext';

type TProps = {
  post: TPost;
};

export const PostCarousel: FC<TProps> = ({ post }) => {
  const { image, title, bed, bedroom, newPrice, totalPrice, type, id } = post;
  const windowWidth = useWindowDimensions().width;
  const navigation = useNavigation();
  const { addPost } = useSavedPostsContext();

  return (
    <SContainer
      onPress={() =>
        navigation.navigate('DetailedPost', {
          itemId: id,
        })
      }
      style={styles.container}
      width={windowWidth - 100}
    >
      <Image style={{ ...styles.image }} source={{ uri: image }} />
      <ContentContainer>
        <SText margin='2px 0px' fontColor='#d0d0d0'>
          {bed} Bed {bedroom} Bath
        </SText>

        <SText margin='2px 0px' fontColor='#d3d3d3'>
          ${newPrice}/night
        </SText>
        <SavePostButton onPress={() => addPost(post)}>
          <SText fontSize='12px'>Save Listing</SText>
        </SavePostButton>
      </ContentContainer>
    </SContainer>
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
    width: 150,
    height: '100%',
    borderRadius: 15,
    marginBottom: 5,
  },
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
});

type ContainerProps = { width: number };

const SContainer = styled.TouchableOpacity<ContainerProps>`
  flex-direction: row;
  width: ${({ width }) => width.toFixed(0)}px;
  background-color: #464646;
  border-radius: 16px;
  margin: 8px;
  height: 150px;
`;

const ContentContainer = styled.View`
  /* flex: 1; */
  padding: 10px 15px;
  justify-content: space-evenly;
`;

const SavePostButton = styled.TouchableOpacity`
  background: #747474;
  padding: 8px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  margin-top: 2px;
`;
