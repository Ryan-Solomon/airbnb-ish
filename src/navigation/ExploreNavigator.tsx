import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { SearchResults } from '../screens/SearchResults';
import { SearchResultsTabNavigator } from './SearchResultsTabNavigator';
import { DetailedPostScreen } from '../screens/DetailedPostScreen';

const Stack = createStackNavigator<ExploreNavigatorTypes>();

export const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Welcome'
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name='SearchResults'
        component={SearchResultsTabNavigator}
        options={{
          title: 'Search your destination',
        }}
      />
    </Stack.Navigator>
  );
};

type ExploreNavigatorTypes = {
  Welcome: undefined;
  SearchResults: undefined;
};
