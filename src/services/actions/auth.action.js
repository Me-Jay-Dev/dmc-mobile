import {USER_LOGIN, USER_LOGIN_COMPLETED} from '../../utils/constants';

export const userLogin = payload => ({
  type: USER_LOGIN,
  payload,
});

export const userLoginCompleted = () => ({
  type: USER_LOGIN_COMPLETED,
});
