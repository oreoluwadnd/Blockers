import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Header, Left, Right, Icon, Button} from "native-base";
import Likeslist from '../components/Likeslist'
import AphlasIcon from '../icons/AphlasIcon'
export default class LikesScreen extends Component<{}> {
   static navigationOptions = {
     drawerIcon: ({tintColor}) => (
       <Icon name='heart' style={{color:tintColor }}/>
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
              LIKES
            </Text>
         </View>
          <Right/>
          <AphlasIcon/>
        </Header>
        <Likeslist />
      </View>

       );
    }
    }
    const styles = StyleSheet.create({
        container : {
          flex: 1,
          backgroundColor:'white',
        },
        headerText:{
          marginVertical : 15,
            fontSize: 20,
            color: 'white',
            marginRight: 150,
            fontWeight: '300',
        },
        });
