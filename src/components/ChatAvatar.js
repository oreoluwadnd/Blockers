import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class ChatAvatar extends Component<{}> {
    render() {
      return (
          <View style={styles.container}>
      <View>
         <Icon name="user-circle" size={50} color='white'/>
         </View>
         <View style={styles.chatnameview}>
         <Text style={styles.chatname}>
         GUY DANGEROUS
         </Text>
         </View>
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
                color:'white'
            },
            chatnameview:{
                marginTop: 15,
                marginLeft: 10,
            }
        })