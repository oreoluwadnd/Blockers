import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header, Right} from "native-base";
import Profilepage from '../components/Profilepage';
import LogoutIcon from '../icons/LogoutIcon'
import BackIcon from '../icons/BackIcon'
export default class ProfileScreen extends Component<{}> {
  render() {
    return (
         <View style={styles.container}>
         <Header style={{ backgroundColor: '#800000' }} androidStatusBarColor='#800000' barStyle="light-content">
        <BackIcon/>
          <View>
            <Text style={styles.headerText}>
              PROFILE
            </Text>
         </View>
          <Right/>
        <LogoutIcon/>
        </Header>
        <Profilepage/>
      </View>

       );
    }
    }
    const styles = StyleSheet.create({
        container : {
          flex:1,
          backgroundColor:'#800000'
        },
        headerText:{
          marginVertical : 15,
            fontSize: 20,
            color: 'white',
            marginRight: 150,
            fontWeight: '300',
        },
        headerLogout:{
          marginVertical : 15,
          color: 'white',
          fontWeight:'bold'
        }
      
        });