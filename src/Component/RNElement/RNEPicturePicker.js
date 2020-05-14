import * as React from 'react';
import ImagePicker from 'react-native-image-picker';
import {Button, Image} from 'react-native-elements';

export default function RNEPciturePicker(props) {
  const options = {
    title: 'Select Avatar',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };
  const {
    field,
    form: {setFieldValue},
  } = props;

  const onPress = async () => {
    ImagePicker.showImagePicker(options, (response) => {
      //   console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // const source = {uri: response.uri};
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        setFieldValue(field.name, response);
      }
    });
  };
  return (
    <React.Fragment>
      {field.value.uri ? (
        <Image
          source={{uri: field.value.uri}}
          style={{width: 100, height: 100}}
        />
      ) : null}
      <Button title="new lmage" {...props} onPress={onPress} />
    </React.Fragment>
  );
}
