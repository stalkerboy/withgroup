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

export function SharePlan({route, navigation}) {
  const dispatch = useDispatch();


  useEffect(() => {
 
  }, []);

  

  return (
    <View style={styles.container}>
        <Text>SharePlan123123</Text>
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
  
});
