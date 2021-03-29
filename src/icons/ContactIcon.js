import React, {Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default class Plugicon extends Component<{}> {
    render() {
        return (
            <View style={styles.contactView}>
          
            <Icon name="gmail" size={30} color='black' style={styles.gmailIcon} />
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SwipeScreen')}>
            <Text style={styles.contactText}>
            Edfoldy@gmail.com
            </Text>
            </TouchableOpacity>
            </View>
            );
        }
        }
        const styles = StyleSheet.create({
            gmailIcon :{
                color:'white',
    
    },
    contactView:{
       justifyContent:'center',
       alignItems: 'center',
      marginTop: 50,
    },
    contactText:{
        color:'white',
        fontWeight: 'bold',
        fontStyle: 'italic',
    }
});