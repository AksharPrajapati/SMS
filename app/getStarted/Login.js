import React from 'react';
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
  ScrollView,
  Text,
} from 'react-native';
import DefaultTextInput from '../Components/DefaultTextInput';
import DefaultButton from '../Components/DefaultButton';

export default function Login(props) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#FFFFFF'}}>
      <View style={styles.container}>
        <Text style={styles.textHeader}>Sign In</Text>
        <View style={styles.inputText}>
          <DefaultTextInput
            placeholder="Email"
            // value={this.state.RecipeTitle}
            //  onTextchange={(val) => this.setState({ RecipeTitle: val })}
          />
          <DefaultTextInput
            placeholder="Password"
            secureTextEntry={true}
            // value={this.state.RecipeTitle}
            //  onTextchange={(val) => this.setState({ RecipeTitle: val })}
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
          <DefaultButton title="Sign In" />
        </View>
        <Text style={{textAlign: 'center', marginTop: 30, color: '#707070'}}>
          Don't have an account?
          <TouchableWithoutFeedback
          //  onPress={() => props.navigation.navigate('Register')}
          >
            <Text style={{color: '#1A76FC'}}> Sign Up</Text>
          </TouchableWithoutFeedback>
        </Text>
      </View>
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
