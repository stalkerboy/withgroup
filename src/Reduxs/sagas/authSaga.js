// Imports: Dependencies
import {delay, takeEvery, takeLatest, put} from 'redux-saga/effects';

// Increase LOGIN Async
function* loginAsync(action) {
  console.log('authsaga action.', action);

  yield put({type: 'LOGIN_ASYNC_STARTED'});
  yield delay(1000);

  try {
    //test
    const loginResponse = {data: {jwt: {accessToken: '12313123'}}};
    // const loginResponse = yield call(login);

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

const login = (payload) => {
  return axios.post('http://52.79.57.173/signin', {
    email: payload.email,
    password: payload.password,
  });
};
