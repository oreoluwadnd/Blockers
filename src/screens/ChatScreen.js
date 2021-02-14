import React, {Component} from 'react';
import {StyleSheet, View, StatusBar,Text} from 'react-native';
import {Header, Left, Right,Button} from "native-base";
import { GiftedChat } from 'react-native-gifted-chat'
import firebaseSDK from "../config/firebaseSDK"
export default class App extends Component<{}> {
    render() {
      return (
    <GiftedChat/>
   );
  }
  }
