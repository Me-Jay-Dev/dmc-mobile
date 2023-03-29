import React from 'react';
import {AppNavigator} from './app.navigator';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './auth.navigator';
export const Navigation = () => {
  const {isAuthenticated} = false;

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
