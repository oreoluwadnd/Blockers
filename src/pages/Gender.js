import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Logo from '../components/Logo';
export default class Gender extends Component <{}> {
  login(){
  Actions.login()
}
    render() {
      return (
        <View style={styles.container}>
        <View style={styles.genderLogo}>
   <Logo/>
   </View>
<View style={styles.genderTextView}>
    <Text style={styles.genderText}>
        GENDER
    </Text>
</View>
<View style={styles.allView}>
<TouchableOpacity style={styles.maleButton} onPress={() => this.props.navigation.navigate('Login')}>
<Text style={styles.maleText}>MALE</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.femaleButton} onPress={() => this.props.navigation.navigate('Login')}>
<Text style={styles.femaleText}>FEMALE</Text>
</TouchableOpacity>
</View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#800000',
flex:1,

  },
  genderLogo : {
  marginTop:150
    },
    genderText:{
        alignSelf:'center',
        fontSize:30,
        color:'white',
        fontWeight:'bold',
        fontStyle: 'italic',
    },
    genderTextView:{
      marginTop:10,

    },
    femaleButton:{
      width:100,
  marginLeft: 20,
      backgroundColor:'gold',
      borderRadius: 50,
    },
  maleButton:{
    width:100,
    marginRight: 20,
    backgroundColor:'gold',
    borderRadius: 50,
  },
  femaleText:{
    fontWeight: 'bold',
    textAlign: 'center',
    color:'#800000',
    fontSize: 20,
    fontStyle: 'italic',
  },
  maleText:{
    color:'#800000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
  },
  allView:{
flexDirection:'row',
marginTop: 30,
justifyContent: 'center',
  }
  });
