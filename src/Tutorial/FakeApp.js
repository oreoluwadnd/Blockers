/**import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import OtherComponents from './OtherComponents'
export default class FakeApp extends Component <{}> {
    state = {
        myState : 'let go guy'
    }
    updateState = () =>{ this.setState({myState:'chill first'})}
    render(){
        return(
<View>
<OtherComponents myState = {this.state.myState} updateState = {this.updateState} reverseState = {this.reverseState}/>
</View>
        );
    }
}


import React, {Component} from 'react';
import {View, Text,TouchableHighlight,StyleSheet, TouchableNativeFeedback,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import OtherComponents from './OtherComponents'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class FakeApp extends Component <{}> {
    render(){
        return(
            <View style = {styles.container}> 
            <TouchableOpacity style={{width:100,color:'blue'}}> 
            <Text  style = {styles.text}>  
               Button 
            </Text>  
         </TouchableOpacity>
         </View>
        );
    }}
    const styles = StyleSheet.create ({ 
        container: { 
           alignItems: 'center', 
        }, 
        text: { 
           borderWidth: 1, 
           padding: 25, 
        } 
     }) */