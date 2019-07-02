import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header, Left, Right, Icon, Button} from "native-base";
import Category from '../components/Category';
import UserIcon from '../icons/UserIcon'
export default class Discoverscreen extends Component<{}> {
   static navigationOptions = {
     drawerIcon: ({tintColor}) => (
       <Icon name='pulse' style={{color:tintColor }}/>
     )
   }
  render() {
    return (
         <View style={styles.container}>
         <Header style={{ backgroundColor: '#800000' }} androidStatusBarColor="#800000"> 
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <View>
            <Text style={styles.headerText}>
              DISCOVER
            </Text>
         </View>
          <Right/>
          <UserIcon/>
          </Header>
<View style={styles.category}>
          <Category />
          </View>
      </View>

       );
    }
    }
    const styles = StyleSheet.create({
        container : {
          flex: 1,
          backgroundColor:'white'
        },
        headerText:{
          marginVertical : 15,
            fontSize: 20,
            color: 'white',
            paddingRight: 150,
            fontWeight: '300',
        }
        });