import React from 'react';
import {Appearance} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default props => {
  const {isDarkmode} = Appearance.getColorScheme() === 'dark';

  return (
    <Ionicons
      name={props.icon}
      style={{marginBottom: 4}}
      size={24}
      color={
        props.focused ? (isDarkmode ? 'red' : '#4663ac') : 'rgb(143, 155, 179)'
      }
    />
  );
};
