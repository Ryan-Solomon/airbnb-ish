import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
// import SearcResultsScreen from '../screens/SearchResults';
// import SearchResultsTabNavigator from './SearchResultsTabNavigator';

const Stack = createStackNavigator<ExploreNavigatorTypes>();

export const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Welcome'}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      {/* <Stack.Screen
        name={'SearchResults'}
        component={SearchResultsTabNavigator}
        options={{
          title: 'Search your destination',
        }}
      /> */}
    </Stack.Navigator>
  );
};

type ExploreNavigatorTypes = {
  Welcome: undefined;
};
