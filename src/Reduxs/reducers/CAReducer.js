// Initial State
const initialState = {
    CA1: [],
    CA2: [],
    CA3: [],
  };

// Reducers (Modifies The State And Returns A New State)
const CAReducer = (state = initialState, action) => {
    switch (action.type) {
        // CA
        case 'GET_CA_ASYNC_REJECTED': {
            return {...state, fetchingMoimList: false, error: action.payload};
        }
        case 'GET_CA_ASYNC_FULFILLED': {
            console.log('GET_CA_ASYNC_FULFILLED');
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

        // Default
        default: {
            return state;
        }
        
    }
}

// Exports
export default CAReducer;