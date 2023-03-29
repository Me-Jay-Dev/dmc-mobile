import Constants from 'expo-constants';

const BASE_URI = Constants.expoConfig.extra.base_uri;
// const API_KEY = Constants.expoConfig.extra.api_key

// Login
export function* userLogin(payload) {
  const {username, password} = payload;
  console.log('Payload sent: ', payload);
  return yield fetch(
    `${BASE_URI}/api/v1/login?username=${username}&password=${password}`,
    {
      method: 'POST',
      body: JSON.stringify(payload),
    },
  )
    .then(response => response.json())
    .catch(error => ({error}));
}

// Logout
export function* userLogout(payload) {
  return yield fetch(`${apiUrl}/logout`, {
    method: 'POST',
    headers,
    body: JSON.stringify(payload),
  })
    .then(response => response.json())
    .catch(error => ({error}));
}

export function* userLoginFingerprint(payload) {
  const {username, device_id} = payload;
  // console.log("Payload sent: ", payload);
  return yield fetch(
    `${BASE_URI}/api/api/v1/login/with-fingerprint?api_token=${API_KEY}&username=${username}&device_id=${device_id}`,
    {
      method: 'POST',
      body: JSON.stringify(payload),
    },
  )
    .then(response => response.json())
    .catch(error => ({error}));
}

// verify details
export function* userVerifyDetails(payload) {
  const {lastname, firstname, birthdate, mobilenumber} = payload;
  console.log('Payload sent: ', payload);
  return yield fetch(
    `${BASE_URI}/api/api/v1/registration/verify_details?api_token=${API_KEY}
    &lastname=${lastname}
    &firstname=${firstname}
    &birthdate=${birthdate}
    &mobilenumber=${mobilenumber}`,
    {
      method: 'POST',
      body: JSON.stringify(payload),
    },
  )
    .then(response => response.json())
    .catch(error => ({error}));
}
