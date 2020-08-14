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
  AsyncStorage,
} from 'react-native';
import DefaultTextInput from '../Components/DefaultTextInput';

export default function StudentList(props) {
  const [listData, setListData] = useState([]);
  const [defaulData, setDefaultData] = useState([]);
  useEffect(() => {
    AsyncStorage.getItem('students')
      .then((data) => {
        const receivedData = data ? JSON.parse(data) : [];
        receivedData.sort((a, b) => b.Percentage - a.Percentage);
        setListData(receivedData);
        setDefaultData(receivedData);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  const onChangeText = (text) => {
    console.log(text);
    if (text && text.trim()) {
      const filterdData = listData.filter(
        (data) =>
          `${data.FirstName} ${data.LastName}`
            .toLowerCase()
            .indexOf(text.trim().toLowerCase()) >= 0 ||
          data.BirthDate.toLowerCase().indexOf(text.trim().toLowerCase()) >= 0,
      );
      setListData(filterdData);
    } else {
      setListData(defaulData);
    }
  };
  return (
    <ScrollView style={{backgroundColor: '#FFFFFF'}}>
      <View style={styles.container}>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 10,
            backgroundColor: '#FFFFFF',
          }}>
          <DefaultTextInput
            placeholder="Student name or Birthdate"
            onChangeText={(text) => onChangeText(text)}
            //value={values.FirstName}
          />
          <TouchableOpacity
            //onPress={() => props.navigation.navigate('Add Student')}
            style={{marginLeft: 9, marginTop: 28}}>
            <Text>Add</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10}}>
          {listData
            ? listData.map(({FirstName, LastName, BirthDate, Percentage}) => (
                <View style={styles.listContainer}>
                  <View style={styles.listItem}>
                    <Text
                      style={{
                        textAlign: 'center',
                      }}>{`${FirstName} ${LastName}`}</Text>
                    <Text style={{textAlign: 'center'}}>{BirthDate}</Text>

                    <Text style={{textAlign: 'center'}}>{Percentage}%</Text>
                  </View>
                </View>
              ))
            : 'No Data Found'}
        </View>
      </View>
    </ScrollView>
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
    // position: 'absolute',
    marginTop: 10,
    marginLeft: 10,
  },

  listContainer: {
    margin: 20,
    marginVertical: 5,
    shadowColor: 'black',
    elevation: 5,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    height: 100,
  },
});
