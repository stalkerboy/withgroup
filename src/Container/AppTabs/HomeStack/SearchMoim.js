import React, {Fragment, useEffect, useCallback, useState} from 'react';
import {Center} from '../../../Component/Center';
import {
    Image, 
    View,
    StyleSheet,
    TextInput,
} from 'react-native';
import {
    RNEPicker,
  } from '../../../Component/RNElement';
import {useDispatch, useSelector} from 'react-redux';
import * as yup from 'yup';
import {Formik, Field} from 'formik';


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


export function SearchMoim({navigation}) {
    const dispatch = useDispatch();
    const {moimListCA} = useSelector((state) => state.moimReducer);
    const [SearchVal, setSearchVal] = useState('1');

    useEffect(() => {
        // MOIM_LIST_CA
        getMoimListCA();

    }, []);

    const getMoimListCA = useCallback(() => {
        dispatch({
            type: 'GETMOIM_LIST_CA',
            data: {},
        }); 
    }, []);
  
    return (
        <Center>
            <Formik
                initialValues={searchInitialValues}
                validationSchema={searchMoimSchema} />
                {(props) => (
                    <Fragment>
                        <Field
                        name="subject"
                        component={RNEPicker}
                        items={[
                            {label: '전체', value: '01'},
                            {label: '수능', value: '02'},
                        ]}
                        {...props}
                        />
                        <TextInput onChangeText={setSearchVal} placeholder="검색어를 입력해주세요."/>
                    </Fragment>
                )}   
        </Center>
    );
}

const styles = StyleSheet.create({

});
