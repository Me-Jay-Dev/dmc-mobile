import {all} from 'redux-saga/effects';
import {loginUser, logoutUser} from './auth.saga';
import {getAllItems} from './items.saga';

export default function* rootSaga() {
  yield all([
    //auth
    loginUser(),
    logoutUser(),
    getAllItems(),
  ]);
}
