import React, {useState} from 'react';
import {Picker} from '@react-native-community/picker';
// import {useDispatch} from 'react-redux';
export default function RNEPicker(props) {
  // const dispatch = useDispatch();
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
          
          // CA1 바꿀때마다 리스트 변경 (현재 미사용)
          // if(field.value.commHead == 'CA1'){
          //   // moimList Category Search시 동작
          //   dispatch({
          //     type: 'GETMOIM_LIST',
          //     data: {commCode: itemValue, page: 1, reloadable: false, searchable: true},
          //   }); 
          // }

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
