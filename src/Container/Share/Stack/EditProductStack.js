import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {EditProduct} from '../Screen/EditProduct';

export const EditProductStack = Stack => {
  return (
    <Stack.Screen
      options={({route}) => ({
        headerTitle: `Edit: ${route.params.name}`,
        headerRight: () => (
          <TouchableOpacity
            onPress={() => {
              // submit the form
              if (route.params.submit) {
                route.params.submit.current();
              }
            }}
            style={{paddingRight: 8}}>
            <Text
              style={{
                color: 'red',
              }}>
              Done
            </Text>
          </TouchableOpacity>
        ),
      })}
      name="EditProduct"
      component={EditProduct}
    />
  );
};
