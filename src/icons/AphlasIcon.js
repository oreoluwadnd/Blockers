import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5'
export default class AphlasIcon extends Component<{}> {
  
render() {
    return (
<View>
<TouchableOpacity >
    <Icon name="store" size={24} color='white' style={styles.headerLogout} />
    </TouchableOpacity>
      </View>
            );
        }
    }
    const styles = StyleSheet.create({
    headerLogout:{
        marginVertical : 16,
        color: 'white',
        marginRight: 8,
      }
    });