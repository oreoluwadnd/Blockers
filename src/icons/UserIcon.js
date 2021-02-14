import React, {Component} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome'
export default class ProfileScreen extends Component<{}> {
render() {
    return (
<View>
<TouchableOpacity onPress={() => this.props.navigation.navigate('Profile')}>
    <Icon name="user" size={24} color='white' style={styles.headerLogout} />
    </TouchableOpacity>
      </View>
            );
        }
    }
    const styles = StyleSheet.create({
    headerLogout:{
        marginVertical : 19,
        color: 'white',
        marginRight: 8,
      }
    });