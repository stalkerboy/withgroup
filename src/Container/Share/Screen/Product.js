import React from 'react';
import {Text, Button} from 'react-native';
import {Center} from '../../../Component/Center';

export function Product({route, navigation}) {
  return (
    <Center>
      <Text>{route.params.name}</Text>
      <Button
        title="Edit This Product"
        onPress={() =>
          navigation.navigate('EditProduct', {
            name: route.params.name,
          })
        }
      />
    </Center>
  );
}
