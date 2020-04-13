import React from 'react';
import {Center} from '../../../Component/Center';
import faker from 'faker';
import {FlatList, Button} from 'react-native';
import {FloatingAction} from 'react-native-floating-action';

export function Feed({navigation}) {
  return (
    <Center>
      <FlatList
        style={{width: '100%'}}
        renderItem={({item}) => {
          return (
            <Button
              title={item}
              onPress={() => {
                navigation.navigate('Product', {
                  name: item,
                });
              }}
            />
          );
        }}
        keyExtractor={(product, idx) => product + idx}
        data={Array.from(Array(50), () => faker.commerce.product())}
      />
      <FloatingAction
        actions={[
          {
            text: 'Accessibility',
            icon: require('withgroup/assets/images/add.png'),
            name: 'bt_accessibility',
            position: 1,
          },
        ]}
        overrideWithAction
        onPressItem={(name) => {
          navigation.navigate('CreateStudy');
        }}
      />
    </Center>
  );
}
