/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider} from 'react-redux';
import configureStore from './src/services/reducers/index';
import rootSaga from './src/services/saga';
import App from './App';
import {name as appName} from './app.json';

const {store, runSaga} = configureStore();
runSaga(rootSaga);

AppRegistry.registerComponent(appName, () => () =>(
  <Provider store={store}>
    <PaperProvider>
      <App />
    </PaperProvider>
  </Provider>
));
