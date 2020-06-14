import React, {useEffect, useCallback} from 'react';
import {Text, StyleSheet, View, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export function MoimSchedule({route, navigation}) {
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
    !moimDetail?null:
    (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.scrollView}> 
      <View style={styles.body}>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>모임 일정 페이지 샘플</Text>
          <Text style={styles.sectionDescription}>
            여기에 모임 일정을 정리해주세요.
          </Text>
        </View>
        <View style={styles.sectionContainer}>
          <Text style={styles.sectionDescription}>
            <Text style={styles.sectionLabel}>일정1</Text> : 일정1입니다
          </Text>
          <Text style={styles.sectionDescription}>
            <Text style={styles.sectionLabel}>일정2</Text> : 일정2입니다
          </Text>
          <Text style={styles.sectionDescription}>
            <Text style={styles.sectionLabel}>일정3</Text> : 일정3입니다
          </Text>
        </View>
      </View>
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
});
