import React, { FC, useState } from 'react';
import styled from 'styled-components/native';
import { AntDesign } from '@expo/vector-icons';
import { SText } from '../styles/text';

type TProps = {
  title: string;
  description: string;
  handlePress: (direction: 'UP' | 'DOWN') => void;
};

export const GuestsCounter: FC<TProps> = ({
  title,
  description,
  handlePress,
}) => {
  const [count, setCount] = useState(0);

  return (
    <SContainer>
      <STextContainer>
        <SText fontSize='20px' fontColor='#333'>
          {title}
        </SText>
        <SText fontColor='#838383'>{description}</SText>
      </STextContainer>
      <SCountContainer>
        <SPressableContainer>
          <SPressable onPress={() => handlePress('UP')}>
            <AntDesign name='plussquare' size={38} color='black' />
          </SPressable>

          <SText fontColor='#222'>{count}</SText>
          <SPressable onPress={() => handlePress('DOWN')}>
            <AntDesign name='minussquare' size={38} color='black' />
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
