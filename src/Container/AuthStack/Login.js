import React, {useContext} from 'react';
import {AuthContext} from '../../AuthProvider';
import {Center} from '../../Component/Center';
import {Button, Text} from 'react-native';

export function Login({navigation}) {
  const {login} = useContext(AuthContext);
  return (
    <Center>
      <Text>I am a login screen</Text>
      <Button
        title="log me in"
        onPress={() => {
          login();
        }}
      />
      <Button
        title="go to register"
        onPress={() => {
          navigation.navigate('Register');
        }}
      />
    </Center>
  );
}
