// Imports: Dependencies
import {createStore, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';

// Imports: Redux Root Reducer
import rootReducer from './reducers';

// Imports: Redux Root Saga
import {rootSaga} from './sagas';

// Middleware: Redux Saga
const sagaMiddleware = createSagaMiddleware();

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: ['authReducer'],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: ['counterReducer'],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(sagaMiddleware, createLogger()),
);
// Middleware: Redux Saga
sagaMiddleware.run(rootSaga);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {store, persistor};
