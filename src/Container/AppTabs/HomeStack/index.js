import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../../AuthProvider';
import {EditProductStack, ProductStack} from '../SharedStack';
import {Feed} from './Feed';

const Stack = createStackNavigator();

export const HomeStack = ({}) => {
  const {logout} = useContext(AuthContext);
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
                  logout();
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
