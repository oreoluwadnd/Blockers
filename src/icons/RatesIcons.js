import React, {Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

export default class Plugicon extends Component<{}> {
    render() {
        return (
            <View>
            <View  style={styles.rateTextView}>
                <Text  style={styles.rateText}>
RATE YOUR MATCH
                </Text>
            </View>
    <View style={styles.plugIcons}>
  <View style={styles.rateIcons1}>
  <TouchableOpacity style={styles.rateOpaciity1}>
<Icon name="md-star-outline" size={28} color='black' style={styles.rateIconsall} />
</TouchableOpacity>
</View>

<View style={styles.rateIcons2}>
<TouchableOpacity style={styles.rateOpaciity2}>
<Icon name="md-star-half" size={28} color='black' style={styles.rateIconsall} />
</TouchableOpacity>
</View>

<View style={styles.rateIcons3}>
<TouchableOpacity style={styles.rateOpacity3}>
<Icon name="md-star" size={28} color='black' style={styles.rateIconsall} />
</TouchableOpacity>
</View>
</View>
    </View>
     );
    }
    }
    const styles = StyleSheet.create({
    plugIcons :{
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
    },
    rateIcons1:{
marginRight:50


    },
    rateIcons2:{
    
    },
    rateIcons3:{
        marginLeft:50
    },
    rateOpaciity1:{
backgroundColor:'#800000',
borderRadius: 20,
width:50
    },
    rateOpaciity2:{
        backgroundColor:'#800000',
        borderRadius: 20,
        width:50
    },
    rateOpacity3:{
        backgroundColor:'#800000',
        borderRadius: 20,
        width:50
    },
    rateIconsall:{
        color:'white',
        alignSelf:'center',

    },
    rateTextView:{
        justifyContent: 'center',
        alignItems:'center',
marginBottom:20 ,
    },
    rateText:{
    fontStyle:'italic',
    fontSize:20,
    color:'#800000',
    fontWeight: 'bold',
    }
}
    )