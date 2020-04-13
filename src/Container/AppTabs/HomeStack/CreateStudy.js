import React from 'react';
import {Center} from '../../../Component/Center';
import {Button, Text} from 'react-native';

export function CreateStudy({navigation}) {
  return (
    <Center>
      <Text>CreateStudy</Text>
      <Button
        title="backbutton"
        onPress={() => {
          navigation.goBack();
        }}
      />
    </Center>
  );
}
