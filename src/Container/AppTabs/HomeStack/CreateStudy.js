import React, {Fragment} from 'react';
import {Center} from '../../../Component/Center';
import {Button, View} from 'react-native';

import {
  RNEText,
  RNECheckGroup,
  RNEPicker,
  RNEButtonGroup,
  RNEPicturePicker,
  RNEButton,
} from '../../../Component/RNElement';

import * as yup from 'yup';
import {Formik, Field} from 'formik';

const createStudySchema = yup.object().shape({
  name: yup.string().required(), //텍스트
  userCount: yup.number().required(), //넘버숫자
  subject: yup.object({
    label: yup.string().required(),
    value: yup.string().required(),
  }), //콤보박스선택
  //area: yup.array().of(yup.object(yup.string())), //체크박스선택
  policy: yup.string().required(), //라디오버튼
  introduction: yup.string().max(200), //텍스트
  // mainPicture: yup.string(), //텍스트(추후그림추가)
});
const studyInitialValues = {
  name: '타이틀',
  userCount: '4',
  subject: {label: '자바', value: 'java'},
  area: [],
  policy: '',
  introduction: '',
  mainPicture: '',
};

function onClickCreate(values) {
  console.log(JSON.stringify(values));
}

export function CreateStudy({navigation}) {
  return (
    <Center>
      <Formik
        initialValues={studyInitialValues}
        // onSubmit={values => console.log(JSON.stringify(values))}
        // Alert.alert(JSON.stringify(values))}
        validationSchema={createStudySchema}>
        {(props) => (
          <Fragment>
            <Field
              name="name"
              placeholder="모임이름"
              component={RNEText}
              containerStyle={{width: '50%'}}
              autoCapitalize="none"
              {...props}
            />
            <Field
              name="userCount"
              placeholder="모임 인원수"
              component={RNEText}
              containerStyle={{width: '50%'}}
              keyboardType="numeric"
              {...props}
            />

            <Field
              name="subject"
              component={RNEPicker}
              containerStyle={{width: '50%'}}
              items={[
                {label: '자바', value: 'java'},
                {label: '씨언어', value: 'clang'},
                {label: '파이썬', value: 'python'},
                {label: '프로그래밍', value: 'programing'},
              ]}
              {...props}
            />
            <View style={{display: 'flex'}}>
              <Field
                name="area"
                options={['서울', '경기도']}
                component={RNECheckGroup}
                containerStyle={{width: '100%'}}
                {...props}
              />
            </View>
            <Field
              name="policy"
              placeholder="모임 정책"
              component={RNEButtonGroup}
              buttons={['everybody', '방장권한']}
              containerStyle={{width: '50%'}}
              autoCapitalize="none"
              {...props}
            />

            <Field
              name="introduction"
              placeholder="모임 설명"
              component={RNEText}
              containerStyle={{width: '80%'}}
              autoCapitalize="none"
              {...props}
            />
            <Field
              name="mainPicture"
              placeholder="모임 사진"
              component={RNEPicturePicker}
              containerStyle={{width: '80%'}}
              autoCapitalize="none"
              {...props}
            />

            {/* <Button
              title="Sign In"
              //disabled={!props.isValid}
              //onPress={(props.handleSubmit)}
              onPress={() => {
                // console.log(JSON.stringify(props.values));
                this.onClickCreate(props.values);
              }}
            /> */}
            <RNEButton
              title="Sign In"
              containerStyle={{width: '80%', margin: 10}}
              onPress={() => {
                onClickCreate(props.values);
              }}
            />
          </Fragment>
        )}
      </Formik>
    </Center>
  );
}
