// Imports: Dependencies
import {delay, takeEvery, takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {API} from '../api';

// Increase LOGIN Async
function* getMoimListAsync(action) {
  yield put({type: 'GETMOIM_LIST_START'});
  yield delay(1000);

  try {
    const getMoimListResponse = yield call(getMoimList.bind(this, action.data));

   
    yield put({
      type: 'GETMOIM_LIST_ASYNC_FULFILLED',
      payload: getMoimListResponse,
    });
  } catch (error) {
    yield put({type: 'GETMOIM_LIST_ASYNC_REJECTED', payload: error});
  }
}

// Generator: Watch Increase LOG
export function* watchGetMoimList() {
  // Take Last Action
  yield takeLatest('GETMOIM_LIST', getMoimListAsync);
}

const getMoimList = async ({page}) => {
  //test
  //   return {data: {jwt: {accessToken: '12313123'}}};
  
  await axios
    .get(API.MOIMLISTVIEW, {
      page,
    })
    .then((res) => {
     
      data = {
        moimList: res.data.moimList.content,
        page: page ? page : 1,
        pageTotal: res.data.moimList.totalPages,
      };
     
    })
    .catch((error) => {
      console.log('error' + error);
    });
    return data;
  //   .post(API.LOGIN, {
  //       email: payload.email,
  //       password: payload.password,
  //     })
  //     .then(response => {
  //       console.log(response);
  //       return response.data;
  //     });
};
