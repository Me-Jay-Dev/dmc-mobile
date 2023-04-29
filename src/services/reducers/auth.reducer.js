import {
  USER_LOGIN,
  USER_LOGIN_COMPLETED,
  USER_LOGIN_ERROR,
  USER_LOGIN_REQUEST,
  USER_LOGOUT,
  USER_LOGOUT_COMPLETED,
} from '../../utils/constants';

const INITIAL_STATE = {
  isLoading: false,
  error_message: null,
  is_authenticated: false,
  user_detail: null,
};

export default reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {...state, isLoading: true};
    case USER_LOGIN_ERROR:
      return {...state, isLoading: false};
    case USER_LOGIN_COMPLETED:
      return {
        ...state,
        user_detail: action.payload,
        is_authenticated: true,
        isLoading: false,
      };
    case USER_LOGOUT_COMPLETED:
      return INITIAL_STATE;
    default:
      return state;
  }
};
