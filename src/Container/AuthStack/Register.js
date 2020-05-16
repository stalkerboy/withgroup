import React, {useState, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {Picker} from '@react-native-community/picker';
import FooterButton from '../../Component/FooterButton';
import { Text } from 'react-native-elements';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  logo: {
    width: 160,
    height: 158,
  },
  signupTitle: {
    marginTop: 20,
    marginBottom: 30,
    fontSize: 25,
    textAlign: 'center',
    color: 'rgba(52,52,52,1)',
  },
  signupText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupButton: {
    width: 200,
    height: 50,
    marginTop: 30,
  },
  toLoginText: {
    color: 'rgba(216, 111, 105,0.5)',
    fontSize: 15,
    marginTop: 70,
  },
  inputText: {
    width: 250,
    marginLeft: 5,
  },
});
state = {
  language: 'java',
}; 
export function Register({navigation, route}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nick, setNick] = useState('');
  const [introduce,setIntroduce] = useState('');
  const [selectedValue, setSelectedValue] = useState("java");
  const signup = useCallback(() => {
    dispatch({
      type: 'REGISTER',
      data: {
        email,
        password,
      },
    });
  }, [email, password]);

  return (
    <View style={styles.container}>
      <Image
        source={require('withgroup/assets/images/logo.png')}
        style={styles.logo}
      />

      <Text style={styles.signupTitle}>회원가입</Text>

      <View style={styles.signupText}>
        <Icon name="mail" size={30} />
        <TextInput
          style={styles.inputText}
          onChangeText={setEmail}
          autoCorrect={false}
          placeholder="이메일 아이디"
        />
      </View>

      <View style={styles.signupText}>
        <Icon name="lock" size={30} />
        <TextInput
          style={styles.inputText}
          onChangeText={setPassword}
          autoCorrect={false}
          placeholder="비밀번호"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.signupText}>
        <Icon name="lock" size={30} />
        <TextInput
          style={styles.inputText}
          autoCorrect={false}
          placeholder="비밀번호 확인"
          secureTextEntry={true}
        />
      </View>

      <View style={styles.signupText}>
        <Icon name="meh" size={30} />
        <TextInput
          style={styles.inputText}
          onChangeText={setNick}
          autoCorrect={false}
          placeholder="닉네임"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.signupText}>
        <Icon name="meh" size={30} />
        <TextInput
          style={styles.inputText}
          onChangeText={setIntroduce}
          autoCorrect={false}
          placeholder="소개"
          secureTextEntry={true}
        />
      </View>
      <Text h3>직업 : 
        <Picker
          selectedValue={this.state.language}
          style={{height: 50, width: 100}}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({language: itemValue})
          }>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </Text>
      <FooterButton
        buttonText="Sign Up"
        style={styles.signupButton}
        onPress={signup}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.toLoginText}>Already have account? Login</Text>
      </TouchableOpacity>
    </View>

    // <Center>
    //   <Text>route name: {route.name}</Text>
    //   <Button
    //     title="go to login"
    //     onPress={() => {
    //       navigation.navigate('Login');
    //       // navigation.goBack()
    //     }}
    //   />
    // </Center>
  );
}
