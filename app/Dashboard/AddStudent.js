import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
  AsyncStorage,
} from 'react-native';
import DefaultTextInput from '../Components/DefaultTextInput';
import DefaultButton from '../Components/DefaultButton';
import {Formik} from 'formik';
import * as yup from 'yup';

function AddStudent(props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#FFFFFF'}}>
      <Formik
        initialValues={{
          FirstName: '',
          LastName: '',
          BirthDate: '',
          Percentage: '',
        }}
        onSubmit={async (values, actions) => {
          let studentString = await AsyncStorage.getItem('students');

          let Students = studentString ? JSON.parse(studentString) : [];

          Students.push(values);
          console.log(Students);
          try {
            await AsyncStorage.setItem('students', JSON.stringify(Students));
            props.navigation.navigate('StudentList');
          } catch (e) {
            console.log(e);
          }

          actions.resetForm();
        }}
        validationSchema={yup.object().shape({
          FirstName: yup.string().required('this field must required...'),
          LastName: yup.string(),
          BirthDate: yup.string().required('this field must required...'),
          Percentage: yup.string().required('this field must required...'),
        })}>
        {({
          handleChange,
          values,
          handleSubmit,
          setFieldValue,
          errors,
          touched,
          setValues,
        }) => (
          <View style={styles.container}>
            <Text style={styles.textHeader}>Insert Student</Text>

            <View style={{marginTop: -10}}>
              <DefaultTextInput
                placeholder="First Name"
                onChangeText={handleChange('FirstName')}
                value={values.FirstName}
              />
              <DefaultTextInput
                placeholder="Last Name"
                onChangeText={handleChange('LastName')}
                value={values.LastName}
              />

              <DefaultTextInput
                placeholder="Birthdate"
                onChangeText={handleChange('BirthDate')}
                value={values.BirthDate}
              />
              <DefaultTextInput
                placeholder="Percentage"
                onChangeText={handleChange('Percentage')}
                value={values.Percentage}
              />

              <View style={styles.buttonConainer}>
                <DefaultButton
                  title="Add Student"
                  onClick={() => handleSubmit()}
                />
              </View>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

    backgroundColor: '#FFFFFF',
  },

  buttonConainer: {
    flexDirection: 'row',
    marginVertical: 40,
    borderRadius: 25,
    justifyContent: 'center',
  },
  textHeader: {
    marginTop: 80,
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 30,
    marginRight: 140,
  },
});

export default AddStudent;
