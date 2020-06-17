// Imports: Dependencies
import {combineReducers} from 'redux';

// Imports: Reducers
import authReducer from './authReducer';
import counterReducer from './counterReducer';
import moimReducer from './moimReducer';
import CAReducer from './CAReducer';

// Redux: Root Reducer
const rootReducer = combineReducers({
  authReducer: authReducer,
  counterReducer: counterReducer,
  moimReducer: moimReducer,
  CAReducer: CAReducer,
});

// Exports
export default rootReducer;
