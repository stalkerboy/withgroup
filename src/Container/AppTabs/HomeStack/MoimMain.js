import React, {useState, useEffect, useCallback} from 'react';
import {Center} from '../../../Component/Center';
import {FlatList, Button, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export function MoimMain({navigation}) {
  const [moims, setMoim] = useState([]);
  const dispatch = useDispatch();
  const {moimList} = useSelector((state) => state.moimReducer);

  useEffect(() => {
    getMoimData();
  }, []);

  const getMoimData = useCallback(() => {
    dispatch({
      type: 'GETMOIM_LIST',
      data: {page: 1},
    });
  }, []);

  return (
    <Center>
      <Text>MoimMain</Text>
      <FlatList data={moims} />
      <Button
        title="backbutton"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title="getMoimData"
        onPress={() => {
          getMoimData();
        }}
      />
    </Center>
  );
}
