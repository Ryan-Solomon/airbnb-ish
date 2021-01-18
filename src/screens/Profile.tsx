import React from 'react';
import styled from 'styled-components/native';
import { Auth } from 'aws-amplify';
import { Text } from 'react-native';

export const ProfileScreen = () => {
  const logout = () => {
    Auth.signOut();
  };
  return (
    <ProfileContainer>
      <LogoutButton onPress={logout}>
        <ButtonText>Logout</ButtonText>
      </LogoutButton>
    </ProfileContainer>
  );
};

const ProfileContainer = styled.View`
  flex: 1;
  background-color: #222;
  justify-content: center;
  align-items: center;
`;

const LogoutButton = styled.TouchableOpacity`
  background-color: #3a3a3a;
  width: 150px;
  padding: 14px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`;
