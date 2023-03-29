import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CashInScreen from '../features/inventory/components/cashin.screen';

const Stack = createStackNavigator();
const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="CashIn" component={CashInScreen} />
  </Stack.Navigator>
);
export default AppNavigator;
