import React, {useState} from 'react';
import {ButtonGroup, Text} from 'react-native-elements';
export default function RNEButtonGroup(props) {
  const {
    field,
    buttons,
    form: {setFieldValue},
    containerStyle,
  } = props;
  const [bGIndex, setBGIndex] = useState(0);

  return (
    <React.Fragment>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>구성원 모임 정책</Text>
      <ButtonGroup
        containerStyle={containerStyle}
        onPress={(selectedIndex) => {
          field.value = selectedIndex;
          setFieldValue(field.name, field.value);
          setBGIndex(selectedIndex);
        }}
        selectedIndex={bGIndex}
        buttons={buttons}
      />
    </React.Fragment>
  );
}
