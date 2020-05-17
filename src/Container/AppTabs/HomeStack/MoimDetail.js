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

  return (
    <View style={styles.container}>
        <Text style={styles.top}>스터디 목표</Text>
 
        <Text style={styles.top}>모임원 보기</Text>
        
        <Text style={styles.top}>일정 달성 현황</Text>
        <View style={styles.rectangle}> 
                                          <TouchableOpacity onPress={() => navigation.navigate('SharePlan')}>
                                            <Image source={require('../../../../assets/images/moimdetail/SharePlan.png')} style={styles.RectangleList}/>
                                          </TouchableOpacity>
                                          <TouchableOpacity onPress={() => navigation.navigate('SharePlan')}>
                                            <Text style={styles.RectangleList}>일정</Text>
                                          </TouchableOpacity>
                                          <Image source={require('../../../../assets/images/moimdetail/Chat.png')} style={styles.RectangleList}/>
                                          <Text style={styles.RectangleList}>채팅</Text>
        </View>
    </View>);
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  RectangleList:{
    marginLeft:10,
    marginTop:20,
  },
  rectangle: {
    marginBottom: 136,
    marginLeft:350,
    paddingVertical: 50,
    width: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 15, 
    elevation: 1,
    
    textAlign: "center",
    fontSize: 30,
  },
  top:{
    color: "#03D2B4"
    ,fontSize: 20
    ,fontWeight: "bold"
    ,flex: 1
    ,marginTop:10
    ,marginLeft:10
 
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
