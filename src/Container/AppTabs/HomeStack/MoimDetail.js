import React, {useEffect, useCallback} from 'react';
import {Center} from '../../../Component/Center';
import faker from 'faker';
import {
  FlatList,
  Button,
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export function MoimDetail({route, navigation}) {
  const dispatch = useDispatch();
  const {moimDetail} = useSelector((state) => state.moimReducer);

  useEffect(() => {
    getMoimDetail();
    console.log('moimDetail');
    console.log(JSON.stringify(moimDetail));
  }, []);

  const getMoimDetail = useCallback(() => {
    dispatch({
      type: 'GETMOIM_DETAIL',
      data: {dataid: route.params.dataid, token: route.params.token},
    });
  }, []);

  return <View style={styles.container}></View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  moimButton: {
    width: 100,
    height: 25,
    borderWidth: 1,
    borderColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center',
  },
  peopleList: {
    color: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    fontSize: 30,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    height: '80%',
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginTop: 80,
    marginLeft: 40,
    flexDirection: 'column',
  },
  friends: {
    padding: 5,
  },
  nameText: {
    fontSize: 20,
  },
  intro: {
    alignItems: 'center',
    justifyContent: 'space-between',
    // width: width - 10,
    height: 150,
    borderWidth: 3,
    borderColor: 'gray',
    marginTop: 3,
    flexDirection: 'column',
  },
});
