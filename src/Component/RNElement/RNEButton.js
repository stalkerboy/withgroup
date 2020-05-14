import React from 'react';
import {Button} from 'react-native-elements';

export default RNEButton = (props) => {
  const {title, containerStyle, onPress} = props;
  return (
    <Button title={title} containerStyle={containerStyle} onPress={onPress} />
  );
};
