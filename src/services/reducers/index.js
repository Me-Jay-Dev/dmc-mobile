import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import authReducer from './auth.reducer';
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({authReducer});

export default () => {
  // const store = compose(applyMiddleware(sagaMiddleware))(createStore)(
  //   rootReducer,
  // );
  const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  return {store, runSaga: sagaMiddleware.run};
};
