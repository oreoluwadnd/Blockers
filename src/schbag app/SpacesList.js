import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  Image,
  ListView,
  TouchableOpacity
} from 'react-native';

export default class UserListView extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
         {image: "https://bootdey.com/img/Content/avatar/avatar1.png"},
         {image: "https://bootdey.com/img/Content/avatar/avatar6.png"},
         {image: "https://bootdey.com/img/Content/avatar/avatar2.png"},
         {image: "https://bootdey.com/img/Content/avatar/avatar3.png"},
         {image: "https://bootdey.com/img/Content/avatar/avatar4.png"},
      ]),
    };
  }

  render() {
    return (
      <ListView enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(service) => {
          return (
            <View style={styles.box}>
              <Image style={styles.image} source={{uri: service.image}} />
              <View style={styles.boxContent}>
                <Text style={styles.title}>NUESA</Text>
                <Text style={styles.description}>ASSOCIATION WITHIN THE SCHOOL</Text>
                <View style={styles.buttons}>
                  <TouchableHighlight style={[styles.button, styles.view]} onPress={() => this.clickListener('login')}>
                    <Image style={styles.icon} source={{uri: 'https://png.icons8.com/ok/androidL/30/ffffff'}}/>
                  </TouchableHighlight>

                  <TouchableHighlight style={[styles.button, styles.profile]} onPress={() => this.clickListener('login')}>
                    <Image style={styles.icon} source={{uri: 'https://png.icons8.com/male-user/win8/30/ffffff'}}/>
                  </TouchableHighlight>

                  <TouchableHighlight style={[styles.button, styles.message]} onPress={() => this.clickListener('login')}>
                    <Image style={styles.icon} source={{uri: 'https://png.icons8.com/envelope/p1em/30/ffffff'}}/>
                  </TouchableHighlight>
                </View>
              </View>
            </View>
          )
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 100,
    height:100,
  },
  box: {
    padding:20,
    marginTop:5,
    marginBottom:5,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  boxContent: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft:10,
  },
  title:{
    fontSize:18,
    color:"#151515",
  },
  description:{
    fontSize:15,
    color: "#646464",
  },
  buttons:{
    flexDirection: 'row',
  },
  button: {
    height:35,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    width:50,
    marginRight:5,
    marginTop:5,
  },
  icon:{
    width:20,
    height:20,
  },
  view: {
    backgroundColor: "#FF1493",
  },
  profile: {
    backgroundColor: "#1E90FF",
  },
  message: {
    backgroundColor: "#228B22",
  },
});
 