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
  List,
  ListItem,
  Thumbnail
} from "native-base";
import { Image, SafeAreaView, View, ScrollView } from "react-native";
import Feeds from "../schbag app/Feeds";
import Saved from './/Saved';
import Spaces from './/Spaces';
import Alert from '../schbag app/Alert';
import { createDrawerNavigator, DrawerItems } from 'react-navigation'
export default class HomeScreen extends Component<{}> {
  render() {
    return <AppDrawerNavigator />;
  }
}
const CustomDrawerComponent = props => (
  <SafeAreaView style={{ flex: 1 }}>
    <View
      style={{
        height: 150,
        backgroundColor: "#3F51B5",
        justifyContent: "center"
      }}>
      <Image
        source={require("../Images/orelinkd.jpg")}
        style={{
          height: 100,
          width: 100,
          borderRadius: 60,
          marginHorizontal: 10,
          marginTop: 20,
          marginRight: 5
        }}
      />
      <View
        style={{ flex: 3, flexDirection: "column", justifyContent: "center" }}
      >
        <Text
          style={{
            fontSize: 20,
            paddingBottom: 20,
            color: "white",
            fontFamily: "Roboto",
            paddingLeft: 120
          }}
        >
          AORE MEME
        </Text>
      </View>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
    <View
      style={{
        height: 50,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#3F51B5",
        borderTopWidth: 1,
        borderTopColor: "gray"
      }}
    >
      <Text
        style={{
          flex: 1,
          textAlign: "right",
          marginRight: 20,
          color: "white",
          fontSize: 15
        }}
      >
        v-1.0
      </Text>
    </View>
  </SafeAreaView>
);
const AppDrawerNavigator = createDrawerNavigator(
  {
    Feeds: Feeds,
    Spaces : Spaces,
    Alert : Alert,
    Saved : Saved,

  },
  {
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: "#3F51B5"
    }
  }
);
