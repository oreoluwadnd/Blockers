import React, {Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
export default class Plugicon extends Component<{}> {
    render() {
        return (
            <View>
            <View  style={styles.rateTextView}>
            <Text  style={styles.rateText}>   
            </Text>
            </View>
                  <View style={styles.ActandDecIcons}>
    <View style={styles.ActandDecIcons1}>
    <TouchableOpacity style={styles.ActandDecOpacity1}>
  <Text style={styles.ActandDecText}>
  ACCEPT
  <Icon name="check" size={18} color='black' style={styles.ActandDecIconsall} />
  </Text>
    </TouchableOpacity>
    </View>

    <View style={styles.ActandDecIcons2}>
    <TouchableOpacity style={styles.ActandDecOpacity2}>
<Text style={styles.ActandDecText}>
 DECLINE
<Icon name="close" size={18} color='black' style={styles.ActandDecIconsall} />
</Text>
    </TouchableOpacity>
    </View>
            </View>
            </View>
            );
        }
        }
        const styles = StyleSheet.create({
            ActandDecIcons:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
            },
            ActandDecIcons1:{
marginRight:25
            },
            ActandDecIcons2:{
marginLeft:25
            },
            ActandDecOpacity1:{
                backgroundColor:'green',
                borderRadius: 20,
                width:100
            },
            ActandDecOpacity2:{
                backgroundColor:'red',
                borderRadius: 20,
                width:100
        },
        ActandDecIconsall:{

        },
        ActandDecText:{
            color:'white',
            fontWeight:'bold',
            alignSelf: 'center',
        }
    }
        )