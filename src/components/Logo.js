import React, {Component} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
export default class Logo extends Component<{}> {
    render(){
      return(
          <View style={styles.container}>
          <Image
          style={{width: 80, height: 100}}
          source={require("../Images/logo.png")}/>
          <Text style={styles.logoText}>BLOCKERS</Text>
          </View>
      )
    }
}
const styles = StyleSheet.create({
    container : {
    flexGrow: 1,
    justifyContent : 'flex-end',
    alignItems : 'center',
  }, logoText:{
      marginVertical : 15,
        fontSize: 20,
        color: 'gold',
    }
});