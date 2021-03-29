/**import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  FooterTab,
  Footer,
  Content,
} from "native-base";
import NotificationsList from "../schbag app/NotificationsList";
export default class Notifications extends Component {
  render() {
    return (
      <Container>
      <Header Shadow>
        <Left>
          <Button transparent>
            <Image
              source={require("../Images/g9.jpg")}
              style={{
                height: 40,
                width: 40,
                borderRadius: 60
              }}
            />
          </Button>
        </Left>
        <Body>
          <Title>SCHBAG</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="settings" />
          </Button>
        </Right>
      </Header>
      <Footer>
        <FooterTab>
          <Button active
          onPress={() => this.props.navigation.navigate('Feeds')}>
            <Text>LIBRARY</Text>
          </Button>
          <Button
           onPress={() => this.props.navigation.navigate('SchbagHome')}>
            <Text>HOME</Text>
          </Button>
          <Button 
          onPress={() => this.props.navigation.navigate('Notifications')}
          >
            <Text>NOTIFICATIONS</Text>
          </Button>
        </FooterTab>
      </Footer>
        <Content>
          <NotificationsList />
        </Content>
      </Container>
    );
  }
}*/
import React, { Component } from 'react';
import NotificationsList from "../schbag app/NotificationsList";
import Library from './/Library';
import SchbagHome from './/SchbagHome';
import { Container, Header, Content, Tab, Tabs,Left, Button, Body, Icon,Title,Right,Text,TabHeading, Image } from 'native-base';
export default class SegmentOutsideHeaderExample extends Component {
  render() {
    return (
      <Container>
        <Header hasSegment>
        <Left>
        <Button transparent>
        <Icon name="ios-book" />
            </Button>
          </Left>
          <Body>
            <Title>SCHBAG</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="settings" />
            </Button>
          </Right>
        </Header>
        <Tabs>
          <Tab heading="Library">
          <Library/>
          </Tab>
          <Tab heading="Home">
            <SchbagHome/>
          </Tab>
          <Tab heading="Notifications">
          <NotificationsList />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}