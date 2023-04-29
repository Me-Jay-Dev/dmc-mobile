import {
  USER_LOGIN,
  USER_LOGIN_COMPLETED,
  USER_LOGOUT,
} from '../../utils/constants';

export const userLogin = payload => ({
  type: USER_LOGIN,
  payload,
});

export const userLoginCompleted = () => ({
  type: USER_LOGIN_COMPLETED,
});

export const userLogout = () => ({
  type: USER_LOGOUT,
});
