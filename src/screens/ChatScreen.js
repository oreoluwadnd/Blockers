import React, {Component} from 'react';
import {StyleSheet, View, StatusBar,Text} from 'react-native';
import {Header, Left, Right,Button} from "native-base";
import BackIcon from '../icons/BackIcon'
import ChatAvatar from '../components/ChatAvatar'
export default class App extends Component<{}> {
    render() {
      return (
          <View>
          <Header style={{ backgroundColor: '#800000' }} androidStatusBarColor="#800000"> 

          <BackIcon/>
          <ChatAvatar/>
           <View>
             <Text>
             </Text>
          </View>
           <Right/>
           </Header>
    </View>
);
}
}
