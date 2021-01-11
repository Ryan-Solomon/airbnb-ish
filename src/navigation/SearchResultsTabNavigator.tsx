import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SearchResults } from './../screens/SearchResults';
import { SearchResultsMap } from '../screens/SearchResultsMap';

const Tab = createMaterialTopTabNavigator<SearchResultsTabTypes>();

export const SearchResultsTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
        indicatorStyle: {
          backgroundColor: '#f15454',
        },
      }}
    >
      <Tab.Screen name='List' component={SearchResults} />
      <Tab.Screen name='Map' component={SearchResultsMap} />
    </Tab.Navigator>
  );
};

type SearchResultsTabTypes = {
  List: undefined;
  Map: undefined;
};

// Prevent swipe nav
