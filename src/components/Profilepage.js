import React, {Component} from 'react';
import {
     Text,
     Image, 
     View, 
     StyleSheet,
     TouchableOpacity} from 'react-native';
     import LogoutIcon from '../icons/LogoutIcon'
     import BackIcon from '../icons/BackIcon'
    export default class Profilepage extends Component<{}> {
        render() {
            return(
                <View style={styles.contanier}>
                    <View style={styles.header}>
                      </View>
                        <Image style={styles.Image} source={require('../Images/proff.jpg')}/>
                        <View style={styles.body}>
                            <View style={styles.bodycontent}>
                            <Text style={styles.name}>
                               Racheal Miller
                            </Text>
                            <Text style={styles.about}>
                                DEV
                            </Text>
                            <Text style={styles.status}>
                              Admin
                            </Text>
                            <TouchableOpacity style={styles.upload}>
                                <Text style={styles.uploadtext}>
                                   Upload
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.upload}>
                                <Text style={styles.uploadtext}>
                                Upload
                                </Text>
                            </TouchableOpacity>
                            </View>
                            </View>
                            </View>
            )
        }
    }
   const styles = StyleSheet.create({
       header:{
           backgroundColor : '#800000',
           height:200
       },
       Image:{
           height:130,
           width:130,
           borderWidth:4,
           borderColor:'white',
           position: 'absolute',
            borderRadius:63,
            marginTop:130,
            alignSelf:"center",
        },
        body:{
            marginTop:40

        },
        bodycontent:{
            flex:1,
            alignItems:'center',
            padding: 30,
        },
        name:{
            fontSize:25,
            color:'black',
            fontWeight:'bold'
        },
        about:{
            fontSize:20,
            color:'#800000'
        },
        status:{
            fontSize:15,
            marginTop:10
        },
        upload:{
            backgroundColor:'#800000',
            width:200,
            height:50,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
            borderRadius:22,
            marginTop:20,
            marginBottom:10,      
        },
        uploadtext:{
            color:'white'
        }
   })
 
   