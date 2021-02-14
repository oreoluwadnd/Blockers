import React, {Component} from 'react';
import {SafeAreaView, ScrollView, Image, View, Text} from 'react-native';
import { createDrawerNavigator, DrawerItems } from 'react-navigation'
import DiscoverScreen from './screens/DiscoverScreen'
import LikesScreen from './screens/LikesScreen'
import MatchesSceen from './screens/MatchesScreen'
import AboutScreen from './screens/AboutScreen'
export default class HomeScreen extends Component<{}> {
  render() {
    return (
        <AppDrawerNavigator/>
 );
}
}
const CustomDrawerComponent = (props) => (
    <SafeAreaView style={{ flex: 1 }}>
        <View style={{ height: 150,
         backgroundColor: '#800000',
          justifyContent: 'center'
          }}>
            <Image source={require('./Images/proff.jpg')} style={{
                    height: 100,
                width: 100,
                borderRadius: 60,
                    marginHorizontal : 10,
                    marginTop:20,
                    marginRight:5
                    }}/>
           
            <View style={{flex:3,
             flexDirection:'column',
              justifyContent:'center'
              }}>
            <Text  style={{fontSize: 20,
             paddingBottom: 20,
              color:'white'
              , fontFamily: 'Roboto',
               paddingLeft: 120
               }}>Racheal Miller</Text>
            </View>

        </View>
        <ScrollView>
            <DrawerItems {...props}/>
        </ScrollView>
        <View style={{height: 50
        , flexDirection: 'row',
         alignItems:'center',
          backgroundColor:'#800000',
           borderTopWidth:1,
            borderTopColor:'gray'
            }}>
        
        <Text style={{flex:1,
         textAlign:'right',
          marginRight: 20,
           color:'white',
            fontSize:15 
            }}>
            v-1.0
        </Text>
        

        </View>
    </SafeAreaView>
)
const AppDrawerNavigator = createDrawerNavigator({
    Discover:DiscoverScreen,
     Likes:LikesScreen,
     Matches:MatchesSceen,
     About:AboutScreen,
  
 },
{
contentComponent: CustomDrawerComponent,
contentOptions:{
activeTintColor: '#800000'}
}
)

