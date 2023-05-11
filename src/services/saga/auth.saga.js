import {put, call, takeEvery} from 'redux-saga/effects';
import {userLogin} from '../api/auth.api';
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_ERROR,
  USER_LOGIN_COMPLETED,
  USER_LOGIN,
  USER_LOGOUT_COMPLETED,
  USER_LOGOUT,
} from '../../utils/constants';
import {toastAlert} from '../../utils/utils';

export function* loginUserAsync(action) {
  try {
    console.log('saga loginuserasync');
    yield put({type: USER_LOGIN_REQUEST});

    const response = yield call(userLogin, action.payload);

    if (response !== undefined && !response.success) {
      yield put({type: USER_LOGIN_ERROR});
      if (response.error !== undefined) {
        // yield call(alert('Server/Network Error'));
        yield call(
          toastAlert({type: 'error', message: 'Server/Network Error'}),
        );
      } else {
        yield call(toastAlert({type: 'error', message: response.message}));
      }
    } else {
      yield put({type: USER_LOGIN_COMPLETED, payload: response?.data});
    }
    // console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export function* loginUser() {
  yield takeEvery(USER_LOGIN, loginUserAsync);
}
export function* logoutUserAsync() {
  yield put({type: USER_LOGOUT_COMPLETED});
}

export function* logoutUser() {
  yield takeEvery(USER_LOGOUT, logoutUserAsync);
}
