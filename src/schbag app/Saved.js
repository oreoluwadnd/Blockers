import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, Content } from 'native-base';
import SavedNote from '../schbag app/SavedNote';
export default class SearchBarExample extends Component {
    static navigationOptions = {
        drawerIcon: ({tintColor}) => (
          <Icon name='md-bookmarks' style={{color:tintColor }}/>
        )
      }
  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
          <Button
          onPress={() => this.props.navigation.openDrawer()}>
            <Icon name="md-menu" />
            </Button>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
            <SavedNote/>
        </Content>
      </Container>
    );
  }
}