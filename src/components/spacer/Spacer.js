import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Spacer = ({size = 's'}) => {
  return (
    <View
      style={{
        height:
          size === 's'
            ? 8
            : size === 'm'
            ? 16
            : size === 'l'
            ? 32
            : size === 'xl' && 64,
      }}></View>
  );
};

export default Spacer;
