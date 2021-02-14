import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import AlertList from '../schbag app/AlertList';
export default class HeaderIconExample extends Component {
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
          <Icon name='ios-megaphone' style={{color:tintColor }}/>
        )
      }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent 
            onPress={() => this.props.navigation.openDrawer()}>
              <Icon name='md-menu' />
            </Button>
          </Left>
          <Body>
            <Title>ALERT</Title>
          </Body>
          <Right>
              
          </Right>
        </Header>
        <Content>
            <AlertList/>
        </Content>
      </Container>
    );
  }
}