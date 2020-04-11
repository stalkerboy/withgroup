// Imports: Dependencies
import {delay, takeEvery, takeLatest, put} from 'redux-saga/effects';

// Increase LOGIN Async
function* loginAsync(action) {
  try {
    // Delay 4 Seconds
    yield delay(4000);
    console.log('authsaga action.value', action.value);

    // Dispatch Action To Redux Store
    yield put({
      type: 'LOGIN_ASYNC',
      value: action.value,
    });
  } catch (error) {
    // CHANGE LATER
    console.log(error);
  }
}

// Generator: Watch Increase LOG
export function* watchLogin() {
  // Take Last Action
  yield takeLatest('LOGIN', loginAsync);
}
