import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

function DefaultButton(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{...styles.buttonContainer, ...props.style}}
        onPress={props.onClick}>
        <Text style={styles.buttonTitle}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 0,
    alignItems: 'center',
  },
  buttonContainer: {
    width: 300,
    height: 50,
    alignItems: 'center',
    backgroundColor: '#F8585B',
    paddingLeft: 15,
    borderRadius: 5,
    shadowColor: '#00000029',
    elevation: 3,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 15,
    marginTop: 12,
    marginRight: 15,
    fontWeight: 'bold',
  },
});

export default DefaultButton;
