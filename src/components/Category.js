import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, Image, TouchableOpacity, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Listing from '../components/Listing'
import { withNavigation } from "react-navigation";
import Discoverscreen from '../screens/DiscoverScreen';
const { width } = Dimensions.get('window')
export default class Categories extends Component<{}> {
    render(){
      return(
        <View style={{}}>
    <ScrollView 
      scrollEventThrottle={16}>
          <View style={{flex:1,
           backgroundColor:'white',
           paddingTop:10
           }}>
              <Text  style={{fontSize:24,
               fontWeight:'700',
                paddingHorizontal:20,
                 color:'#800000'
                 }}>
             FEEDS
          </Text>

          <View style={{height: 130, marginTop:10}}>
        <ScrollView horizontal={true}
              showsHorizontalScrollIndicator={false}
              >
              <TouchableOpacity onPress={() => this.props.navigation.navigate('SwipeScreen')}>
                 <Listing imageUri={require('../Images/g9.jpg')}
                 name="EXPLORE" />
                 </TouchableOpacity>
                 <Listing imageUri={require('../Images/guy3.jpg')}
                 name="ADS" />
                 <Listing imageUri={require('../Images/g7.jpg')}
                 name="ADS" />
                 <Listing imageUri={require('../Images/guy1.jpg')}
                 name="ADS" />
                 <Listing imageUri={require('../Images/g8.jpg')}
                 name="ADS" />
                 <Listing imageUri={require('../Images/guy5.jpg')}
                 name="ADS" />
                 <Listing imageUri={require('../Images/g11.jpg')}
                 name="ADS" />
                 <Listing imageUri={require('../Images/guy6.jpg')}
                 name="ADS" />
              </ScrollView>
          </View>
    <ScrollView
           vertical={true}
              showsVerticalScrollIndicator={false}
              >
          <View style={{
               marginTop: 20,
           paddingHorizontal: 20
           }}>
              <Text style={{
                  color:'#800000',
               fontSize: 24,
                fontWeight:'700'
                }}>
                  Introducing Blockers plus
              </Text>
              <Text style={{color:'#800000',
               fontWeight:'100',
                marginTop: 10
                }}>
                  Upgraded features with quality user experience 
              </Text>
        <View style={{width:width-40,
         height:220,
          marginTop:20
          }}>
              <Image source={require('../Images/g3.jpg')} 
              style={{height: null,
               width: null,
                resizeMode:'cover',
                 flex:1,
                  borderRadius:5,
                   borderWidth:1,
                    borderColor:'#800000'
                     }}/>
             
        </View>
        </View>
    </ScrollView>
       </View>
    </ScrollView>
    </View>
   );
}
}
