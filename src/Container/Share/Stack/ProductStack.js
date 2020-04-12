import React from 'react';
import {Product} from '../Screen/Product';

export const ProductStack = Stack => {
  return (
    <Stack.Screen
      options={({route}) => ({
        headerTitle: `Product: ${route.params.name}`,
      })}
      name="Product"
      component={Product}
    />
  );
};
