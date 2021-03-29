import React, {Component} from 'react';
import {StyleSheet, View, Text, Dimensions, Image, Animated, PanResponder} from 'react-native';
import {Header, Right} from "native-base";
import UserIcon from '../icons/UserIcon'
import BackIcon from '../icons/BackIcon'
const SCREEN_HEIGHT =Dimensions.get('window').height
const SCREEN_WIDTH =Dimensions.get('window').width
const Users = [
    { id: "1", uri: require('../Images/g6.jpg'), name:'ROSE'},
    { id: "2",uri: require('../Images/guy1.jpg'), name:'JAKE'},
    { id: "3",uri: require('../Images/g3.jpg'), name:'ZOEY'},
    { id: "4", uri: require('../Images/g7.jpg'), name:'DAISY'},
    { id: "5",uri: require('../Images/guy2.jpg'), name:'BRONE'},
    { id: "6",uri: require('../Images/guy3.jpg'), name:'DAVE'},
    { id: "7", uri: require('../Images/g9.jpg'), name:'SARAH'},
    { id: "8",uri: require('../Images/guy4.jpg'), name:'ADAMS'},
    { id: "9", uri: require('../Images/g6.jpg'), name:'RACHEAL'},
    { id: "10",uri: require('../Images/guy6.jpg'), name:'AORE'},
    { id: "11", uri: require('../Images/g2.jpg'), name:'KIM'},
    { id: "12",uri: require('../Images/guy1.jpg'), name:'AORE'},
    { id: "13", uri: require('../Images/g4.jpg'), name:'TAYLOR'},

]
export default class SwipeScreen extends Component<{}> {
    constructor(){
        super()

        this.position = new Animated.ValueXY()
        this.state = {
            currentIndex: 0
        }
         this.rotate = this.position.x.interpolate({
             inputRange: [-SCREEN_WIDTH /2, 0, SCREEN_WIDTH / 2],
             outputRange: ['-10deg', '0deg', '10deg'],
             extrapolate: 'clamp'
         })
         this.rotateAndTranslate ={
              transform:[{
                   rotate: this.rotate
              },
              ...this.position.getTranslateTransform() 
            ]
         }

         this.likeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH /2, 0, SCREEN_WIDTH / 2],
            outputRange: [0,0,1],
            extrapolate: 'clamp'
         })
         this.dislikeOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH /2, 0, SCREEN_WIDTH / 2],
            outputRange: [1,0,0],
            extrapolate: 'clamp'
         })
      this.nextCardOpacity = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH /2, 0, SCREEN_WIDTH / 2],
            outputRange: [1,0,1],
            extrapolate: 'clamp'
         })
         this.nextCardScale = this.position.x.interpolate({
            inputRange: [-SCREEN_WIDTH /2, 0, SCREEN_WIDTH / 2],
            outputRange: [1,0.8,1],
            extrapolate: 'clamp'
         }) 
    }
    componentWillMount(){
    this.PanResponder = PanResponder.create({
       onStartShouldSetPanResponder: () => true,
       onPanResponderMove: (evt,gestureState) =>{
           this.position.setValue({ x: gestureState.dx, y: gestureState.dy})

       },
       onPanResponderRelease: (evt,gestureState) =>{
           if (gestureState.dx > 120) {
               Animated.spring(this.position, {
                   toValue:{ x: SCREEN_WIDTH + 100,y: gestureState.dy }
               }).start(() => {
                   this.setState({ currentIndex: this.state.currentIndex +1},()=>{
                   this.position.setValue({ x: 0, y: 0})
                   })
                })
            }
       else if (gestureState.dx < -120) {
        Animated.spring(this.position, {
            toValue:{ x: -SCREEN_WIDTH - 100,y: gestureState.dy }
        }).start(() =>{
            this.setState({ currentIndex: this.state.currentIndex +1},()=>{
            this.position.setValue({ x: 0, y: 0})
            })
        })
    }
    else{
        Animated.spring(this.position, {
            toValue:{ x:0, y:0},
            friction: 4
        }).start()
    }
}
    })
}


    renderUsers = () =>{
        return Users.map((item,i) =>{
            if( i < this.state.currentIndex)
            {
                return null
            }
            else if (i == this.state.currentIndex)
            {  
            return(
            <Animated.View
            {...this.PanResponder.panHandlers}
            key={item.id} style={[this.rotateAndTranslate,
            {height:SCREEN_HEIGHT-100,
             width:SCREEN_WIDTH, 
             padding:10,
             position:'absolute'}]}>
                <Animated.View style={{opacity:this.likeOpacity,
                transform:[{rotate:'-30deg'}],
                position :'absolute',
                 top: 50,
                  left:40,
                  zIndex:1000}}>
                    <Text style={{borderWidth:1,
                    borderColor:'green',
                    color:'green',
                    fontSize:32,
                     fontWeight:'800',
                     padding:10}}>
                        LIKE
                    </Text>
                </Animated.View>
                <Animated.View style={{opacity:this.dislikeOpacity,
                transform:[{rotate:'+30deg'}],
                position :'absolute', 
                top: 50,
                 right:40,
                 zIndex:1000}}>
                    <Text style={{borderWidth:1,
                    borderColor:'red',
                    color:'red',
                    fontSize:32,
                     fontWeight:'800',
                     padding:10}}>
                        NOPE
                    </Text>
                </Animated.View>



                
                <Animated.View style={{
                transform:[{rotate:'0deg'}],
                position :'absolute',
                 bottom: 30,
                 left:20,
                 zIndex:1000}}>
                    <Text style={{color:'white',fontSize:32, fontWeight:'800',padding:10}}>
                 {item.name}
                    </Text>
                </Animated.View>
                
                <Image
                style={{flex:1,height:null,
                width:null,
                resizeMode:'cover', 
                borderRadius:20}}
                 source={item.uri}/>

<Animated.View style={{
       position :'absolute', 
                bottom: 50,
                 left:10,
                 zIndex:1000
}}>
                    </Animated.View>
               </Animated.View>
            ) 
            }

            else { 
                return(
                <Animated.View
            key={item.id}style={[{
                opacity:this.nextCardOpacity,            
                transform:[{ scale: this.nextCardScale }],
            height:SCREEN_HEIGHT-100,
            width:SCREEN_WIDTH,
             padding:10,
             position:'absolute'
             }]}>
                <Animated.View style={{
                    opacity:0,
                transform:[{rotate:'-30deg'}],
                position :'absolute', 
                top: 50,
                 left:40,
                 zIndex:1000
                 }}>
                    <Text style={{borderWidth:1,borderColor:'green',color:'green',fontSize:32, fontWeight:'800',padding:10}}>
                        LIKE
                    </Text>
                </Animated.View>
                <Animated.View style={{opacity:0,
                transform:[{rotate:'+30deg'}],
                position :'absolute',
                 top: 50, 
                 right:40,
                 zIndex:1000}}>
                    <Text style={{borderWidth:1,borderColor:'red',color:'red',fontSize:32, fontWeight:'800',padding:10}}>
                        NOPE
                    </Text>
                </Animated.View>


              
                <Animated.View style={{
                transform:[{rotate:'0deg'}],
                position :'absolute',
                 bottom: 30,
                 left:20,
                 zIndex:1000}}>
                    <Text style={{color:'white',fontSize:32, fontWeight:'800',padding:10}}>
                 {item.name}
                    </Text>
                </Animated.View>



                <Image
                style={{flex:1,height:null,width:null,resizeMode:'cover', borderRadius:20}}
                 source={item.uri}/>
               </Animated.View>
                )
            }
        }
            
            ).reverse()
    }
    render() {
      return (
        <View style={styles.container}>
         <Header style={{ backgroundColor: '#800000' }} androidStatusBarColor="#800000">
         <BackIcon />
          <View>
            <Text style={styles.headerText}>
              EXPLORE
            </Text>
         </View>
          <Right/>
          <UserIcon/>
        </Header>
<View style={{flex:1, backgroundColor:'white'}}>
<View style={{height:5}}>
</View>
<View style={{flex:1}}>
{this.renderUsers()}
</View>
<View style={{height:70}}>
</View>
</View>
</View>
        );
    }
  }
  const styles = StyleSheet.create({
    container : {
      backgroundColor:'#800000',
      flex: 1,
      justifyContent:"center"
    },
    headerText:{
        marginVertical : 15,
          fontSize: 20,
          color: 'white',
          marginRight: 150,
          fontWeight: '300',
      }
  });






  /**Alert.alert(
                    '<SWIPE>',
                    'RIGHT : LIKE & LEFT : NOPE',

                     <Image
          style={{width: 80, height: 80}}
          source={require("../Images/logo.png")}/>
                ) */