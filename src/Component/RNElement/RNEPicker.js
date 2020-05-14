import React, {useState} from 'react';
import {Picker} from '@react-native-community/picker';
export default function RNEPicker(props) {
  const {
    field,
    items,
    form: {setFieldValue},
    containerStyle,
  } = props;
  const [pickerValue, setPickerValue] = useState('');
  return (
    <React.Fragment>
      <Picker
        selectedValue={pickerValue}
        style={containerStyle}
        onValueChange={(itemValue, itemIndex) => {
          field.value = items[itemIndex];
          setFieldValue(field.name, field.value);
          setPickerValue(itemValue);
        }}>
        {items.map((item) => {
          return (
            <Picker.Item
              label={item.label}
              value={item.value}
              key={item.toString()}
            />
          );
        })}
      </Picker>
    </React.Fragment>
  );
}
