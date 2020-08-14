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

function Register(props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#FFFFFF'}}>
      <View style={styles.container}>
        <Text style={styles.textHeader}>Sign Up</Text>

        <View style={{marginTop: -10}}>
          <DefaultTextInput
            placeholder="First Name"
            // onTextchange={(val) => this.setMobileNumber(val)}
          />
          <DefaultTextInput
            placeholder="Last Name"
            //   onTextchange={(val) => this.setName(val)}
          />

          <DefaultTextInput
            placeholder="Email"
            //   onTextchange={(val) => this.setPassword(val)}
          />
          <DefaultTextInput
            placeholder="Password"
            secureTextEntry={true}
            //   onTextchange={(val) => this.setPassword(val)}
          />
          {/* <DefaultTextInput
            placeholder="Confirm Password"
            secureTextEntry={true}
            //   onTextchange={(val) => this.setPassword(val)}
          /> */}
          <View style={styles.buttonConainer}>
            <DefaultButton
              title="Sign Up"
              // onClick={() => props.navigation.navigate("Confirm Email")}
            />
          </View>

          <Text style={{textAlign: 'center', marginBottom: 70}}>
            Have an account?
            <TouchableWithoutFeedback
            // onPress={() => props.navigation.navigate("Login")}
            >
              <Text style={{color: '#1A76FC'}}> Sign In</Text>
            </TouchableWithoutFeedback>
          </Text>
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
