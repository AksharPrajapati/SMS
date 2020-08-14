import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';

function DefaultTextInput(props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={{...props.style, ...styles.inputContainer}}
        name={props.name}
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        onChangeText={props.onChangeText}
        multiline={props.multiline}
        numberOfLines={props.numberOfLines}
        value={props.value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 12,
    alignItems: 'center',
  },
  inputContainer: {
    width: 300,
    height: 48,

    alignItems: 'center',

    backgroundColor: '#F5F6FA',
    paddingLeft: 15,
    borderRadius: 5,
  },
  inputText: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    width: 200,
  },
});

export default DefaultTextInput;
