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

  eventClickLister = (viewId) => {
   Alert.alert("Alert", "Item selected");
  }

  render() {
    return (
      <ListView enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(service) => {
          return (
            <View>
              <TouchableOpacity onPress={() => this.eventClickLister("row")}>
                <View style={styles.box}>
                  <Image style={styles.icon} source={{uri: 'https://png.icons8.com/ok/color/20/ffffff'}}/>
                  <Image style={styles.image} source={{uri: service.image}} />
                  <View style={styles.boxContent}>
                    <Text style={styles.title}>100LVL - 500LVL NOTES</Text>
                    <Text style={styles.description}>THIS NOTE HAS BEEN SAVED SUCCESSFULLY ON YOUR DEVICE</Text>
                  </View>
                </View>
              </TouchableOpacity>
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
  icon:{
    width:20,
    height:20,
    alignSelf:'center',
    marginRight:10
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
  description:{
    fontSize:15,
    color: "#646464",
  },
  title:{
    fontSize:18,
    color:"#151515",
  }
}); 