import React, {Component} from 'react';
import {StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
export default class Welcome extends Component <{}> {
    render() {
      return (
        <View style={styles.container}>
        <View style={{alignItems: 'center', backgroundColor: 'white',  borderRadius:25}}>
        <TouchableOpacity>
<Image
style={{width: 120, height: 120, }}
source={require("../Images/logo.png")}/>
</TouchableOpacity>
</View>
<TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Gender')}>
<Text style={styles.buttonText}>GET STARTED</Text>
</TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container : {
        justifyContent: 'center',
      backgroundColor:'#800000',
      flex: 1,
       alignItems: 'center',
    },
  button: {
    width:300,
    backgroundColor:'gold',
    borderRadius:25,
    marginVertical:100,
    paddingVertical: 16,
    textShadowRadius:10
  },
  buttonText:{
    fontSize: 16,
    fontWeight:'500',
    color:'black',
    textAlign: 'center',
    fontStyle:'italic'
  }});
