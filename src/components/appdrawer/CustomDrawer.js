import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {height, scaleFont, width} from '../../utils/utils';
import TabBarIcon from './TabBarIcon';
import {useDispatch} from 'react-redux';
import {USER_LOGOUT} from '../../utils/constants';
import {userLogout} from '../../services/actions/auth.action';

const CustomDrawer = props => {
  const dispatch = useDispatch();
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottomColor: '#DEDEDE',
          borderBottomWidth: 1,
          marginBottom: 5,
          padding: 10,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 2,
          }}>
          <Image
            style={{width: width * 0.20, height: height * 0.15}}
            source={require('../../../assets/icon.png')}
          />
        </View>
      </View>

      <ScrollView
        contentContainerStyle={{flex: 1, justifyContent: 'space-between'}}>
        <DrawerItemList {...props} />

        <View
          style={{
            flex: 1,
            borderColor: '#ff0000',
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity
            onPress={async () => dispatch(userLogout())}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'flex-start',
              paddingHorizontal: 20,
              paddingVertical: 30,
            }}>
            <View style={{flex: 1}}>
              <TabBarIcon
                icon={'md-log-out-outline'}
                isFromCustomDrawer={true}
              />
            </View>
            <Text
              style={{
                width: '150%',
                flex: 4,
                marginLeft: 10,
              }}
              color="#19A1AA"
              size={scaleFont(12)}
              type="bold">
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({});
