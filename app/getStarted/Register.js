import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
  TextInput,
  AsyncStorage,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import DefaultTextInput from '../Components/DefaultTextInput';
import DefaultButton from '../Components/DefaultButton';

function Register(props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#FFFFFF'}}>
      <View style={styles.container}>
        <Text style={styles.textHeader}>Sign Up</Text>

        <Formik
          initialValues={{
            FirstName: '',
            LastName: '',
            Email: '',
            Password: '',
          }}
          onSubmit={async (values, actions) => {
            let teachersString = await AsyncStorage.getItem('teachers');

            let teachers = teachersString ? JSON.parse(teachersString) : [];

            teachers.push(values);
            console.log(teachers);
            try {
              await AsyncStorage.setItem('teachers', JSON.stringify(teachers));
              props.navigation.navigate('Login');
            } catch (e) {
              console.log(e);
            }

            actions.resetForm();
          }}
          validationSchema={yup.object().shape({
            FirstName: yup.string().required('this field must required...'),
            LastName: yup.string(),
            Email: yup.string().required('this field must required...'),
            Password: yup.string().required('this field must required...'),
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
                placeholder="Email"
                onChangeText={handleChange('Email')}
                value={values.Email}
              />
              <DefaultTextInput
                placeholder="Password"
                onChangeText={handleChange('Password')}
                value={values.Password}
                secureTextEntry={true}
              />

              <View style={styles.buttonConainer}>
                <DefaultButton title="Sign Up" onClick={() => handleSubmit()} />
              </View>

              <Text style={{textAlign: 'center', marginBottom: 70}}>
                Have an account?
                <TouchableWithoutFeedback
                  onPress={() => props.navigation.navigate('Login')}>
                  <Text style={{color: '#1A76FC'}}> Sign In</Text>
                </TouchableWithoutFeedback>
              </Text>
            </View>
          )}
        </Formik>
      </View>
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
    marginVertical: 20,
    borderRadius: 25,
    justifyContent: 'center',
  },
  textHeader: {
    marginTop: 80,
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 30,
    marginRight: 210,
  },
});

export default Register;
