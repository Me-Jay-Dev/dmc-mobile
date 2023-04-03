import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CashInScreen from '../features/inventory/screens/cashin.screen';
import MainTabs from './drawer.navigator';
import StockRequestScreen from '../features/inventory/screens/stockRequest.screen';

const Stack = createStackNavigator();
const AppNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen
      name="MainTabs"
      component={MainTabs}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="CashIn"
      component={CashInScreen}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="StockRequest"
      component={StockRequestScreen}
      options={{
        headerShown: true,
      }}
    />
  </Stack.Navigator>
);
export default AppNavigator;
