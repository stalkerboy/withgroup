import React, {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {AppTabs} from './Container/AppTabs';
import {AuthStack} from './Container/AuthStack';
import {useSelector} from 'react-redux';
import {Loading} from './Container/Share/Screen/Loading';

const Routes = () => {
  const [isLoading, SetLoading] = useState(true);
  const {token} = useSelector(state => state.authReducer);

  useEffect(() => {
    setTimeout(() => {
      SetLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    // We haven't finished checking for the token yet
    return <Loading />;
  }

  return (
    <NavigationContainer>
      {token ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};

// Exports
export default Routes;
