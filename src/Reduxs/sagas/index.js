// Imports: Dependencies
import {all, fork} from 'redux-saga/effects';

// Imports: Redux Sagas
import {watchIncreaseCounter, watchDecreaseCounter} from './counterSaga';
import {watchLogin} from './authSaga';
import {watchGetMoimList, watchGetCA, watchGetMoimDetail} from './moimSaga';
// Redux Saga: Root Saga
export function* rootSaga() {
  yield all([
    fork(watchIncreaseCounter),
    fork(watchDecreaseCounter),
    fork(watchLogin),
    fork(watchGetMoimList),
    fork(watchGetCA),
    fork(watchGetMoimDetail),
  ]);
}
