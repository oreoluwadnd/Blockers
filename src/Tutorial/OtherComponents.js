/**import React, { Component } from 'react' 
import { Text, View } from 'react-native'  
const OtherComponents = (props) => { 
   return ( 
      <View> 
       <Text onPress = {props.updateState}> 
            {props.myState}  
         </Text> 
      </View> 
   ) 
} 
export default OtherComponents
 

import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
state =
    [
        {id:"1",name:'ben',},
        {id:"2",name:'benz',},
        {id:"3",name:'best',},
        {id:"4",name:'bless',}
    ]
export default class FakeApp extends Component <{}> {
    render(){
            <View>{
                this.state.name.map((item, index) =>(
                 <TouchableOpacity
                 key ={item.id}>
            <Text>
            {item.name}
            </Text>
         </TouchableOpacity>
            ))
            }
            </View>
           }}
           import React, { Component } from 'react' 
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'  
export default class OtherComponents extends Component { 
   state = { 
      names: [ 
         { 
            id: 1, 
            name: 'Ben', 
         }, 
         { 
            id: 2, 
            name: 'Susan', 
         }, 
         { 
            id: 3, 
        name: 'Robert', 
         }, 
         { 
            id: 4, 
            name: 'Mary', 
         } 
      ] 
   } 
   alertItemName = (item) => { 
    alert(item.name) 
 } 
   render() { 
      return ( 
         <View>  
            { 
               this.state.names.map((item, index) => ( 
                  <TouchableOpacity 
                     key = {item.id} 
                     style ={styles.container}
                     onPress = {() => this.alertItemName(item)}> 
                      
                     <Text style = {styles.text}> 
                        {item.name} 
                     </Text> 
                  </TouchableOpacity> 
               )) 
            } 
         </View> 
      ) 
   } 
} 
 
const styles = StyleSheet.create ({ 
   container: { 
      padding: 10, 
      marginTop: 3, 
      backgroundColor: '#d9f9b1', 
      alignItems: 'center', 
   }, 
   text: { 
      color: '#4f603c' 
   } 
}) */