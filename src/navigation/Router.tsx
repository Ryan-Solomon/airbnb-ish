import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DestinationSearch } from './../screens/DestinationSearch';
import { GuestsScreen } from './../screens/GuestsScreen';
import { HomeTabNavigator } from './HomeTabNav';
import { DetailedPostScreen } from '../screens/DetailedPostScreen';

// Stack Navigator

const Stack = createStackNavigator<RootStackParamList>();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='DestinationSearch'
          component={DestinationSearch}
          options={{ title: 'Search a destination' }}
        />
        <Stack.Screen
          name='Guests'
          component={GuestsScreen}
          options={{ title: 'Who will be your guests?' }}
        />
        <Stack.Screen
          name='DetailedPost'
          component={DetailedPostScreen}
          options={{
            title: 'Search your destination',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

type RootStackParamList = {
  Home: undefined;
  DestinationSearch: undefined;
  Guests: undefined;
  DetailedPost: undefined;
};
