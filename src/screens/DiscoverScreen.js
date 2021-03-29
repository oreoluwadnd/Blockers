import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Segment, Content } from 'native-base'
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
         <Container style={styles.container}>
         <Header hasSegment style={{ backgroundColor: '#800000' }} androidStatusBarColor="#800000"> 
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Discover</Title>
          </Body>
          <Right/>
          <UserIcon/>
          </Header>
          <Content>
<View style={styles.category}>
          <Category />
          </View>
          </Content>
      </Container>

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