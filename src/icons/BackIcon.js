import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Left, Button} from "native-base";
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/AntDesign'
export default class LikesProfileIcon extends Component<{}> {
    pop() {
        Actions.pop()
      } 
    render() {
        return (
            <View>
             <Left>
         <Button
              transparent
              onPress={this.pop}>
            <Icon name="arrowleft" size={28} color='white' style={styles.backIcon}/>
            </Button>
          </Left>
            </View>
        );
        }
        }
        const styles = StyleSheet.create({
        backIcon: {
            marginTop:10
        }
    })
