import axios from 'axios';

const BASE_URI = '3.0.112.130';

//getAllItems
export function* fetchAllItems(payload) {
  const {token, data} = payload;

  console.log('Payload sent: ', payload);
  return yield fetch(`http://3.0.112.130/api/v1/sendStockRequest`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: data,
  })
    .then(response => response.json())
    .catch(error => {
      console.log('error', error);
      return error;
    });
}

//getAllItems
export function* postStockRequest(payload) {
  const {token, data} = payload;

  console.log('Payload sent: ', payload);
  return yield fetch(`http://3.0.112.130/api/v1/sendStockRequest`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: data,
  })
    .then(response => response.json())
    .catch(error => {
      console.log('error', error);
      return error;
    });
}
