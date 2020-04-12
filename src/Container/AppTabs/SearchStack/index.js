import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {EditProductStack} from '../../Share/Stack/EditProductStack';
import {ProductStack} from '../../Share/Stack/ProductStack';
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
