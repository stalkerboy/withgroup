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


export function HeaderR() {
    const dispatch = useDispatch();
    const {CA1} = useSelector((state) => state.moimReducer);
    const [selectedValue, setSelectedValue] = useState('전체');
    
    useEffect(() => {
        // MOIM_LIST_CA
        getMoimListCA();
    }, [CA1]);

    const getMoimListCA = useCallback(() => {
        dispatch({
            type: 'GET_CA',
            data: {},
        }); 
    }, []);

    const onChange = e => {
        console.log(e);
        setSelectedValue(e.commName);
        if(e != '00'){ // '최상단 안내 카테고리일때는 미발동'
            dispatch({
                type: 'GETMOIM_LIST',
                data: {commCode: e.commCode, page: 1, reloadable: false, searchable: true},
            }); 
        }
    }

    return (
        <View style = {styles.container}>
            <View style={styles.pickerView}>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.picker}
                    onValueChange={ onChange }
                    >
                    <Picker.Item value='00' label='select a support' />
                    {CA1.map((CA1, i) => {
                        return <Picker.Item key={i} value={CA1} label={CA1.commName} />
                    })}
                </Picker>
            </View>
            <View style={styles.touchableView}>
                <TouchableHighlight onPress={() => {
                    console.log(123);
                    // navigation.navigate('SearchMoim');
                }}>
                    <Image  source={require('../../../../assets/images/header/Vector.png')} style={{height:20, width:30,resizeMode:'contain',margin: 20}} />
                </TouchableHighlight> 
            </View>
        </View>
                      
    );
}

const styles = StyleSheet.create({
    container : {
        flexDirection : 'row',
    },
    pickerView : {
        paddingTop : 5,
        alignItems : 'center',
        width: 110,
    },
    picker : {
        width: 110,
        color: 'black',
    },
    touchableView : {
        alignItems : 'center',
        width: 40,
    },
});
