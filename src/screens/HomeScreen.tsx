import React from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const HomeScreen = () => {
  return (
    <SContainer>
      <ImageBackground
        source={require('../../assets/images/wallpaper.jpg')}
        style={styles.backgroundImage}
      />
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
