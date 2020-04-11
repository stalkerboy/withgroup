/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import Routes from './src/Routes';
import {store, persistor} from './src/Reduxs/store';

const App = ({}) => {
  return (
    // <AuthProvider>
    //   <Routes />
    // </AuthProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
