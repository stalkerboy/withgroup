import { FastField } from "formik";

// Initial State
const initialState = {
  moimList: [],
  commCode : '01',
  page: 1,
  nextPage: 1,
  pageTotal: null,
  error: null,
  moimDetail: null,
  moimSchedule:[],
};

const lengthControll = (addList) => {
  // title
  // 개행 카운트
  rowsTitle = addList.title.split('\n').length;
  // 개행별 내용
  rowTitle = addList.title.split('\n');

  // 최대 2줄까지만
  addList.title += rowTitle[0];
  for(i = 1; i < 2; i++){
    if(rowTitle[i] != undefined){
      addList.title += '\n'+rowTitle[i];
    }
  }

  if(addList.title.length > 10){
    addList.title = addList.title.substr(0,10);
    addList.title += "...";
  }

  // intro
  // 개행 카운트
  rowsIntro = addList.intro.split('\n').length;
  // 개행별 내용
  rowIntro = addList.intro.split('\n');

  // 최대 2줄까지만
  addList.intro += rowIntro[0];
  for(i = 1; i < 2; i++){
    if(rowIntro[i] != undefined){
      addList.intro += '\n'+rowIntro[i];
    }
  }

  if(addList.intro.length > 20){
    addList.intro = addList.intro.substr(0,20);
    addList.intro += "...";
  }

  return addList;
}


// Reducers (Modifies The State And Returns A New State)
const moimReducer = (state = initialState, action) => {
  switch (action.type) {
    // MoimList
    case 'GETMOIM_LIST_START': {
      return {...state, fetchingMoimList: true};
    }
    case 'GETMOIM_LIST_ASYNC_REJECTED': {
      return {...state, fetchingMoimList: false, error: action.payload};
    }
    case 'GETMOIM_LIST_ASYNC_FULFILLED': {

      if(action.reloadable == true || (state.moimList.length == 0 && action.searchable == false) ){
        // infinite reload일 경우 혹은 첫 페이지 로드의 경우
        action.payload.moimList.map((addList) => {
          addList = lengthControll(addList);

          state.moimList.push(addList);
        });
  
        state.nextPage += 1;
      } else if(action.searchable == true){
        // 카테고리별 검색의 경우
        state.moimList = [];

        action.payload.moimList.map((addList) => {
          addList = lengthControll(addList);

          state.moimList.push(addList);
        });

        state.nextPage = 2;
      }
         
      return {
        ...state,
        pageTotal : action.payload.pageTotal,
        fetchingMoimList: false,
        error: null,
      };
    }
    case 'GETMOIM_DETAIL_START': {
      return {...state, fetchingMoimDetail: true};
    }
    case 'GETMOIM_DETAIL_ASYNC_REJECTED': {
      return {...state, fetchingMoimDetail: false, error: action.payload};
    }
    case 'GETMOIM_DETAIL_ASYNC_FULFILLED': {
      return {
        ...state,
        moimDetail: action.payload,
        fetchingMoimDetail: false,
        error: null,
      };
    }

  //moimSchedule 
    case 'GETMOIM_SCHEDULE_START':{
      return{...state, fetchingMoimSchedule: true};
    }
    case 'GETMOIM_SCHEDULE_ASYNC_REJECTED':{
      return {...state, fetchingMoimSchedule: false, error: action.payload};
    }
    case 'GETMOIM_SCHEDULE_ASYNC_FULFILLED':{
     //  action.payload.moimSchedule.map((scheduleList) => state.moimSchedule.push(scheduleList));
      
      return{
        ...state,
        moimSchedule:action.payload.moimSchedule,
        fetchingMoimSchedule: false,
        error:null,
        
      };
    }

    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default moimReducer;
