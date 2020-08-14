/**
 * React Native App
 * Everthing starts from the entrypoint
 */
import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import Register from './getStarted/Register';
import MyStack from './navigation/StackNavigation';
import Login from './getStarted/Login';

export default function Entrypoint() {
  return (
    <View>
      {/* <MyStack /> */}
      <Register />
      {/* <Login /> */}
    </View>
  );
}
