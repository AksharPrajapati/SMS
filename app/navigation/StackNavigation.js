import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Register from '../getStarted/Register';
import Login from '../getStarted/Login';
import AddStudent from '../Dashboard/AddStudent';
import StudentList from '../Dashboard/StudentList';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" headerMode="none">
        <Stack.Screen name="Login" component={Login} />

        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="AddStudent" component={AddStudent} />
        <Stack.Screen name="StudentList" component={StudentList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
