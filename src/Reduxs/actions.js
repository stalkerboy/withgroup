import {
  USER_SIGN_IN_FETCH,
  USER_SIGN_IN_ERROR,
  USER_SIGN_IN_DATA,
} from './constant';

export const userSignIn = (payload) => ({
  type: USER_SIGN_IN_FETCH,
  payload,
});
export const userSignInData = (payload) => ({
  type: USER_SIGN_IN_DATA,
  payload,
});
export const userSignInError = (payload) => ({
  type: USER_SIGN_IN_ERROR,
  payload,
});
