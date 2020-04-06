import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, TouchableOpacity} from 'react-native';
import {AuthContext} from '../../../AuthProvider';
import {addProductRoutes} from '../SharedScreen/addProductRoutes';
import {Feed} from './Feed';

const Stack = createStackNavigator();

export const HomeStack = ({}) => {
  const {logout} = useContext(AuthContext);
  return (
    <Stack.Navigator initialRouteName="Feed">
      {addProductRoutes(Stack)}
      <Stack.Screen
        name="Feed"
        options={{
          headerRight: () => {
            return (
              <TouchableOpacity
                onPress={() => {
                  logout();
                }}>
                <Text>LOGOUT</Text>
              </TouchableOpacity>
            );
          },
        }}
        component={Feed}
      />
    </Stack.Navigator>
  );
};
