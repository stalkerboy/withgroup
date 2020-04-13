// Initial State
const initialState = {
  token: '',
  fetchingLogin: false,
  // user: '',
  error: null,
};

// Reducers (Modifies The State And Returns A New State)
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    // Login
    case 'LOGIN_ASYNC_STARTED': {
      return {...state, fetchingLogin: true};
    }
    case 'LOGIN_ASYNC_REJECTED': {
      return {...state, fetchingLogin: false, error: action.payload};
    }
    case 'LOGIN_ASYNC_FULFILLED': {
      return {
        ...state,
        fetchingLogin: false,
        token: action.payload.jwt.accessToken,
        error: null,
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        token: null,
      };
    }

    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default authReducer;
