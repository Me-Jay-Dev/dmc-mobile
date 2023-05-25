import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import CashInScreen from '../features/inventory/screens/cashin.screen';
import MainTabs from './drawer.navigator';
import {
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {horizontalScale, scaleFont} from '../utils/utils';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RightButton from '../components/headerRight/rightButton.component';
import StockSelectedItemListScreen from '../features/inventory/screens/stock/stockRequest/stockSelectedItemList.screen';
import {Button} from 'react-native-paper';
import {form, globalStyles} from '../utils/styles';
import CustomMenu from '../components/menu/menu.component';
import StockRequestScreen from '../features/inventory/screens/stock/stockRequest/stockRequest';
import StockItemListScreen from '../features/inventory/screens/stock/stockItemList';
import StockLoadOutScreen from '../features/inventory/screens/stock/stockTransfer/stockLoadOut/stockLoadOut.screen';
import LoadOutSelectedItemListSreen from '../features/inventory/screens/stock/stockTransfer/stockLoadOut/loadOutSeletedItemList.screen';
import StockLoadInScreen from '../features/inventory/screens/stock/stockTransfer/stockLoadIn/stockLoadIn.screen';
import {toastAlert} from '../utils/utils';
import RcpScreen from '../features/rcp/screens/rcp.screen';
const Stack = createStackNavigator();

const Request = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="StockRequest"
      component={StockRequestScreen}
      options={({navigation, route}) => ({
        headerStyle: {
          backgroundColor: '#f8f8f8',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: '500',
        },
        headerShown: true,
        headerTitle: '',
        headerLeft: () => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('StockItemList', {isStockTransfer: false})
              }>
              <MaterialCommunityIcons
                name="arrow-left"
                color={'black'}
                size={25}
                style={{
                  // lineHeight: horizontalScale(50),
                  marginRight: 25,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                ...globalStyles.headerTitleText,
              }}>
              Select Request
            </Text>
          </View>
        ),
        headerRight: () => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: 10,
            }}>
            <Text
              style={{
                ...globalStyles.headerTitleText,
              }}>
              Next
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('StockSelectedItemList')}>
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
            </TouchableOpacity>
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="StockSelectedItemList"
      component={StockSelectedItemListScreen}
      options={({navigation, route}) => ({
        headerStyle: {
          backgroundColor: '#f8f8f8',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: '500',
        },
        headerShown: true,

        headerTitle: () => (
          <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View
              style={{
                marginRight: 50,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Σ Qty</Text>
              <View
                style={{
                  marginLeft: 10,
                  marginLeft: 10,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                  ...globalStyles.filterContainter,
                  width: 40,
                  height: 40,
                  backgroundColor: '#f8f8f8',
                }}>
                <Text style={{fontSize: 20, backgroundColor: '#f8f8f8'}}>
                  68
                </Text>
              </View>
            </View>
          </View>
        ),
        headerLeft: () => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('StockRequest', {isStockTransfer: false})
              }>
              <MaterialCommunityIcons
                name="arrow-left"
                color={'black'}
                size={25}
                style={{
                  // lineHeight: horizontalScale(50),
                  marginRight: 25,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                ...globalStyles.headerTitleText,
              }}>
              Selected Item
            </Text>
          </View>
        ),
        headerRight: () => (
          <View
            style={{
              flex: 1,
              marginRight: 20,
              justifyContent: 'center',
            }}>
            <Button
              mode="contained"
              onPress={() => {
                navigation.navigate('Inventory', {isStockTransfer: false});
              }}
              labelStyle={{
                fontSize: 20,
              }}
              style={{
                ...globalStyles.headerTitleText,
                backgroundColor:'black',
              }}>
              Submit
            </Button>
          </View>
        ),
        title: 'Aligned Center',
        headerTitleAlign: 'center',
        // headerStyle: {
        //   justifyContent: 'space-between',
        // },
      })}
    />
  </Stack.Navigator>
);
const LoadIn = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="StockLoadIn"
      component={StockLoadInScreen}
      options={({navigation, route}) => ({
        headerStyle: {
          backgroundColor: '#f8f8f8',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: '500',
        },
        headerShown: true,
        headerTitle: '',
        headerLeft: () => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('StockItemList', {isStockTransfer: false})
              }>
              <MaterialCommunityIcons
                name="arrow-left"
                color={'black'}
                size={25}
                style={{
                  // lineHeight: horizontalScale(50),
                  marginRight: 25,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                ...globalStyles.headerTitleText,
              }}>
              StockLoadIn
            </Text>
          </View>
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 10,
              padding: 10,
              borderRadius: 20,
            }}
            onPress={() => null}>
            <MaterialCommunityIcons
              name="cloud-sync-outline"
              color={'black'}
              size={25}
              style={{
                // lineHeight: horizontalScale(50),
                alignSelf: 'center',
                color: 'black',
                marginLeft: 10,
              }}
            />
            <Text
              style={{
                ...globalStyles.headerTitleText,
              }}>
              SYNC
            </Text>
          </TouchableOpacity>
        ),
      })}
    />
  </Stack.Navigator>
);
const LoadOut = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="StockLoadOut"
      component={StockLoadOutScreen}
      options={({navigation, route}) => ({
        headerStyle: {
          backgroundColor: '#f8f8f8',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: '500',
        },
        headerShown: true,
        headerTitle: '',
        headerLeft: () => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('StockItemList', {isStockTransfer: false})
              }>
              <MaterialCommunityIcons
                name="arrow-left"
                color={'black'}
                size={25}
                style={{
                  // lineHeight: horizontalScale(50),
                  marginRight: 25,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                ...globalStyles.headerTitleText,
              }}>
              Select LoadOut
            </Text>
          </View>
        ),
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
            <TouchableOpacity
              onPress={() => navigation.navigate('LoadOutSelectedItemList')}>
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
            </TouchableOpacity>
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="LoadOutSelectedItemList"
      component={LoadOutSelectedItemListSreen}
      options={({navigation, route}) => ({
        headerStyle: {
          backgroundColor: '#f8f8f8',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: '500',
        },
        headerShown: true,
        headerTitle: '',
        headerLeft: () => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('StockItemList', {isStockTransfer: false})
              }>
              <MaterialCommunityIcons
                name="arrow-left"
                color={'black'}
                size={25}
                style={{
                  // lineHeight: horizontalScale(50),
                  marginRight: 25,
                  alignSelf: 'center',
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                ...globalStyles.headerTitleText,
              }}>
              Selected LoadOut
            </Text>
          </View>
        ),
      })}
    />
  </Stack.Navigator>
);

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
        headerStyle: {
          backgroundColor: '#f8f8f8',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: '500',
        },
      }}
    />
    <Stack.Screen
      name="StockItemList"
      component={StockItemListScreen}
      options={{
        headerShown: true,
        headerStyle: {
          backgroundColor: '#f8f8f8',
        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: '500',
        },
      }}
    />
    <Stack.Screen
      name="Request"
      component={Request}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="LoadIn"
      component={LoadIn}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="LoadOut"
      component={LoadOut}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);
export default AppNavigator;
