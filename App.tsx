import React from 'react';
import styled from 'styled-components/native';
import 'react-native-gesture-handler';
import { Router } from './src/navigation/Router';
import { HomeScreen } from './src/screens/HomeScreen';
// @ts-ignore
import { withAuthenticator } from 'aws-amplify-react-native';

import Amplify from 'aws-amplify';
// @ts-ignore
import config from './src/aws-exports';
import { ContextProvider } from './src/context/AppContext';
Amplify.configure(config);

function App() {
  return (
    <>
      <ContextProvider>
        <Router />
      </ContextProvider>
    </>
  );
}

export default withAuthenticator(App);

const SContainer = styled.View``;
