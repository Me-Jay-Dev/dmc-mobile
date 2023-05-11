import {put, call, takeEvery} from 'redux-saga/effects';
import {
  DEVICE_MASTERLIST,
  DEVICE_MASTERLIST_COMPLETED,
  DEVICE_MASTERLIST_ERROR,
  DEVICE_MASTERLIST_REQUEST,
} from '../../utils/constants';
import {fetchAllItems} from '../api/items.api';
import {toastAlert} from '../../utils/utils';

export function* getAllItemsAsync(action) {
  try {
    yield put({type: DEVICE_MASTERLIST_REQUEST});

    const response = yield call(fetchAllItems, action.payload);
    console.log('REsponsess', response);
    if (response !== undefined && !response.success) {
      yield put({type: DEVICE_MASTERLIST_ERROR});
      if (response.error !== undefined) {
        // yield call(alert('Server/Network Error'));
        yield call(
          toastAlert({type: 'error', message: 'Server/Network Error'}),
        );
      } else {
        yield call(toastAlert({type: 'error', message: response.message}));
      }
    } else {
      yield put({type: DEVICE_MASTERLIST_COMPLETED, payload: response.data});
    }
    // console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export function* getAllItems() {
  yield takeEvery(DEVICE_MASTERLIST, getAllItemsAsync);
}
