import React, {Component} from 'react';
import {Text, Image, View, StyleSheet} from 'react-native';
import {Icon} from "native-base";
export default class Logo extends Component<{}> {
    render(){
      return(
<View style={styles.container}>
<View>
<View style={{alignItems:'center', paddingTop:30}}>
<Image source={require('../Images/guy4.jpg')} style={{height: 190, width: 190, borderRadius: 100, marginHorizontal : 10}}/>
<Text style={{marginTop:20, fontSize:40, fontWeight:'bold', color:'white', fontStyle:'italic'}}>
    Guy Dangerous
</Text>
</View>
<View style={styles.barMain}>
<View style={[styles.barTop, styles.barSep]}>
<Text style={{fontSize:20, fontWeight:'bold', color:'white'}}>LIKES<Icon name="heart" style={{color:'white'}}/>
</Text>
<Text style={{fontSize:15, color:'white', fontStyle:'italic'}}>10k</Text>
</View>
<View style={styles.barTop}>
<Text style={{fontSize:20, fontWeight:'bold', color:'white'}}> RANK <Icon name="star-half" style={{color:'white'}}/></Text>
<Text style={{fontSize:15, color:'white', fontStyle:'italic'}}>
    Alpha Male
</Text>
</View>
    </View>
        
    </View>
    <View style={{height:null, width: null, resizeMode:'cover', borderWidth:2, borderColor:'gold', backgroundColor:'white', borderRadius: 10, marginTop:5}}>
        <Text style={{fontSize:20, fontWeight:'bold', color:'#800000', paddingTop:10, textAlign:'center'}}>
            BIO:
        </Text>
        <Text style={{fontSize:15, color:'#800000', textAlign:'center', padding:20}}>
      A GUY HAS NO NAME
</Text>
    </View>
    </View>

      );
        }
    }
         const styles = StyleSheet.create({
            container : {
                backgroundColor:'#800000',
                flex: 1,
                alignItems : 'center'
              },   
barTop : {
    alignItems : 'center',
    padding: 18
},
barMain : {
    borderTopWidth : 4,
 flexDirection: 'row',
 borderTopColor: 'white'
},
barSep :{
borderRightWidth : 4,
borderColor: 'white'
},
inputBox :{
    fontSize:15,
     color:'#800000',
      textAlign:'center',
       padding:20
}
});
