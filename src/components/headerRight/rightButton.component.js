import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

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
          fontSize: 20,
          fontWeight: '500',
          textAlign: 'center',
        }}>
        Request
      </Text>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('StockItemList')}>
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
  );
};

export default RightButton;

const styles = StyleSheet.create({});
