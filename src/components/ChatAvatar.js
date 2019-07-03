import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class ChatAvatar extends Component<{}> {
    render() {
      return (
      <View>
         <Icon name="user-circle" size={50}/>
         </View>
 );
        }
        }