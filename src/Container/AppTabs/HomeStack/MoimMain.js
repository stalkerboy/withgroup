import React, {useState, useEffect, useCallback} from 'react';
import {Center} from '../../../Component/Center';
import {FlatList, Button, Text,View,StyleSheet,Dimensions,Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const{width, height} = Dimensions.get('window');

export function MoimMain({navigation}) {
  const [moims, setMoim] = useState([]);
  const dispatch = useDispatch();
  const {moimList} = useSelector((state) => state.moimReducer);

  useEffect(() => {
      getMoimData();
      console.log('!!!!!!moimMain')
    console.log(moimList.moimList)
    
  }, [moimList]);

  const getMoimData = useCallback(() => {
    dispatch({
      type: 'GETMOIM_LIST',
      data: {page: 1},
    });
  }, []);

  return (
   
    
      
      
                  <FlatList
                            // data={this.state.data}
                            data={moimList.moimList}
                            renderItem={({item}) =>  
                                    <View style={{flexDirection:'row',flex:1}}>
                                        <Image 
                                        source={item.imageName === null ? require('../../../../assets/images/logo.png')  : {uri:'http://52.79.57.173/getMoimImage/'+item.imageName+'.'+item.imageExtension}} 
                                        style={{width: 100, height: 75}} 
                                        /> 
                                        <View style={styles.textMoim}>
                                            <Text style={{fontSize:15, fontWeight:'bold',marginTop:1}}>
                                                {item.title}
                                            </Text> 
                                            <Text>
                                                {item.intro}
                                            </Text>
                                            <Text>
                                                {item.people.name}
                                            </Text>
                                        </View>
                                    </View>
                            }
                          
                        />    
      
   
  );
}
const styles = StyleSheet.create({
  container:{
      flex:1,

      
  },
 
  section:{
      flexDirection:'row',
      alignItems:'center',
      borderBottomColor:'white',
      borderBottomWidth:1,   
      width:width-0,
      height:75,
      marginTop:3,
   
      
  },

  create:{
      width:70,
      height:70,
      borderRadius:35,
      backgroundColor:'#FF6347',
      alignItems:'center',
      justifyContent:'center',
      borderColor:'#F4A460',
      borderWidth:2
  },
  createText:{
      fontSize:18,
      color:'#F8F8FF'
  },
  createButton:{
      marginBottom:30,
      marginRight:20,
      marginTop:15,
      
  },
  userInfo:{
      flexDirection:'row',
      justifyContent:'space-between',

      
  },
  elem:{
      width:width-0,
    
  },
  createSection:{
      flex:1,
      alignItems:'flex-end',
      flexDirection:'column-reverse',
      marginTop:-10
  },
  textMoim:{
      flexDirection:'column',
      marginLeft:5
  },
  peopleNum:{
      margin:20,
      fontSize:22,
      color:'#FF8C00',
      flex:1,
      fontWeight:'bold',
      textDecorationLine:'underline'
  },
  modar:{
      width:300,
      height:300,
      backgroundColor:'gray',
      flex:1
  }


})