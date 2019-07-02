import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Logo from '../components/Logo'
import ContactIcon from '../icons/ContactIcon'
import {Header, Left, Right,Button, Icon} from "native-base";
export default class AboutScreen extends Component<{}> {
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
               ABOUT
             </Text>
          </View>
           <Right/>
           </Header>
           <View style={styles.aboutLogo}>
          <Logo />
          </View>
          <View>
            <Text style={styles.aboutText}>
Version 1.00
            </Text>
            <Text style={styles.aboutText}>
Copyright @Blockers 2019
            </Text>
            </View>
            <View>
              <Text style={styles.aboutContact}>
                For feedback, feature request or bug report, please contact:
              </Text>
            </View>
          <View>
<ContactIcon />
          </View>
          </View>
         
       );
    }
    }
    const styles = StyleSheet.create({
    container : {
      flex: 1,
      backgroundColor:'#800000',
    },
    headerText:{
      marginVertical : 15,
        fontSize: 20,
        color: 'white',
        marginRight: 150,
        fontWeight: '300',
    },
    aboutLogo:{
        marginTop:150
    },
    aboutText:{
fontSize: 12,
color:'white',
alignSelf: 'center',
fontStyle: 'italic',
    },
    aboutContact:{
      fontSize:12,
      color:'white',
      alignSelf: 'center',
      marginTop:20
    }
    });