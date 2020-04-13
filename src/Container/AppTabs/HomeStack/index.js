import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Button, TouchableOpacity} from 'react-native';
import {EditProductStack} from '../../Share/Stack/EditProductStack';
import {ProductStack} from '../../Share/Stack/ProductStack';
import {Feed} from './Feed';
import {CreateStudy} from './CreateStudy';
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
      <Stack.Screen name="CreateStudy" component={CreateStudy} />
    </Stack.Navigator>
  );
};
