import React, {Fragment, useEffect, useCallback, useState} from 'react';
import {
    Image, 
    View,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import {Picker} from '@react-native-community/picker';
import {useDispatch, useSelector} from 'react-redux';
import * as yup from 'yup';

const searchMoimSchema = yup.object().shape({

});

const searchInitialValues = {
    name: '타이틀',
    userCount: '4',
    subject: {label: '자바', value: 'java'},
    area: [],
    policy: '',
    introduction: '',
    mainPicture: '',
};


export function HeaderR({navigation}) {
    const dispatch = useDispatch();
    const {moimListCA} = useSelector((state) => state.moimReducer);
    const [selectedValue, setSelectedValue] = useState('전체');
    
    useEffect(() => {
        // MOIM_LIST_CA
        getMoimListCA();

        console.log('selectedValue');
        console.log(selectedValue);
    }, []);

    const getMoimListCA = useCallback(() => {
        dispatch({
            type: 'GETMOIM_LIST_CA',
            data: {},
        }); 
    }, []);

    return (
        <View style = {styles.container}>
            <Picker style = {styles.category}
                selectedValue={moimListCA}
                onValueChange={ (itemValue, itemIndex) => setSelectedValue(itemValue) }
                >
                {moimListCA.map((moimListCA, i) => {
                    return <Picker.Item key={i} value={moimListCA.commCode} label={moimListCA.commName} />
                })}
            </Picker>
            
            <TouchableHighlight onPress={() => {
                console.log(123);
                // navigation.navigate('SearchMoim');
            }}>
                <Image  source={require('../../../../assets/images/header/Vector.png')} style={{height:20, width:30,resizeMode:'contain',margin: 20}} />
            </TouchableHighlight>           
        </View>
    );
}

const styles = StyleSheet.create({
    container : {
        // flex: 1,
        color: "#03D2B4",
        fontSize: 20,
        fontWeight: "bold",
        margin: 100,
    }
});
