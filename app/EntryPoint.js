/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import Register from './getStarted/Register';
import MyStack from './navigation/StackNavigation';
import Login from './getStarted/Login';
import AddStudent from './Dashboard/AddStudent';
import StudentList from './Dashboard/StudentList';

export default function Entrypoint() {
  return (
    <View>
      {/* <MyStack /> */}
      {/* <Register /> */}
      {/* <AddStudent /> */}
      <StudentList />
      {/* <Login /> */}
    </View>
  );
}
