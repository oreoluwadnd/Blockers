





/**import React, { Component } from "react";
import { Platform, StyleSheet, FlatList, Text, View, Alert } from "react-native";
export default class Likelist extends Component<{}> {
constructor(props) {
    super(props);

    this.state = {
      FlatListItems: [
        { key: "Podrick liked your profile" },
        { key: "Briene liked your profile" },
        { key: "Joffery liked your profile" },
        { key: "Moose liked your profile" },
        { key: "Rick liked your profile" },
        { key: "Jacon liked your profile" },
        { key: "Jason liked your profile" },
        { key: "Phil liked your profile" },
        { key: "Adams liked your profile" },
        { key: "Andy liked your profile" },
        { key: "Selena liked your profile" },
        { key: "Hoston liked your profile" },
        { key: "Drake liked your profile" },
        { key: "Myson liked your profile" },
        { key: "Salk liked your profile" },
        { key: "Webster liked your profile" },
        { key: "Curtis liked your profile" },
        { key: "Putin liked your profile" },
        { key: "Linx liked your profile" },
        { key: "Eddy liked your profile" },
      ]
    };
  }
  FlatListItemSeparator = () => {
    return (
      <View style={{ height: 1,
       width: "100%",
          backgroundColor: "gray" ,
           borderRadius: 4}} />
    );
};
GetItem(item) {
    Alert.alert(item);
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList
           data={ this.state.FlatListItems }
           ItemSeparatorComponent = {this.FlatListItemSeparator}
           renderItem={this.FlatListItems = <Text style={styles.item} onPress={this.GetItem.bind(this, item.key)} > {item.key} </Text>}
        />
      </View>
   );
 }

}
source={{uri:item.picture}}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: "center",
   backgroundColor: "white"

 },
 item: {
   padding: 10,
   fontSize: 15,
   height: 45,
   color:'#800000'
 }
});
*/

const DATA = [{"id":1,"name":"Dray","message":'liked your profile',"picture":"uri require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":2,"name":"Selena","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":3,"name":"Pod","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":4,"name":"Joffery","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":5,"name":"Imp","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":6,"name":"Ore","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":7,"name":"Wolf","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":8,"name":"Weann","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":9,"name":"Quin","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":10,"name":"Wrang","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":11,"name":"Sandy","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":12,"name":"Doddle","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":13,"name":"Marli","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":14,"name":"Waki","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":15,"name":"Ranm","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":16,"name":"Prone","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":17,"name":"Frine","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":18,"name":"Sofia","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":19,"name":"Drack","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":20,"name":"Chips","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":21,"name":"Ruby","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":22,"name":"React","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":23,"name":"Flavours","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":24,"name":"Sir","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":25,"name":"Hello","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":26,"name":"Khal","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":27,"name":"Bite","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":28,"name":"Gosh","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":29,"name":"Dennis","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":30,"name":"Mean","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":31,"name":"Sandstorm","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":32,"name":"Fatiye","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":33,"name":"Khan","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":34,"name":"Khalessi","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":35,"name":"Hahaha","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":36,"name":"Goan","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":37,"name":"Playground","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":38,"name":"Rabbies","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":39,"name":"Rock","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":40,"name":"Roll","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
              {"id":41,"name":"Wow","message":"liked your profile","picture":"uri: require('../Images/g3.jpg')","time":"  5mins ago"},
                ]
                export default DATA;
            
                
              
           

      
