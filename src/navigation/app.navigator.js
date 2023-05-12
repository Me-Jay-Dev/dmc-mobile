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
import {form} from '../utils/styles';
import CustomMenu from '../components/menu/menu.component';
import StockRequestScreen from '../features/inventory/screens/stock/stockRequest/stockRequest';
import StockItemListScreen from '../features/inventory/screens/stock/stockItemList';
import StockLoadOutScreen from '../features/inventory/screens/stock/stockTransfer/stockLoadOut/stockLoadOut.screen';
import LoadOutSelectedItemListSreen from '../features/inventory/screens/stock/stockTransfer/stockLoadOut/loadOutSeletedItemList.screen';
import StockLoadInScreen from '../features/inventory/screens/stock/stockTransfer/stockLoadIn/stockLoadIn.screen';

const Stack = createStackNavigator();

const Request = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="StockRequest"
      component={StockRequestScreen}
      options={({navigation, route}) => ({
        headerShown: true,
        headerTitle: '',
        headerLeft: () => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <TouchableWithoutFeedback
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
            </TouchableWithoutFeedback>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
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
                fontSize: 20,
                fontWeight: '500',
                textAlign: 'center',
              }}>
              Next
            </Text>
            <TouchableWithoutFeedback
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
            </TouchableWithoutFeedback>
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="StockSelectedItemList"
      component={StockSelectedItemListScreen}
      // options={({navigation, route}) => ({
      //   headerShown: true,
      //   headerStyle: {
      //     backgroundColor: '#f4511e',
      //   },
      //   headerRight: () => (
      //     <View
      //       style={{
      //         flex: 1,
      //         flexDirection: 'row',
      //         alignItems: 'center',
      //         alignContent: 'space-between',
      //         backgroundColor: 'yellow',
      //         justifyContent: 'space-between',
      //       }}>
      //       <Text
      //         style={{
      //           fontSize: 20,
      //           fontWeight: '500',
      //           textAlign: 'center',
      //         }}>
      //         Submit
      //       </Text>
      //       <Button
      //         mode="contained"
      //         onPress={() => null}
      //         contentStyle={{
      //           alignSelf: 'center',
      //           textAlignVertical: 'center',
      //           textAlign: 'center',
      //         }}
      //         labelStyle={{
      //           alignSelf: 'center',
      //           textAlignVertical: 'center',
      //           textAlign: 'center',
      //           fontSize: 20,
      //         }}
      //         style={{
      //           alignSelf: 'center',
      //           textAlignVertical: 'center',
      //           textAlign: 'center',

      //           backgroundColor: 'black',
      //         }}>
      //         Submit
      //       </Button>
      //     </View>
      //   ),
      // })}
      options={({navigation, route}) => ({
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
                  width: 40,
                  height: 40,
                  borderWidth: 0.5,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 20}}>68</Text>
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
            <TouchableWithoutFeedback
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
            </TouchableWithoutFeedback>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
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
              onPress={() =>
                navigation.navigate('Inventory', {isStockTransfer: false})
              }
              labelStyle={{
                fontSize: 20,
              }}
              style={{
                backgroundColor: 'black',
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
        headerShown: true,
        headerTitle: '',
        headerLeft: () => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <TouchableWithoutFeedback
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
            </TouchableWithoutFeedback>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
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
              backgroundColor: 'black',
            }}
            onPress={() => null}>
            <MaterialCommunityIcons
              name="cloud-sync-outline"
              color={'black'}
              size={25}
              style={{
                // lineHeight: horizontalScale(50),
                alignSelf: 'center',
                color: 'white',
                marginLeft:10
              }}
            />
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
                color: 'white',
                textAlign: 'center',
                marginRight:10

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
        headerShown: true,
        headerTitle: '',
        headerLeft: () => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <TouchableWithoutFeedback
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
            </TouchableWithoutFeedback>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
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
            <TouchableWithoutFeedback
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
            </TouchableWithoutFeedback>
          </View>
        ),
      })}
    />
    <Stack.Screen
      name="LoadOutSelectedItemList"
      component={LoadOutSelectedItemListSreen}
      options={({navigation, route}) => ({
        headerShown: true,
        headerTitle: '',
        headerLeft: () => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <TouchableWithoutFeedback
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
            </TouchableWithoutFeedback>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '500',
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
      }}
    />
    <Stack.Screen
      name="StockItemList"
      component={StockItemListScreen}
      options={{
        headerShown: true,
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
