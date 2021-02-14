import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import Plugicons from '../icons/Plugicon';
import RatesIcons from '../icons/RatesIcons'
import MessageIcon from '../icons/MessageIcon'
import ActandDec from '../components/ActandDec'
import { Actions } from 'react-native-router-flux';
export default class MatchesScreen extends Component<{}> {
  profile(){
  Actions.profile()
  }
  profile2(){
    Actions.profile2()
    }
    chat(){
      Actions.chat()
      }
   static navigationOptions = {
     drawerIcon: ({tintColor}) => (
       <Icon name='rose' style={{color:tintColor }}/>
     )
   }
  render() {
    return (
         <Container style={styles.container}>
         <Header style={{ backgroundColor: '#800000' }} androidStatusBarColor="#800000">
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>LIKES</Title>
          </Body>
        <Right/>
        <MessageIcon/>
        </Header>
        <Content>
          <View>
<View style={styles.newMatch}>
        <Text  style={styles.newMatchText}>
          NEW MATCH
        </Text>
      </View>
        <View  style={styles.matchesView}>
        <View style={styles.matchesViewLeft}>
        <Image source={require('../Images/guy4.jpg')} style={styles.matchesPic}/>
        <TouchableOpacity style={styles.button} onPress={this.profile2}>
               <Text style={styles.buttonText}>PROFILE</Text>
</TouchableOpacity>

        </View>
        <View style={styles.matchesLogo}>
          </View>
          <View style={styles.matchesViewRight}>
          <Image source={require('../Images/proff.jpg')} style={styles.matchesPic}/>
          <TouchableOpacity style={styles.button} onPress={this.profile}>
               <Text style={styles.buttonText}>PROFILE</Text>
</TouchableOpacity>
          </View>
      </View>
  </View>
  <View>
  <ActandDec/>
  </View>
<View style={styles.matchRatesIcon}>
  <RatesIcons/>
  </View>
  <View style={styles.matchesViewCentre}>
  <TouchableOpacity style={styles.matchesViewCentreOpacity} onPress={this.chat}>
               <Text style={styles.matchesViewCentreText}> MESSAGE</Text>
</TouchableOpacity>
  </View>
  </Content>
</Container>
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
        matchesPic: {
          height: 120,
           width: 120, 
           borderRadius: 100,
            marginHorizontal : 10
        },
        matchesView:{
          alignItems:'center',
           flexDirection: 'row',
           flexGrow: 1,
           justifyContent:'flex-end',
           paddingTop: 20,
},
matchesViewLeft:{
marginRight: 80

},
matchesViewRight:{

},
newMatch:{
  alignSelf: 'center',
  paddingTop: 10,
},
newMatchText:{
  fontSize:30,
  color:'#800000',
  fontWeight:'bold'
},
buttonText:{
  fontSize: 16,
  fontWeight:'100',
  color:'white',
  textAlign: 'center',
  fontStyle:'italic'
},
button: {
  width:80,
  backgroundColor:'#800000',
  borderRadius:25,
marginLeft: 30,
marginTop: 10,
},
matchesViewCentre:{
  flexGrow: 1,
  alignItems : 'flex-end',
  justifyContent : 'center',
  paddingVertical: 30,
  flexDirection:'row'
},
matchesViewCentreText:{
textAlign:'center',
fontSize: 20,
color:'white',
fontWeight:'bold',
fontStyle:'italic'
},
matchesViewCentreOpacity:{
    width:200,
    backgroundColor:'#800000',
    borderRadius:25,
    marginVertical:10,
    paddingVertical: 13
  },
matchRatesIcon:{
  marginTop:60,
 borderColor:'#800000' ,
 height:90,
 borderWidth: 1,
}
        });
