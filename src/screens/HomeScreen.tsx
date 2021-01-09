import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { ImageBackground, Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { SText } from '../styles/text';
import { STouchableOpacity } from './../styles/button';

export const HomeScreen = () => {
  const nav = useNavigation();

  return (
    <SContainer>
      <ImageBackground
        source={require('../../assets/images/wallpaper.jpg')}
        style={styles.backgroundImage}
      >
        <SImageContent>
          <STopBtn onPress={() => nav.navigate('DestinationSearch')}>
            <SText fontColor='#222'>Where are you going?</SText>
          </STopBtn>
          <STextContainer>
            <SText fontSize='36px'>Go</SText>
            <SText fontSize='36px'>Near</SText>
          </STextContainer>
          <STouchableOpacity
            borderRadius='15px'
            margin='10px 15px'
            width='50%'
            padding='12px'
            backgroundColor='white'
          >
            <SText fontColor='#222'>Explore nearby stays</SText>
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

const STopBtn = styled.TouchableOpacity`
  width: 95%;
  background-color: white;
  height: 50px;
  margin-top: 40px;
  align-self: center;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  border-radius: 10px;
  position: absolute;
  top: 10px;
`;

const SImageContent = styled.View`
  justify-content: center;
  height: 100%;
`;

const STextContainer = styled.View`
  margin-left: 15px;
  margin-bottom: 15px;
`;
