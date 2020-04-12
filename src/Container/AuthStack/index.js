import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Register} from './Register';
import {Login} from './Login';
import {Find} from './Find';
const Stack = createStackNavigator();

export const AuthStack = ({}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
      }}
      initialRouteName="Login">
      <Stack.Screen
        options={{
          headerTitle: 'Sign In',
        }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Sign Up',
        }}
        name="Register"
        component={Register}
      />
      <Stack.Screen
        options={{
          headerTitle: 'Find',
        }}
        name="Find"
        component={Find}
      />
    </Stack.Navigator>
  );
};
