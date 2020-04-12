// Imports: Dependencies
import {delay, takeEvery, takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';

// Increase LOGIN Async
function* loginAsync(action) {
  console.log('authsaga action.', action);

  yield put({type: 'LOGIN_ASYNC_STARTED'});
  yield delay(1000);

  try {
    const loginResponse = yield call(login.bind(this, action.data));

    yield put({type: 'LOGIN_ASYNC_FULFILLED', payload: loginResponse});
  } catch (error) {
    yield put({type: 'LOGIN_ASYNC_REJECTED', payload: error});
  }
}

// Generator: Watch Increase LOG
export function* watchLogin() {
  // Take Last Action
  yield takeLatest('LOGIN', loginAsync);
}

const login = payload => {
  console.log('authSaga payload: ', payload);

  //test
  return {data: {jwt: {accessToken: '12313123'}}};
  // return axios
  //   .post('http://localhost', {
  //     email: payload.email,
  //     password: payload.password,
  //   })
  //   .then(response => {
  //     console.log(response);
  //     return response.data;
  //   });
};
