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
import StockRequestScreen from '../features/inventory/screens/stock/stockRequest.screen';
import StockItemListScreen from '../features/inventory/screens/stock/stockItemList.screen';
import StockSelectedItemListScreen from '../features/inventory/screens/stock/stockSelectedItemList.screen';
import {Button} from 'react-native-paper';
import {form} from '../utils/styles';

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
              onPress={() => navigation.navigate('StockRequest')}>
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
              Back
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
              onPress={() => navigation.navigate('StockItemList')}>
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
              Back
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
              onPress={() => null}
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
export default AppNavigator;
