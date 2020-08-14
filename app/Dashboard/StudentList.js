import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  ScrollView,
  Button,
} from 'react-native';
import DefaultTextInput from '../Components/DefaultTextInput';

export default function StudentList(props) {
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', paddingHorizontal: 10}}>
        <DefaultTextInput
          placeholder="serch student"
          style={{width: 290, marginTop: 5}}
        />
        <TouchableOpacity
          //onPress={() => props.navigation.navigate('Add Student')}
          style={{marginLeft: 9, marginTop: 28}}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text>Student 1</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text>Student 2</Text>
        </View>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.listItem}>
          <Text>Student 3</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  textHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 20,
  },
  listItem: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // position:"absolute"
  },

  listContainer: {
    margin: 20,
    marginVertical: 5,
    borderColor: 'black',
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
});
