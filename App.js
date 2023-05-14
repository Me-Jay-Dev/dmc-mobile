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
import {Provider as PaperProvider} from 'react-native-paper';
import {Navigation} from './src/navigation';
import {Provider} from 'react-redux';
import configureStore from './src/services/reducers/index';
import rootSaga from './src/services/saga';
import {height, scaleFont, width} from './src/utils/utils';
const {store, runSaga} = configureStore();
runSaga(rootSaga);
const toastConfig = {
  success: props => (
    <BaseToast
      {...props}
      style={{borderLeftColor: 'pink',width: '100%'}}
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
  LogBox.ignoreLogs(['Invalid prop textStyle of type array supplied to Cell']);
  return (
    <Provider store={store}>
      <PaperProvider>
        <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <Navigation />
        </SafeAreaView>
        <Toast config={toastConfig} visibilityTime={6000} position="top" />
      </PaperProvider>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
