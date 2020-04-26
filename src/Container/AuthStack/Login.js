import React, {useState, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FooterButton from '../../Component/FooterButton';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Center} from '../../Component/Center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    flexDirection: 'column',
  },
  logo: {
    width: 160,
    height: 158,
  },
  welcome: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 15,
    textAlign: 'center',
    color: 'rgba(0,0,0,0.3)',
  },
  idtext: {
    width: 250,
    marginLeft: 5,
  },
  loginText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  loginButton: {
    width: 200,
    height: 50,
    marginTop: 30,
  },
  forgotPassword: {
    fontSize: 13,
    color: 'rgba(0,0,0,0.2)',
    marginTop: 20,
  },
  createAccountText: {
    color: 'rgba(216, 111, 105,0.5)',
    fontSize: 15,
    marginTop: 70,
  },
});

export function Login({navigation}) {
  const [email, setEmail] = useState('aaa');
  const [password, setPassword] = useState('1');
  const {fetchingLogin} = useSelector((state) => state.authReducer);
  const dispatch = useDispatch();

  const onClickLogin = useCallback(() => {
    dispatch({
      type: 'LOGIN',
      data: {
        email,
        password,
      },
    });
  }, [email, password]);

  if (fetchingLogin) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return (
    <View style={styles.container}>
      <Image
        source={require('withgroup/assets/images/logo.png')}
        style={styles.logo}
      />
      <Text style={styles.welcome}>
        스터디 모임 플랫폼에 오신걸 환영합니다.
      </Text>
      <View style={styles.loginText}>
        <Icon name="mail" size={30} />
        <TextInput
          style={styles.idtext}
          onChangeText={setEmail}
          autoCorrect={false}
          placeholder=":"
        />
      </View>
      <View style={styles.loginText}>
        <Icon name="lock" size={30} />
        <TextInput
          style={styles.idtext}
          onChangeText={setPassword}
          autoCorrect={false}
          placeholder=":"
          secureTextEntry={true}
        />
      </View>
      <FooterButton
        buttonText="Login"
        style={styles.loginButton}
        onPress={onClickLogin}
      />
      <TouchableOpacity onPress={() => navigation.navigate('Find')}>
        <Text style={styles.forgotPassword}>Forgot to your Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.createAccountText}>
          Don't have account? Create one
        </Text>
      </TouchableOpacity>
    </View>
  );
}
