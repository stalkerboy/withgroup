import React, {Fragment, useEffect, useCallback} from 'react';
import {
    Image, 
    View,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import * as yup from 'yup';
import {Formik, Field} from 'formik';

import {
    RNEPicker
} from '../../../Component/RNElement';

const searchMoimSchema = yup.object().shape({
    category: yup.object({
      label: yup.string().required(),
      value: yup.string().required(),
    }), //콤보박스선택
});

const searchInitialValues = {
    category: {value: '01', label: '전체'},
};


export function HeaderR() {
    const dispatch = useDispatch();
    const {CA1} = useSelector((state) => state.moimReducer);

    useEffect(() => {
        // MOIM_LIST_CA
        getMoimListCA();
    }, [CA1]);

    const getMoimListCA = useCallback(() => {
        dispatch({
            type: 'GET_CA',
            data: {},
        }); 
    }, [CA1]);

    const onSearch = e => {
        // console.log(CA1);
        // console.log(e.category.commCode);
        dispatch({
            type: 'GETMOIM_LIST',
            data: {commCode: e.category.commCode, page: 1, reloadable: false, searchable: true},
        }); 
    }
    
    return (
        <View style = {styles.container}>
            <Formik
                initialValues={searchInitialValues}
                validationSchema={searchMoimSchema}>
                {(props) => (
                    <Fragment>
                        <Field
                            name="category"
                            component={RNEPicker}
                            containerStyle={styles.picker}
                            items={CA1}
                            {...props}
                        />
                        <RNEButton
                            title="검색"
                            containerStyle={styles.touchableView}
                            onPress={() => {
                                onSearch(props.values);
                            }}
                        />
                    </Fragment>
                )}
            </Formik>
            {/* 필요하면 PictureButton 만듬 */}
            {/* <View style={styles.touchableView}>
                <TouchableHighlight onPress={onSearch}>
                    <Image  source={require('../../../../assets/images/header/Vector.png')} style={{height:20, width:30,resizeMode:'contain',margin: 20}} />
                </TouchableHighlight> 
            </View> */}
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
        width: 250,
    },
    picker : {
        width: 250,
        color: 'black',
    },
    touchableView : {
        paddingTop : 5,
        alignItems : 'center',
        width: 50,
    },
});
