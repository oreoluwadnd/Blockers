import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Logo from '../components/Logo';
import firebaseSDK from '../config/firebaseSDK'
export default class Login extends Component<{}> {
  static navigationOptions = {
    title : 'Chat'
  };
  state = {
    name:'no name',
    email:'',
    password: '',
  };
  onPressLogin = async () => {
      const user ={
        name:this.state.name,
        email: this.state.email,
        password: this.state.password,
        avatar:this.state.avatar
      };
      const reponse = firebaseSDK.login(
        user,
        this.loginSuccess,
        this.loginFailed
      );
    };
    loginSuccess = () => {
      console.log('login successfuol,navigate to chat')
      this.props.navigation.navigate('ChatScreen',{
        name:this.state.name,
        email: this.state.email,
        avatar: this.state.avatar
      });
    };
    loginFailed = () => {
      alert('Login failure. Please tried again.');
    };
    onChangeTextEmail = email => this.setState({email})
    onChangeTextPassword = password => this.setState({password});
render() {
        return (
        <View style={styles.container}>
           
            <Logo/>
            <TextInput style={styles.inputBox} underlineColorAndroid='white' placeholder="Email" 
              placeholderTextColor='black'
              selectionColor='black'
              keyboardType="email-address"
              fontStyle='italic'
              onSubmitEditing={()=> this.password.focus()}
              onChangeText={this.onChangeTextEmail}
              value={this.state.email}
               />
              <TextInput style={styles.inputBox} underlineColorAndroid='white' placeholder="Password"
              secureTextEntry={true}
              fontStyle='italic'
              onChangeText={this.onChangeTextPassword}
              value={this.state.password}
              ref={(input) => this.password = input}
              />
            <TouchableOpacity style={styles.button} onPress={this.onPressLogin}>
               <Text style={styles.buttonText}>LOGIN</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => this.props.navigation.navigate('Forgot')}>
<Text style={styles.forgotText}>Forgot Password?</Text>
</TouchableOpacity>
            <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>Don't have account yet?</Text>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={styles.signupButton}>Signup</Text>
              </TouchableOpacity>
            </View>
            </View>
        )
    }
}
const styles = StyleSheet.create ({
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
forgotText:{
  color :'white',

}
});
//adb shell input keyevent 82