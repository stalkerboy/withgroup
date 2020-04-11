import React, {useState, useEffect, useContext} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import {Center} from './Component/Center';
import {AppTabs} from './Container/AppTabs';
import {AuthStack} from './Container/AuthStack';
import {connect} from 'react-redux';
import {useDispatch, useSelector} from 'react-redux';

const Routes = ({token}) => {
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
    <NavigationContainer>
      {token ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
    // <Center>
    //   <View>
    //     <Text>Logged In: </Text>
    //     <Text>{`${token}`}</Text>

    //     <Button
    //       title="Login"
    //       onPress={token ? () => reduxLogin(true) : () => reduxLogin(false)}
    //     />
    //   </View>

    //   <TouchableOpacity onPress={reduxIncreaseCounter}>
    //     <Text>+</Text>
    //   </TouchableOpacity>

    //   <Text>{counter}</Text>

    //   <TouchableOpacity onPress={reduxDecreaseCounter}>
    //     <Text>-</Text>
    //   </TouchableOpacity>
    // </Center>
  );
};

// Map State To Props (Redux Store Passes State To Component)
const mapStateToProps = (state) => {
  // console.log('State:');
  // console.log(state);

  // Redux Store --> Component
  return {
    token: state.authReducer.token,
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
  };
};

// Exports
export default connect(mapStateToProps, null)(Routes);
