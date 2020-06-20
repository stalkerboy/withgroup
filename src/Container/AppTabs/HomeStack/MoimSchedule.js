import React, {useEffect, useCallback, useState} from 'react';
import * as Progress from 'react-native-progress';
import {Text, StyleSheet, View, ScrollView, FlatList,Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import Axios from 'axios';


const {height,width}=Dimensions.get('window');


function Item({ plan_title, people, progress }) {
  return (
    <View style={styles.todoList}>
      <Text style={styles.todoListText}>{plan_title}</Text>
      <Text style={styles.writer}>작성자: {people}</Text>
      <Text style={{marginLeft:20, marginTop:10}}>in progress</Text>
      <View style={styles.progressbar}>
        <Progress.Bar progress={progress*0.01} width={350} height={14} color={"#90EE90"}  />
        <Text style={{fontSize:11}}>  {progress}%</Text>
      </View>
    </View>
  );
}

export function MoimSchedule({route, navigation}) {



  const dispatch = useDispatch();

  //REDUCER를 이용한 방식
  //const {moimSchedule} =useSelector((state) => state.moimReducer)

  // useEffect(() => {
  //   getMoimSchedule();
  //   console.log('moimSchedule',moimSchedule)
  //   // console.log('route',route.params.dataid)
  //   // const moimId=route.params.dataid;
  //   // Axios.get(`http://49.50.173.236/rest/moimDetail/moimTodoList/${moimId}`)
  //   // .then(res => {
  //   //     console.log('shareplan res', res.data.todolist.content);
  //   //     setTodoList(res.data.todolist.content)
  //   // })
    
  // }, []);

  // const getMoimSchedule = useCallback(() => {
  //   dispatch({
  //     type:'GETMOIM_SCHEDULE',
  //     data:{dataid:route.params.dataid, token:route.params.token}
  //   })
  // },[])


  //기존 AXIOS 불러와서 쓰는방식
  const [moimSchedule, setMoimSchedule] = useState(null)
  useEffect(() => {
    
    console.log('route',route.params.dataid)
    const moimId=route.params.dataid;
    Axios.get(`http://49.50.173.236/rest/moimDetail/moimTodoList/${moimId}`)
    .then(res => {
        console.log('shareplan res', res.data.todolist.content);
        setMoimSchedule(res.data.todolist.content)
    })
    
  }, []);



  return (
    !moimSchedule?null: (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}> 
     <FlatList
       data={moimSchedule}
       renderItem={({ item }) => <Item plan_title={item.plan_title} people={item.people.name} progress={item.progress}/>}
       keyExtractor={item => item.id}
      />

    </ScrollView>
    )
  );
  
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
    
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionLabel: {
    fontWeight: 'bold',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  todoList:{
    width:width-10,
    height:120,
    borderBottomWidth:0.5,
    borderBottomColor:'#bbb',
    justifyContent:'center',

    
  },
  todoListText:{
    fontSize:20,
    marginLeft:20
  },
  writer:{
    fontSize:15,
    marginLeft:20,
    color:'gray'
    
  },
  progressbar:{
    marginLeft:20, 
    flexDirection:'row',
    marginTop:5
  }
});
