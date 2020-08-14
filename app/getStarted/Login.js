import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
  AsyncStorage,
} from 'react-native';
import DefaultTextInput from '../Components/DefaultTextInput';
import DefaultButton from '../Components/DefaultButton';
import {Formik} from 'formik';
import * as yup from 'yup';

export default function Login(props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#FFFFFF'}}>
      <Formik
        initialValues={{
          Email: '',
          Password: '',
        }}
        onSubmit={async (values, actions) => {
          let teachersString = await AsyncStorage.getItem('teachers');

          let teachers = teachersString ? JSON.parse(teachersString) : [];

          let found = teachers.find(
            (teacher) =>
              teacher.Email === values.Email &&
              teacher.Password === values.Password,
          );
          if (found) {
            alert('Successfully Login');
          } else {
            alert('Login Failed..');
          }
          actions.resetForm();
        }}
        validationSchema={yup.object().shape({
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
          <View style={styles.container}>
            <Text style={styles.textHeader}>Sign In</Text>
            <View style={styles.inputText}>
              <DefaultTextInput
                placeholder="Email"
                onChangeText={handleChange('Email')}
                value={values.Email}
              />
              <DefaultTextInput
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={handleChange('Password')}
                value={values.Password}
              />
            </View>
            <TouchableWithoutFeedback
            // onPress={() => props.navigation.navigate('Forget Password')}
            >
              <Text
                style={{
                  color: '#1A76FC',
                  marginTop: 5,
                  marginLeft: 180,
                }}>
                Forgot Password?
              </Text>
            </TouchableWithoutFeedback>

            {/* <Text style={styles.login}>Login Status : {id}</Text> */}
            <View style={styles.buttonContainer}>
              <DefaultButton title="Sign In" onClick={() => handleSubmit()} />
            </View>
            <Text
              style={{textAlign: 'center', marginTop: 30, color: '#707070'}}>
              Don't have an account?
              <TouchableWithoutFeedback
              //  onPress={() => props.navigation.navigate('Register')}
              >
                <Text style={{color: '#1A76FC'}}> Sign Up</Text>
              </TouchableWithoutFeedback>
            </Text>
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
    //
    backgroundColor: '#FFFFFF',
    marginBottom: 60,
  },
  login: {
    padding: 8,
  },
  inputText: {
    marginTop: -10,
  },
  textHeader: {
    fontSize: 25,
    fontWeight: 'bold',
    marginVertical: 40,
    marginTop: 90,
    marginRight: 220,
  },
  buttonContainer: {
    marginTop: 35,
  },
  boxContainer: {
    backgroundColor: '#707070',
    height: 1,
    width: 40,
  },
  circle: {
    flex: 1,
    width: 57,
    height: 57,
    borderRadius: 110,
    borderColor: '#D3D4D6',
    borderWidth: 1,
    justifyContent: 'center',
  },
});
