import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { DestinationSearch } from './../screens/DestinationSearch';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearch}
          options={{ title: 'Search a destination' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
