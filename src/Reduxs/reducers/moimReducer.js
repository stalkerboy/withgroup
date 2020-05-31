// Initial State
const initialState = {
  moimList: [],
  CA1: [],
  CA2: [],
  CA3: [],
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

      if(action.reloadable == true || state.moimList.length == 0){
        // infinite reload일 경우 
        action.payload.moimList.map((addList) => {
          state.moimList.push(addList);
        });
  
        state.nextPage += 1;
      }

      // console.log('state.pageTotal : ' + state.pageTotal);
      
      return {
        ...state,
        pageTotal : action.payload.pageTotal,
        fetchingMoimList: false,
        error: null,
      };
    }
    // MoimList CA
    case 'GET_CA_ASYNC_REJECTED': {
      return {...state, fetchingMoimList: false, error: action.payload};
    }
    case 'GET_CA_ASYNC_FULFILLED': {

      if(state.CA1.length == 0){
        action.payload.CA1.map((addList) => {
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

      console.log('before : CA1 ');
      console.log(state.CA1);
      console.log('before : CA2 ');
      console.log(state.CA2);
      console.log('before : CA3 ');
      console.log(state.CA3);
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
