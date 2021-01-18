import React, { FC, useState } from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { SText } from '../styles/text';
import { useAppContext } from '../context/AppContext';

type TProps = {
  title: string;
  description: string;
};

export const GuestsCounter: FC<TProps> = ({ title, description }) => {
  const [count, setCount] = React.useState(0);
  const { guests, addGuest, removeGuest } = useAppContext();
  console.log(guests);

  return (
    <SContainer>
      <STextContainer>
        <SText fontSize='20px' fontColor='#ffffff'>
          {title}
        </SText>
        <SText fontColor='#c9c9c9'>{description}</SText>
      </STextContainer>
      <SCountContainer>
        <SPressableContainer>
          <SPressable
            onPress={() => {
              addGuest();
              setCount((c) => c + 1);
            }}
          >
            <AntDesign name='plussquare' size={38} color='white' />
          </SPressable>

          <SText fontColor='#e4e4e4'>{count}</SText>
          <SPressable
            onPress={() => {
              removeGuest();
              setCount((c) => Math.max(c - 1, 0));
            }}
          >
            <AntDesign name='minussquare' size={38} color='white' />
          </SPressable>
        </SPressableContainer>
      </SCountContainer>
    </SContainer>
  );
};

const SContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px 20px;
  border-bottom-width: 1px;
  padding-bottom: 15px;
  border-color: #8d8d8d;
`;

const STextContainer = styled.View``;

const SPressableContainer = styled.View`
  flex-direction: row;
  align-items: center;
  width: 120px;
  justify-content: space-evenly;
`;

const SPressable = styled.TouchableOpacity``;

const SCountContainer = styled.View``;
