// Initial State
const initialState = {
  counter: 0,
};

// Reducers (Modifies The State And Returns A New State)
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    // Increase Counter
    case 'INCREASE_COUNTER_ASYNC': {
      return {
        // State
        ...state,
        // Redux Store
        counter: state.counter + action.value,
      };
    }

    // Decrease Counter
    case 'DECREASE_COUNTER_ASYNC': {
      return {
        // State
        ...state,
        // Redux Store
        counter: state.counter - action.value,
      };
    }

    // Default
    default: {
      return state;
    }
  }
};

// Exports
export default counterReducer;
