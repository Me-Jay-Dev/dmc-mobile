import 'react-native-gesture-handler';
import {
  LogBox,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
import {Navigation} from './src/navigation';

import {height, scaleFont, width} from './src/utils/utils';
import { useSelector } from 'react-redux';

const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: 'pink', width: '100%'}}
      contentContainerStyle={{paddingHorizontal: 15}}
      text1Style={{
        fontSize:
          height >= width
            ? scaleFont(16)
            : height <= 400
            ? scaleFont(16)
            : scaleFont(22),
        fontWeight: '400',
      }}
      text2Style={{
        fontSize:
          height >= width
            ? scaleFont(14)
            : height <= 400
            ? scaleFont(14)
            : scaleFont(20),
        fontWeight: '400',
      }}
    />
  ),

  error: props => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize:
          height >= width
            ? scaleFont(16)
            : height <= 400
            ? scaleFont(16)
            : scaleFont(22),
      }}
      text2Style={{
        fontSize:
          height >= width
            ? scaleFont(14)
            : height <= 400
            ? scaleFont(14)
            : scaleFont(20),
      }}
      style={{width: '50%'}}
    />
  ),
};

// const theme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: 'red',
//     secondary: 'black',
//   },
// };
const App = () => {
  const is_authenticated = useSelector(
    state => state.authReducer.is_authenticated,
  );
  const bgColor = !is_authenticated ? '#f8f8f8' : 'white'
  LogBox.ignoreLogs(['Invalid prop textStyle of type array supplied to Cell']);
  return (
    <>
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <StatusBar
            backgroundColor={bgColor}
            barStyle="dark-content"
          />
          <Navigation />
        </SafeAreaView>
        <Toast config={toastConfig} visibilityTime={6000} position="top" />
        </>
  );
};

export default App;

const styles = StyleSheet.create({});
