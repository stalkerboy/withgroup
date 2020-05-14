import * as React from 'react';
import {Input} from 'react-native-elements';
export default function RNEText(props) {
  const {errors, touched, field, placeholder, values} = props;
  const onChangeText = (text) => {
    const {
      form: {setFieldValue},
      field: {name},
    } = props;
    setFieldValue(name, text);
  };
  const errorMsg = touched[field.name] || errors[field.name];
  return (
    <Input
      {...props}
      errorStyle={{color: 'red'}}
      errorMessage={errorMsg}
      onChangeText={onChangeText}
      value={field.value}
      placeholder={placeholder}
    />
  );
}
