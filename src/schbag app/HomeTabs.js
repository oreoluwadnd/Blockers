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
import SchbagHome from '../schbag app/SchbagHome';
import Notifications from '../schbag app/Notifications';
import Library from './/Library'
import { Image} from 'react-native
const dataArray = [
  { title: "Notes", content: "Lorem ipsum dolor sit amet", content2:"ore" },
  { title: "Tests Past Questions", content: "Lorem ipsum dolor sit amet" },
  { title: "Exams Past Questions", content: "Lorem ipsum dolor sit amet" }
];
export default class FEEDS extends Component {
  static navigationOptions = {
    drawerIcon: ({tintColor}) => (
      <Icon name='ios-trending-up' style={{color:tintColor }}/>
    )
  }
  render() {
    return (
      <Container>
        <Header>
        <Left>
            <Button transparent
            onPress={() => this.props.navigation.openDrawer()}>
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
          <Header hasTab>
          <Tabs>
          <Tab heading="LIBRARY">
      
          </Tab>
          <Tab heading="HOME">
           
          </Tab>
          <Tab heading="NOTIFICATION">
      
          </Tab>
        </Tabs>

        </Header>
      </Container>
    );
  }
}