import React, {Fragment, useState, useEffect, useCallback} from 'react';
import {
    Image, 
    View,
    StyleSheet,
    TouchableHighlight,
} from 'react-native';
import Modal from "react-native-modal";
import {useDispatch, useSelector} from 'react-redux';

import * as yup from 'yup';
import {Formik, Field} from 'formik';

import {
    RNEPicker,
    RNEText,
} from '../../../Component/RNElement';

const searchMoimSchema = yup.object().shape({
    category: yup.object({
      label: yup.string().required(),
      value: yup.string().required(),
    }), //콤보박스선택
    searchVal: yup.string().required(), //텍스트
});

const searchInitialValues = {
    category: {commHead : 'CA1', commCode: '01', value: '01', label: '전체'},
    searchVal : "HashTag 입력",
};


export function HeaderR() {
    const dispatch = useDispatch();
    const {CA1} = useSelector((state) => state.CAReducer);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        getMoimListCA();
    }, []);

    const getMoimListCA = useCallback(() => {
        dispatch({
            type: 'GET_CA',
            data: {},
        }); 
    }, [CA1]);

    const onSearch = e => {
        dispatch({
            type: 'GETMOIM_LIST',
            data: {commCode: e.category.commCode, page: 1, reloadable: false, searchable: true},
        }); 
    }

    const onModal = () => {
        setModalVisible(true);
    }
    
    return (
        <View style = {styles.container}>
            <Modal
                //isVisible Props에 State 값을 물려주어 On/off control
                isVisible={modalVisible}
                //아이폰에서 모달창 동작시 깜박임이 있었는데, useNativeDriver Props를 True로 주니 해결되었다.
                useNativeDriver={true}
                hideModalContentWhileAnimating={true}
                style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
            > 
                <View style = {styles.modalBox}>
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
                                <Field
                                    name="searchVal"
                                    component={RNEText}
                                    containerStyle={{width: '100%'}}
                                    autoCapitalize="none"
                                    {...props}
                                />
                                <RNEButton
                                    title="검색"
                                    containerStyle={styles.touchableView}
                                    onPress={() => {
                                        onSearch(props.values);
                                        setModalVisible(false);
                                    }}
                                />
                            </Fragment>
                        )}
                    </Formik>
                </View>
            </Modal>
            {/* 필요하면 PictureButton 만듬 */}
            <View style={styles.touchableView}>
                <TouchableHighlight onPress={onModal}>
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
    modalBox : {
        backgroundColor : '#ffffff',
        width: '100%',
    },
    pickerView : {
        paddingTop : 5,
        alignItems : 'center',
        width: 250,
    },
    picker : {
        width: '100%',
        color: 'black',
    },
    touchableView : {
        paddingTop : 5,
        alignItems : 'center',
        width: 50,
    },
});
