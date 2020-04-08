import React from 'react';
import {Center} from '../../../Component/Center';
import faker from 'faker';
import {FlatList, Button} from 'react-native';

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
    </Center>
  );
}
