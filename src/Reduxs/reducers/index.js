// Imports: Dependencies
import {combineReducers} from 'redux';

// Imports: Reducers
import authReducer from './authReducer';
import counterReducer from './counterReducer';
import moimReducer from './moimReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer: authReducer,
  counterReducer: counterReducer,
  moimReducer: moimReducer,
});

// Exports
export default rootReducer;
