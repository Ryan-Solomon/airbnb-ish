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
import { SavedPostsContextProvider } from './src/context/savedPostsContext';
import MyTheme from './src/theme';
Amplify.configure(config);

function App() {
  return (
    <>
      <ContextProvider>
        <SavedPostsContextProvider>
          <Router />
        </SavedPostsContextProvider>
      </ContextProvider>
    </>
  );
}

export default withAuthenticator(App, false, [], null, MyTheme);

const SContainer = styled.View``;
