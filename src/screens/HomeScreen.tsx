import React from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { SText } from '../styles/text';
import { STouchableOpacity } from './../styles/button';

export const HomeScreen = () => {
  return (
    <SContainer>
      <ImageBackground
        source={require('../../assets/images/wallpaper.jpg')}
        style={styles.backgroundImage}
      >
        <SImageContent>
          <STextInput placeholder='Search' />
          <STextContainer>
            <SText fontSize='36px'>Go</SText>
            <SText fontSize='36px'>Near</SText>
          </STextContainer>
          <STouchableOpacity padding='12px'>
            <SText>Explore nearby stays</SText>
          </STouchableOpacity>
        </SImageContent>
      </ImageBackground>
    </SContainer>
  );
};

// Styles

const styles = StyleSheet.create({
  backgroundImage: {
    height: 500,
    width: '100%',
    resizeMode: 'cover',
  },
});

const SContainer = styled.View``;

const STextInput = styled.TextInput`
  width: 95%;
  background-color: white;
  height: 40px;
  margin-top: 40px;
`;

const SImageContent = styled.View`
  justify-content: space-between;
  height: 100%;
`;

const STextContainer = styled.View``;
