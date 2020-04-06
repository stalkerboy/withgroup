/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {AuthProvider} from './src/AuthProvider';
import {Routes} from './src/Routes';

const App = ({}) => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
