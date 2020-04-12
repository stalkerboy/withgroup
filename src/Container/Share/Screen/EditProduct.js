import React, {useState, useRef, useEffect} from 'react';
import {Text} from 'react-native';
import {Center} from '../../../Component/Center';

function apiCall(x) {
  return x;
}

export function EditProduct({route, navigation}) {
  const [formState] = useState();
  const submit = useRef(() => {});

  submit.current = () => {
    // api call with new form state
    apiCall(formState);
    navigation.goBack();
  };

  //warnning
  useEffect(() => {
    navigation.setParams({submit});
  }, []);

  return (
    <Center>
      <Text>editing {route.params.name}...</Text>
    </Center>
  );
}
