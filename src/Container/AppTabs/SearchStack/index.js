import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EditProductStack, ProductStack} from '../SharedStack';
import {Search} from './Search';

const Stack = createStackNavigator();

export const SearchStack = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={Search} />
      {EditProductStack(Stack)}
      {ProductStack(Stack)}
    </Stack.Navigator>
  );
};
