import React, {useState, useRef, useEffect} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {Center} from '../../../Component/Center';

function apiCall(x) {
  return x;
}

function EditProduct({route, navigation}) {
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

export const EditProductStack = (Stack) => {
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
