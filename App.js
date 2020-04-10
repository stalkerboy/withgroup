/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider} from 'react-redux';
import {Routes} from './src/Routes';
import {store} from './src/Reduxs/store';

const App = ({}) => {
  return (
    // <AuthProvider>
    //   <Routes />
    // </AuthProvider>
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
