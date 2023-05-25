import {StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';
import { globalStyles } from '../../utils/styles';

const RightButton = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
      }}>
      <Text
        style={{
         ...globalStyles.headerTitleText
        }}>
        Request
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Request',{screen:"StockRequest"})}>
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
  );
};

export default RightButton;

const styles = StyleSheet.create({});
