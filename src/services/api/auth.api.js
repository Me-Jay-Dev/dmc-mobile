const BASE_URI = '3.0.112.130';

// Login
export function* userLogin(payload) {
  const {username, password} = payload;
  console.log('Payload sent: ', payload);
  return yield fetch(
    `http://3.0.112.130/api/v1/login?username=${username}&password=${password}`,
    {
      method: 'POST',
      body: payload,
    },
  )
    .then(response => response.json())
    .catch(error => {
      console.log('error', error);
      return error;
    });
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
