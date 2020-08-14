import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
} from 'react-native';
import DefaultTextInput from '../Components/DefaultTextInput';
import DefaultButton from '../Components/DefaultButton';

function AddStudent(props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#FFFFFF'}}>
      <View style={styles.container}>
        <Text style={styles.textHeader}>Insert Student</Text>

        <View style={{marginTop: -10}}>
          <DefaultTextInput placeholder="First Name" />
          <DefaultTextInput placeholder="Last Name" />

          <DefaultTextInput placeholder="Birthdate" />
          <DefaultTextInput placeholder="Percentage" />

          <View style={styles.buttonConainer}>
            <DefaultButton title="Add Student" />
          </View>
        </View>
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
