import React, {useState, useEffect, useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, Text} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {Center} from './Component/Center';
import {AuthContext} from './AuthProvider';
import {AppTabs} from './Container/AppTabs';
import {AuthStack} from './Container/AuthStack';

export const Routes = ({}) => {
  const {user, login} = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // check if the user is logged in or not
    AsyncStorage.getItem('user')
      .then((userString) => {
        if (userString) {
          // decode it
          login();
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};
