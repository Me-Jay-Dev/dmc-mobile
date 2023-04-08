import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import CashInScreen from '../features/inventory/screens/cashin.screen';
import MainTabs from './drawer.navigator';
import {
  Button,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {horizontalScale, scaleFont} from '../utils/utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RightButton from '../components/headerRight/rightButton.component';
import StockRequestScreen from '../features/inventory/screens/stock/stockRequest.screen';
import StockItemListScreen from '../features/inventory/screens/stock/stockItemList.screen';

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
      name="StockRequest"
      component={StockRequestScreen}
      options={{
        headerShown: true,

        headerRight: () => <RightButton />,
      }}
    />
    <Stack.Screen
      name="StockItemList"
      component={StockItemListScreen}
      options={{
        headerShown: true,

        headerRight: () => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                textAlign: 'center',
              }}>
              Next
            </Text>
            <TouchableWithoutFeedback>
              <MaterialCommunityIcons
                name="arrow-right"
                color={'black'}
                size={25}
                style={{
                  // lineHeight: horizontalScale(50),
                  marginLeft: 30,
                  alignSelf: 'center',
                }}
              />
            </TouchableWithoutFeedback>
          </View>
        ),
      }}
    />
  </Stack.Navigator>
);
export default AppNavigator;
