import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header, Left, Right,Button} from "native-base";
import BackIcon from '../icons/BackIcon'
import Icon from 'react-native-vector-icons/FontAwesome';
export default class ChatAvatar extends Component<{}> {
    render() {
      return (
        <View behavior="padding">
        <Header style={{ backgroundColor: '#800000' }} androidStatusBarColor="#800000"> 

        <BackIcon/>
        <ChatAvatar/>
         <Right/>
         </Header>
         </View>
        );
    }
    }
    const styles = StyleSheet.create({
        container:{
            flexDirection: 'row',
        },
        chatname:{
            fontSize:15,
            fontWeight: 'bold',
            color:'black'
        },
        chatnameview:{
            marginTop: 15,
            marginLeft: 10,
        },
        chatavatarview:{
            marginTop: 8,
        }
    })