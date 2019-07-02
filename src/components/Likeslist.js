import React, { Component } from "react";
import { StyleSheet,
      FlatList,
       Text,
        View,
        RefreshControl 
        } from "react-native";
        import DATA from './Data'
import LikesProfileIcon from "../icons/LikesProfileIcon";

        export default class App extends Component<{}> {

            constructor(props) {
              super(props);
            
              this.state = {
                data: DATA,
                refreshing: false,
              };
            }
          
            _keyExtractor(index) {
              return index;
            } 
          
            renderItem(data) {
              let { item } = data;
          
              return (
                <View style={styles.itemBlock}>
                <LikesProfileIcon style={styles.itemImage}/>
                  <View style={styles.itemMeta}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemLastMessage}>{item.message}<Text style={{fontSize:10}}>{item.time}</Text></Text>
                  </View>
                </View>
              ) 
            }
          
            renderSeparator() {
              return <View style={styles.separator} />
            }
            _onRefresh() {
              this.setState({
                refreshing: true
              })
              setTimeout(function() {
                this.setState({
                  refreshing: false
                })
              }.bind(this),1000)
            }
          
            render() {
              return (
                <View style={styles.container}>
                  <FlatList 
                    keyExtractor={this._keyExtractor}
                    showsVerticalScrollIndicator={false}
                    data={this.state.data}
                    renderItem={this.renderItem.bind(this)}
                    ItemSeparatorComponent={this.renderSeparator.bind(this)}
                    refreshControl={
                      <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh.bind(this)}
                      />
                    }
                  />
                </View>
              );
            }
          }
          
          const styles = StyleSheet.create({
            container: {
              flex: 1,
              marginTop: 10,
            },
            itemBlock: {
              flexDirection: 'row',
              paddingBottom: 10,
            },
            itemImage: {
              width: 50,
              height: 50,
              borderRadius: 25,
              marginLeft:10,
            },
            itemMeta: {
              marginLeft: 10,
              justifyContent: 'center',
            },
            itemName: {
              fontSize: 20,
              color:'black'
            },
            itemLastMessage: {
              fontSize: 15,
              color: "black",
            },
            separator: {
              height: 1,
              width: "80%",
              alignSelf: 'center',
              backgroundColor: "#555"
            },
            header: {
              padding: 10,
            },
            headerText: {
              fontSize: 30,
              fontWeight: '900'
            }
          });