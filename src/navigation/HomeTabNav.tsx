import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { HomeScreen } from '../screens/HomeScreen';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Router } from './ExploreNavigator';
import { ProfileScreen } from '../screens/Profile';

const Tab = createBottomTabNavigator<RootTabParamList>();

export const HomeTabNavigator = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#f15454',
      }}
    >
      <Tab.Screen
        name='Explore'
        component={Router}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='search1' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Saved'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='hearto' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='AirBnB'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='airbnb' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Messages'
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name='message-square' size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name='user' size={24} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

type RootTabParamList = {
  Explore: undefined;
  Saved: undefined;
  AirBnB: undefined;
  Messages: undefined;
  Profile: undefined;
};
