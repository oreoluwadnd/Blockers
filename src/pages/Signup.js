import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Logo from '../components/Logo';
 export default class Signup extends Component<{}> {
  login() {
    Actions.login()
  }
render(){  
  Alert.alert(
    'SIGN UP',
    'Sign up with ur email',
)
        return (
        <View style={styles.container}>
            <Logo/>
            <TextInput style={styles.inputBox} underlineColorAndroid='white' placeholder="Email" 
              placholderTextColor='black'
              placeholderTextColor='black'
              selectionColor='black'
              keyboardType="email-address"
              fontStyle='italic'
              onSubmitEditing={()=> this.password.focus()}
               />
              <TextInput style={styles.inputBox} underlineColorAndroid='white' placeholder="Password"
              secureTextEntry={true}
              fontStyle='italic'
              ref={(input) => this.password = input}
              />
            <TextInput style={styles.inputBox} underlineColorAndroid='white' placeholder="Confirm Password"
              secureTextEntry={true}
              fontStyle='italic'
              ref={(input) => this.password = input}
              />
            <TouchableOpacity style={styles.button} onPress={this.login}>
               <Text style={styles.buttonText}>SIGNUP</Text>
</TouchableOpacity>
            <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>Already have an account</Text>
              <TouchableOpacity onPress={this.login}>
              <Text style={styles.signupButton}>Signin</Text>
              </TouchableOpacity>
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  container : {
    backgroundColor:'#800000',
    flex: 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  signupTextCont :{
    flexGrow: 1,
    alignItems : 'flex-end',
    justifyContent : 'center',
    paddingVertical: 30,
    flexDirection:'row'
  },
  signupText :{
    color:'white',
    fontSize: 15
  },
  signupButton: {
    color:'gold',
    fontWeight: '500',
    fontSize: 16
  },
  buttonText:{
    fontSize: 16,
    fontWeight:'500',
    color:'black',
    textAlign: 'center'
},
button: {
  width:300,
  backgroundColor:'gold',
  borderRadius:25,
  marginVertical:10,
  paddingVertical: 13
},
inputBox: {
  width:300,
  backgroundColor:'white',
  borderRadius:25,
  paddingHorizontal:16,
  fontSize:15,
  color:'black',
  marginVertical:10,

},

});
