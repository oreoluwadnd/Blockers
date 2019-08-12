/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';
import Routes from './src/Routes';
import MessagesScreen from './src/screens/MessagesScreen'
import Homescreen from './src/Homescreen';
import Welcome from './src/pages/Welcome'
import HomeScreen from './src/Homescreen';
import SwipeScreen from './src/screens/SwipeScreen';
import Header from './src/components/Profilepage';
import Likelist from './src/components/Data'
import LikesScreen from './src/screens/LikesScreen';
import Likeslist from './src/components/Likeslist'
import MatchesScreen from './src/screens/MatchesScreen'
import Plugicon from './src/icons/Plugicon'
import ProfileScreen from './src/screens/ProfileScreen';
import RatesIcons from './src/icons/RatesIcons'; 
import MessageContBox from './src/components/MessageContBox';
import Aboutscreen from './src/screens/AboutScreen'
import ContactIcon from './src/icons/ContactIcon'
import Gender from './src/pages/Gender'
import AppNavigator from './src/navigation/AppNavigator'
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
    <AppNavigator/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
  backgroundColor:'#800000',
  flex: 1,
  justifyContent:'center'
  },
});