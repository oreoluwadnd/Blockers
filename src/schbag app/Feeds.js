import React, { Component } from "react";
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
  Text,
  Content,
  Accordion,
  Tabs,
  Tab
} from "native-base";
import SchbagHome from "../schbag app/SchbagHome";
import NotificationsList from "../schbag app/NotificationsList";
import Library from ".//Library";
import { Image } from "react-native";
const dataArray = [
  { title: "Notes", content: "Lorem ipsum dolor sit amet", content2: "ore" },
  { title: "Tests Past Questions", content: "Lorem ipsum dolor sit amet" },
  { title: "Exams Past Questions", content: "Lorem ipsum dolor sit amet" }
];
export default class FEEDS extends Component {
  static navigationOptions = {
    drawerIcon: ({ tintColor }) => (
      <Icon name="ios-trending-up" style={{ color: tintColor }} />
    )
  };
  render() {
    return (
      <Container>
      <Header hasSegment>
      <Left>
      <Button transparent onPress={() => this.props.navigation.openDrawer()}>
      <Icon name="ios-book" />
          </Button>
        </Left>
        <Body>
          <Title>SCHBAG</Title>
        </Body>
        <Right>
        <Button transparent onPress={() => this.props.navigation.navigate('Settings')}>
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