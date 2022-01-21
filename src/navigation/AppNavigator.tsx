import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LandingPage from '../screens/LandingPage';
import HomePage from '../screens/HomePage';
import TopContributorsPage from '../screens/TopContributorsPage';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const stackOptions = {
    headerShown: false
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='LandingPage' screenOptions={stackOptions}>
        <Stack.Screen name='LandingPage' component={LandingPage} />
        <Stack.Screen name='HomePage' component={HomePage} />
        <Stack.Screen name='TopContributorsPage' component={TopContributorsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;