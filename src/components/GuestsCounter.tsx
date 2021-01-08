import React, { FC, useState } from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { SText } from '../styles/text';

type TProps = {
  title: string;
  description: string;
};

export const GuestsCounter: FC<TProps> = ({ title, description }) => {
  const [count, setCount] = useState(0);

  return (
    <SContainer>
      <STextContainer>
        <SText fontColor='#333'>{title}</SText>
        <SText fontColor='#333'>{description}</SText>
      </STextContainer>
      <SCountContainer>
        <SPressable>
          <AntDesign name='plussquare' size={24} color='black' />
          <SText>{count}</SText>
          <AntDesign name='minussquare' size={24} color='black' />
        </SPressable>
      </SCountContainer>
    </SContainer>
  );
};

const SContainer = styled.View``;

const STextContainer = styled.View``;

const SPressable = styled.TouchableOpacity``;

const SCountContainer = styled.View``;
