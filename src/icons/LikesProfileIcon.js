import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class LikesProfileIcon extends Component<{}> {
    render() {
        return (
            <View>
             <Icon name="user-circle" size={50}  style={styles.userProfile}/>
            </View>
 );
        }
        }
        const styles = StyleSheet.create({
            userProfile:{
                marginLeft: 10,
            
                color:'#800000'
              }
            });