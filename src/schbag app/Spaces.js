import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Content } from 'native-base';
import SpacesList from '../schbag app/SpacesList';
export default class HeaderIconExample extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name='md-planet' style={{color:tintColor }}/>
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
            <Title>SPACES</Title>
          </Body>
          <Right>
              
          </Right>
        </Header>
        <Content>
            <SpacesList/>
        </Content>
      </Container>
    );
  }
}