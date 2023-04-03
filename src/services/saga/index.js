import {all} from 'redux-saga/effects';
import {loginUser, logoutUser} from './auth.saga';

export default function* rootSaga() {
  yield all([
    //auth
    loginUser(),
  ]);
}
