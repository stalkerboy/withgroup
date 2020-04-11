import React, {useState, useEffect, useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import {Center} from './Component/Center';
import {AppTabs} from './Container/AppTabs';
import {AuthStack} from './Container/AuthStack';
import {connect} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';

const Routes = ({
  counter,
  loggedIn,
  reduxIncreaseCounter,
  reduxDecreaseCounter,
  reduxLogin,
}) => {
  // const {user, login} = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // check if the user is logged in or not
  //   AsyncStorage.getItem('user')
  //     .then((userString) => {
  //       if (userString) {
  //         // decode it
  //         login();
  //       }
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // if (loading) {
  //   return (
  //     <Center>
  //       <ActivityIndicator size="large" />
  //     </Center>
  //   );
  // }

  return (
    // <NavigationContainer>
    //   {user ? <AppTabs /> : <AuthStack />}
    // </NavigationContainer>
    <Center>
      <View>
        <Text>Logged In: </Text>
        <Text>{`${loggedIn}`}</Text>

        <Button
          title="Login"
          onPress={
            loggedIn === false
              ? () => reduxLogin(true)
              : () => reduxLogin(false)
          }
        />
      </View>

      <TouchableOpacity onPress={reduxIncreaseCounter}>
        <Text>+</Text>
      </TouchableOpacity>

      <Text>{counter}</Text>

      <TouchableOpacity onPress={reduxDecreaseCounter}>
        <Text>-</Text>
      </TouchableOpacity>
    </Center>
  );
};

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // console.log('State:');
  // console.log(state);

  // Redux Store --> Component
  return {
    counter: state.counterReducer.counter,
    loggedIn: state.authReducer.loggedIn,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = (dispatch) => {
  // Action
  return {
    // Increase Counter
    reduxIncreaseCounter: () =>
      dispatch({
        type: 'INCREASE_COUNTER',
        value: 1,
      }),
    // Decrease Counter
    reduxDecreaseCounter: () =>
      dispatch({
        type: 'DECREASE_COUNTER',
        value: 1,
      }),
    // Login
    reduxLogin: (trueFalse) =>
      dispatch({
        type: 'LOGIN',
        value: trueFalse,
      }),
  };
};

// Exports
export default connect(mapStateToProps, mapDispatchToProps)(Routes);
