// Imports: Dependencies
import {delay, takeEvery, takeLatest, put, call} from 'redux-saga/effects';
import axios from 'axios';
import {API} from '../api';

// MoimList CA Async
function* getCAAsync(action) {

  try {
    const getCAResponse = yield call(getCA.bind(this));
    yield put({
      type: 'GET_CA_ASYNC_FULFILLED',
      payload: getCAResponse,
    });
  } catch (error) {
    yield put({type: 'GET_CA_ASYNC_REJECTED', payload: error});
  }

}

// Generator: Watch Increase LOG
export function* watchGetCA() {
  // Take Last Action
  yield takeLatest('GET_CA', getCAAsync);
}

const getCA = async () => {

  await axios
    .get(`${API.MOIMELEMTENT}`)
    .then((res) => {

      data = {
        CA1: res.data.element_CA1,
        CA2: res.data.element_CA2,
        CA3: res.data.element_CA3,
      };
    })
    .catch((error) => {
      console.log('error' + error);
    });
  return data;
};

// MoimList Async
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

  await axios
    .get(`${API.MOIMLISTVIEW}?page=${page}`)
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
