import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native';
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
  Accordion,
} from "native-base";
export default class Notifications extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[
        {id:3, image: "https://bootdey.com/img/Content/avatar/avatar7.png", name:"MAT 101", text:"New LMS assignment", attachment:"https://lorempixel.com/100/100/nature/6/"},
        {id:2, image: "https://bootdey.com/img/Content/avatar/avatar6.png", name:"EEE 321",     text:"New LMS assignment", attachment:"https://lorempixel.com/100/100/nature/5/"},
        {id:4, image: "https://bootdey.com/img/Content/avatar/avatar2.png", name:"COE 432",  text:"New LMS assignment", attachment:""},
        {id:5, image: "https://bootdey.com/img/Content/avatar/avatar3.png", name:"ENG 521",  text:"New LMS assignment", attachment:""},
        {id:1, image: "https://bootdey.com/img/Content/avatar/avatar1.png", name:"ENG 431",    text:"New LMS assignment", attachment:"https://lorempixel.com/100/100/nature/4/"},
        {id:6, image: "https://bootdey.com/img/Content/avatar/avatar4.png", name:"MAT 132", text:"New LMS assignment", attachment:""},
        {id:7, image: "https://bootdey.com/img/Content/avatar/avatar5.png", name:"STA 321",      text:"New LMS assignment", attachment:""},
      ]
    }
  }

  render() {
    return (
      <FlatList
        style={styles.root}
        data={this.state.data}
        extraData={this.state}
        ItemSeparatorComponent={() => {
          return (
            <View style={styles.separator}/>
          )
        }}
        keyExtractor={(item)=>{
          return item.id;
        }}
        renderItem={(item) => {
          const Notification = item.item;
          let attachment = <View/>;

          let mainContentStyle;
          if(Notification.attachment) {
            mainContentStyle = styles.mainContent;
            attachment = <Image style={styles.attachment} source={{uri:Notification.attachment}}/>
          }
          return(
            <View style={styles.container}>
              <Image source={{uri:Notification.image}} style={styles.avatar}/>
              <View style={styles.content}>
                <View style={mainContentStyle}>
                  <View style={styles.text}>
                    <Text style={styles.name}>{Notification.name}</Text>
                    <Text>{Notification.text}</Text>
                  </View>
                  <Text style={styles.timeAgo}>
                    2 hours ago
                  </Text>
                </View>
                {attachment}
              </View>
            </View>
         );
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#FFFFFF"
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: "#FFFFFF",
    alignItems: 'flex-start'
  },
  avatar: {
    width:50,
    height:50,
    borderRadius:25,
  },
  text: {
    marginBottom: 5,
    flexDirection: 'row',
    flexWrap:'wrap'
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0
  },
  mainContent: {
    marginRight: 60
  },
  img: {
    height: 50,
    width: 50,
    margin: 0
  },
  attachment: {
    position: 'absolute',
    right: 0,
    height: 50,
    width: 50
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  timeAgo:{
    fontSize:12,
    color:"#696969"
  },
  name:{
    fontSize:16,
    color:"#1E90FF"
  }
});  