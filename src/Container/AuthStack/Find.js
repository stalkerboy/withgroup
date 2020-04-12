import React, {useState, useCallback} from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
});

export function Find({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onClickFind = useCallback(() => {
    dispatch({
      type: 'FINDPASSWORD',
      data: {
        email,
        password,
      },
    });
  }, [email, password]);

  return (
    <View style={styles.container}>
      <Text>FindPasswordScreen</Text>
    </View>
  );
}
