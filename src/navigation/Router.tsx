import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DestinationSearch } from './../screens/DestinationSearch';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './../screens/HomeScreen';
import { GuestsScreen } from './../screens/GuestsScreen';

// Stack Navigator

const Stack = createStackNavigator<RootStackParamList>();

export const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'DestinationSearch'}
          component={DestinationSearch}
          options={{ title: 'Search a destination' }}
        />
        <Stack.Screen
          name={'Guests'}
          component={GuestsScreen}
          options={{ title: 'Who will be your guests?' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

type RootStackParamList = {
  DestinationSearch: undefined;
  Guests: undefined;
};

// Tab Navigator

const Tab = createBottomTabNavigator<RootTabParamList>();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Home' component={HomeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

type RootTabParamList = {
  Home: undefined;
};
