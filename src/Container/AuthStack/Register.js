import React from 'react';
import {Center} from '../../Component/Center';
import {Button, Text} from 'react-native';

export function Register({navigation, route}) {
  return (
    <Center>
      <Text>route name: {route.name}</Text>
      <Button
        title="go to login"
        onPress={() => {
          navigation.navigate('Login');
          // navigation.goBack()
        }}
      />
    </Center>
  );
}
