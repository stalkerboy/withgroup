// Initial State
const initialState = {
  moimList: [],
  CA1: [],
  CA2: [],
  CA3: [],
  commCode : '01',
  page: 1,
  nextPage: 1,
  pageTotal: null,
  error: null,
  moimDetail: null,
};

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
          if(addList.intro.length > 20){
            addList.intro = addList.intro.substr(0,20);
          }
          state.moimList.push(addList);
        });
  
        state.nextPage += 1;
      } else if(action.searchable == true){
        // 카테고리별 검색의 경우
        state.moimList = [];
        action.payload.moimList.map((addList) => {
          if(addList.intro.length > 20){
            addList.intro = addList.intro.substr(0,20);
          }
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
    // CA
    case 'GET_CA_ASYNC_REJECTED': {
      return {...state, fetchingMoimList: false, error: action.payload};
    }
    case 'GET_CA_ASYNC_FULFILLED': {

      if(state.CA1.length == 0){
        action.payload.CA1.map((addList) => {
          addList.value = addList.commCode;
          addList.label = addList.commName;
          state.CA1.push(addList);
        });
      } 
      if(state.CA2.length == 0){
        action.payload.CA2.map((addList) => {
          state.CA2.push(addList);
        });
      } 
      if(state.CA3.length == 0){
        action.payload.CA3.map((addList) => {
          state.CA3.push(addList);
        });
      } 

      return {
        ...state,
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

    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default moimReducer;
