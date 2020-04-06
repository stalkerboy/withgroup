import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {addProductRoutes} from '../SharedScreen/addProductRoutes';
import {Search} from './Search';

const Stack = createStackNavigator();

export const SearchStack = ({}) => {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen name="Search" component={Search} />
      {addProductRoutes(Stack)}
    </Stack.Navigator>
  );
};
