// Initial State
const initialState = {
  moimList: [],
  page: 1,
  pageTotal: null,
  error: null,
};

// Reducers (Modifies The State And Returns A New State)
const moimReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
    case 'GETMOIM_LIST_START': {
      return {...state, fetchingMoimList: true};
    }
    case 'GETMOIM_LIST_ASYNC_REJECTED': {
      return {...state, fetchingMoimList: false, error: action.payload};
    }
    case 'GETMOIM_LIST_ASYNC_FULFILLED': {
      console.log('GETMOIM_LIST_ASYNC_FULFILLED');
      console.log('action: ', action.payload.moimList);
      console.log('~~~~~~~~~~~~~~~~~~~~')
      return {
        ...state,
        moimList: action.payload,
        fetchingMoimList: false,
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
