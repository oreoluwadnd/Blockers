import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class ChatAvatar extends Component<{}> {
    render() {
      return (
          <View style={styles.container}>
          <TextInput style={styles.inputBox}/>
          <TouchableOpacity style={styles.sendIcon}>
          <Icon name="send" size={35} color='#800000' style={styles.iconsSend}/>
          </TouchableOpacity>
          </View>
    );
        }
        }
        const styles = StyleSheet.create({
                            container:{
                flexDirection: 'row',
                padding: 5,
                marginTop: 540,
            },
            inputBox:{
                borderColor: '#800000',
                width:350,
                borderWidth: 2,
                borderRadius: 25,
            },
            sendIcon:{
                backgroundColor:'gold',
                borderRadius:1000,
                width:50,
                marginLeft: 3.5,
               
                justifyContent: 'center',
            },
            iconsSend:{
    alignSelf: 'auto',
    marginLeft: 10,
            }
  })