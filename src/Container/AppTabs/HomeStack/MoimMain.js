import React, {useEffect, useCallback, useState} from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {FloatingAction} from 'react-native-floating-action';
import {API} from '../../../Reduxs/api';

const {width, height} = Dimensions.get('window');

export function MoimMain({navigation}) {
  const dispatch = useDispatch();
  const {moimList} = useSelector((state) => state.moimReducer);
  const {nextPage} = useSelector((state) => state.moimReducer);
  const {pageTotal} = useSelector((state) => state.moimReducer);
  const {token} = useSelector((state) => state.authReducer);

  useEffect(() => { 
    dispatch({
      type: 'GETMOIM_LIST',
      data: {page: nextPage, reloadable : false},
    }); 

  }, []); 

  const infiniteLoading = () => {
    if(nextPage <= pageTotal){
      dispatch({
        type: 'GETMOIM_LIST',
        data: {page: nextPage, reloadable : true},
      });
    }
    // console.log('pageTotal'+pageTotal);
  };

  // const getMoimData = useCallback(() => {
  //   dispatch({
  //     type: 'GETMOIM_LIST',
  //     data: {page: ScrollPage},
  //   });
  // }, []);

  return (
    <>
      <View>
        <FlatList
          // data={this.state.data}
          data={moimList}
          onEndReached = {infiniteLoading}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('MoimDetail', {
                  dataid: item.id,
                  token: token,
                });
              }}>
              <View
                style={{flexDirection: 'row', flex: 1}}
                keyExtractor={(item) => item.toString()}>
                <Image
                  source={
                    item.imageName === null
                      ? require('../../../../assets/images/list.png')
                      : {
                          uri: `${API.GETMOIMIMAGE}/${item.imageName}.${item.imageExtension}`,
                        }
                  }
                  style={{width: 100, height: 75}}
                />
                <View style={styles.textMoim}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      marginTop: 1,
                      fontFamily: 'Noto Sans KR',
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      fontSize: 15,
                      fontFamily: 'Noto Sans KR',
                      fontWeight: '500',
                    }}>
                    {item.intro}
                  </Text>
                  <Text style={{fontWeight: '200'}}>{item.people.name}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
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
        
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  section: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    width: width - 0,
    height: 75,
    marginTop: 3,
  },

  create: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#F4A460',
    borderWidth: 2,
  },
  createText: {
    fontSize: 18,
    color: '#F8F8FF',
  },
  createButton: {
    marginBottom: 30,
    marginRight: 20,
    marginTop: 15,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  elem: {
    width: width - 0,
  },
  createSection: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'column-reverse',
    marginTop: -10,
  },
  textMoim: {
    flexDirection: 'column',
    marginLeft: 20,
  },
  peopleNum: {
    margin: 20,
    fontSize: 22,
    color: '#FF8C00',
    flex: 1,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  modar: {
    width: 300,
    height: 300,
    backgroundColor: 'gray',
    flex: 1,
  },
});
