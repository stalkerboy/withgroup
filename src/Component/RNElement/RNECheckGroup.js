import * as React from 'react';
import {CheckBox} from 'react-native-elements';
import {View} from 'react-native';

export default function CheckGroup(props) {
  const {
    field,
    options,
    form: {setFieldValue},
  } = props;
  const onPress = (optionName, checked) => {
    if (checked) {
      setFieldValue(
        field.name,
        field.value.filter((x) => x !== optionName),
      );
    } else {
      // [...["pool", "asd"], "aasjdfklas"]
      // ["asdfa", "dafs", "addsfs"]
      setFieldValue(field.name, [...field.value, optionName]);
    }
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <React.Fragment>
        {options.map((option, i) => {
          if (!field.value) field.value = [];
          const checked = field.value.includes(option);
          return (
            <CheckBox
              key={option.toString() + i}
              title={option}
              checked={checked}
              onPress={() => onPress(option, checked)}
            />
          );
        })}
      </React.Fragment>
    </View>
  );
}
