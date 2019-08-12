import React, {Component} from 'react';
import {Text, View, StyleSheet,TextInput, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Logo from './Logo';
export default class Forgot extends Component<{}> {
    render(){  
      return(
          <View style={styles.container}>
                          <Logo/>
            <TextInput style={styles.inputBox} underlineColorAndroid='white' placeholder="Email" 
              placholderTextColor='black'
              placeholderTextColor='black'
              selectionColor='black'
              keyboardType="email-address"
              fontStyle='italic'
               />
               <TouchableOpacity style={styles.button} onPress={this.homescreen}>
               <Text style={styles.buttonText}>GET ACCOUNT</Text>
</TouchableOpacity>
 <View style={styles.signupTextCont}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.signupButton}>Signin</Text>
              </TouchableOpacity>
            </View>
              </View>
           )
        }
    }
    const styles = StyleSheet.create({
        container : {
            flex: 1,
            backgroundColor:'#800000',
        alignItems : 'center',
    justifyContent : 'center',
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
      signupTextCont :{
        flexGrow: 1,
        alignItems : 'flex-end',
        justifyContent : 'center',
        paddingVertical: 30,
        flexDirection:'row'
      },
      signupButton: {
        color:'gold',
        fontWeight: '500',
        fontSize: 16
      },
    });