import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, TouchableOpacity} from 'react-native';
import {EditProductStack, ProductStack} from '../SharedStack';
import {Feed} from './Feed';
import {useDispatch} from 'react-redux';

const Stack = createStackNavigator();

export const HomeStack = ({}) => {
  const dispatch = useDispatch();
  return (
    <Stack.Navigator initialRouteName="Feed">
      {EditProductStack(Stack)}
      {ProductStack(Stack)}
      <Stack.Screen
        name="Feed"
        options={{
          headerRight: () => {
            return (
              <Button
                onPress={() => {
                  dispatch({
                    type: 'LOGOUT',
                  });
                }}
                title="LOGOUT"
              />
            );
          },
        }}
        component={Feed}
      />
    </Stack.Navigator>
  );
};
