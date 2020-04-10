import React, {useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Center} from '../../Component/Center';
import {Button, Text} from 'react-native';
import Config from 'react-native-config';
import {LOG_IN_REQUEST} from '../../Reduxs/constants/user';

export function Login({navigation}) {
  const [id, onChangeId] = useState('');
  const [password, onChangePassword] = useState('');
  const {isLoggingIn, logInErrorReason} = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onClickLogin = useCallback(
    (e) => {
      dispatch({
        type: LOG_IN_REQUEST,
        data: {
          userId: 'fakerid',
          password,
        },
      });
    },
    [id, password],
  );

  return (
    <Center>
      <Text>I am a login screen</Text>
      <Text>{Config.API_HOST}</Text>
      <Button
        title="log me in"
        onPress={() => {
          onClickLogin();
        }}
        loading={isLoggingIn}
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
