// Imports: Dependencies
import {delay, takeEvery, takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {API} from '../api';

// Increase LOGIN Async
function* getMoimListAsync(action) {
  yield put({type: 'GETMOIM_LIST_START'});
  yield delay(100);

  try {
    const getMoimListResponse = yield call(getMoimList.bind(this, action.data));
    yield put({
      type: 'GETMOIM_LIST_ASYNC_FULFILLED',
      payload: getMoimListResponse,
      reloadable : action.data.reloadable,
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

const getMoimList = async ({page, reloadable}) => {
  //test
  //   return {data: {jwt: {accessToken: '12313123'}}};

  await axios
    .get(`${API.MOIMLISTVIEW}?page=${page}`)
    .then((res) => {
      // console.log('totalPages' + res.data.moimList.totalPages);
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

// Generator: Watch Increase LOG
export function* watchGetMoimDetail() {
  // Take Last Action
  yield takeLatest('GETMOIM_DETAIL', getMoimDetailAsync);
}

function* getMoimDetailAsync(action) {
  yield put({type: 'GETMOIM_DETAIL_START'});
  yield delay(500);

  try {
    const getMoimDetailResponse = yield call(
      getMoimDetail.bind(this, action.data),
    );

    yield put({
      type: 'GETMOIM_DETAIL_ASYNC_FULFILLED',
      payload: getMoimDetailResponse,
    });
  } catch (error) {
    yield put({type: 'GETMOIM_DETAIL_ASYNC_REJECTED', payload: error});
  }
}

const getMoimDetail = async ({dataid, token}) => {
  console.log('dataid : ' + dataid);
  await axios
    .get(`${API.MOIM_DETAIL}/${dataid}`, {headers: {Authorization: token}})
    .then((res) => {
      console.log('res:            ', res);
      data = {
        moimPeopleNo: res.data.moimPeopleNo,
        PeopleNo: res.data.PeopleNo,
        moimDetail: res.data.moimDetail,
        moimPeople: res.data.moimPeople,
        moimLeader: res.data.moimLeader,
        moimNo: res.data.moimNo,
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
