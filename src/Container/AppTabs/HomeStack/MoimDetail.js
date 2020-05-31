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
      <View style={styles.rect}>
        <Image
          source={require("../../../../assets/images/moimdetail/Moimdetail1.png")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
        <Text style={styles.계획공유}>계획 공유</Text>
        <Image
          source={require("../../../../assets/images/moimdetail/Plan_Share.png")}
          resizeMode="contain"
          style={styles.image4}
        ></Image>
        <Text style={styles.모임원}>모임원</Text>
        <Image
          source={require("../../../../assets/images/moimdetail/Chat.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <Text style={styles.채팅}>채팅</Text>
      </View>
      <Text>
       
      </Text> 
      <Text style={styles.loremIpsum}>
     
      </Text>
      <View style={styles.imageRow}>
        <Image
          source={require("../../../../assets/images/moimdetail/Moimdetail1.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <Text style={styles.스터디목표}>스터디 소개</Text>
      </View>
    </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  rect: {
    width: 70,
    height: 269,
    shadowOpacity: 1,
    backgroundColor: "rgba(15,15, 15,0)",
    borderWidth: 4,
    borderColor: "rgba(230,224,224,1)",
    shadowColor: "rgba(253,244,244,1)",
    shadowOffset: {
      width: 5,
      height: 5
    },
    elevation: 0,
    marginTop: 334,
    marginLeft: 308
  },
  image3: {
    width: 58,
    height: 41,
    marginTop: 12,
    marginLeft: 7
  },
  계획공유: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    height: 17,
    width: 48,
    fontSize: 12,
    marginTop: 5,
    marginLeft: 11
  },
  image4: {
    width: 54,
    height: 54,
    marginTop: 23,
    marginLeft: 8
  },
  모임원: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    height: 20,
    width: 39,
    fontSize: 12,
    marginLeft: 15
  },
  image2: {
    width: 48,
    height: 44,
    marginTop: 20,
    marginLeft: 11
  },
  채팅: {
    fontFamily: "comic-sans-ms-regular",
    color: "#121212",
    height: 22,
    width: 59,
    fontSize: 12,
    textAlign: "center",
    marginTop: 11,
    marginLeft: 11
  },
  loremIpsum: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 85,
    width: 247,
    marginTop: -550,
    marginLeft: 106
  },
  image: {
    width: 34,
    height: 34
  },
  스터디목표: {
    fontFamily: "comic-sans-ms-regular",
    color: "rgba(3,210,180,1)",
    height: 36,
    width: 190,
    textAlign: "left",
    fontSize: 25,
    marginLeft: 23
  },
  imageRow: {
    height: 42,
    flexDirection: "row",
    marginTop: 17,
    marginLeft: 66,
    marginRight: 62
  }
});