import React from 'react';
import AppNavigator from './app.navigator';
import AuthNavigator from './auth.navigator';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export const Navigation = () => {
  const is_authenticated = useSelector(
    state => state.authReducer.is_authenticated,
  );
  return (
    <NavigationContainer>
      {!is_authenticated ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
