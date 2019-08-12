import React, {Component} from 'react';
import {StyleSheet, View, StatusBar,Text} from 'react-native';
import {Header, Left, Right,Button} from "native-base";
import { GiftedChat } from 'react-native-gifted-chat'
import firebaseSDK from "../config/firebaseSDK"
export default class App extends Component<{}> {
  state = {
		messages: []
  };
  get user() {
		return {
			name: this.props.navigation.state.params.name,
			email: this.props.navigation.state.params.email,
			avatar: this.props.navigation.state.params.avatar,
			id: firebaseSDK.uid,
			_id: firebaseSDK.uid
		};
	}
    render() {
      return (
    <GiftedChat
      messages={this.state.messages}
      onSend={firebaseSDK.send}
        user={this.user}
      />
);
}
componentWillUnmount() {
  firebaseSDK.refOn(message =>
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, message)
    }))
  );
}
componentWillUnmount() {
  firebaseSDK.refOff();
}
}
