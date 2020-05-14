import React, {useState} from 'react';
import {Button, FlatList} from 'react-native';
import {Center} from '../../../Component/Center';
import faker from 'faker';
import {useDispatch} from 'react-redux';

export function Search({navigation}) {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  return (
    <Center>
      <Button
        title="Search Products"
        onPress={() => {
          setShow(true);
        }}
      />
      <Button
        title="LOGOUT"
        onPress={() => {
          dispatch({
            type: 'LOGOUT',
          });
        }}
      />
      {show ? (
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
      ) : null}
    </Center>
  );
}
