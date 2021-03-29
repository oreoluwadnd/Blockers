import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class Plugicon extends Component<{ }> {
    render() {
        return (
            <View>
            <View>
            <Text style={styles.plugText}>
                 connecting...
            </Text>
            </View>
    <View style={styles.plugIcons}>
<View style={styles.plugIconsRight}>
<Icon name="pipe-disconnected" size={50} style={{color:'gray'}} />
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
paddingBottom: 10,
},
})