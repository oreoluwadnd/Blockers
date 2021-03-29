import React, { Component } from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Alert, TextInput,PermissionsAndroid, Button } from 'react-native';
import {Actions} from 'react-native-router-flux';
import {ImagePicker} from 'react-native-image-picker'
import Logo from '../components/Logo';
import firebaseSDK from '../config/firebaseSDK';
 export default class Signup extends Component<{}>{
   state = {
     name : '',
     email : '',
     password :'',
     avatar :'',
   };
   onPresSignUp = async () => {
     try {
        const user = {
          name: this.state.name,
          email : this.state.email,
          password : this.state.password,
        };
        await firebaseSDK.createAccount(user);
          } catch ({message}) {
        console.log('create account failed.catch error:' + message);
        }
     };
   onChangeTextEmail = email => this.setState({ email });
   onChangeTextPassword = password => this.setState({ password });
   onChangeTextName = name => this.setState({ name });
   
   onImageUpload = async () => {
     const {status: cameraRollPerm} = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
     );
     try{
       if (cameraRollPerm === 'granted') {
         let pickerResult = await ImagePicker.lauchImageAsync({
           allowsEditing: true,
           aspect:[4,3]
         });
         console.log(
           'ready to upload... pickerResult json:'+ JSON.stringify(pickerResult)
         );

         const wantedSize = 150;
         const Imageheight = pickerResult.height;
         const ImageWidth = pickerResult.width;
         const ratio = wantedWidth / wantedheight;
         const wantedWidth = wantedSize;
         const wantedheight = wantedSize  / ratio;
         
         if (Imageheight > ImageWidth) { 
           wantedWidth = wantedSize * ratio ;
           wanted = wantedSize;
         }
         let resizedUri = await new Promise((resolve, reject) => {
              ImageEditor.cropImage(
                pickerResult.uri,
                {
                  offset:{x:0 , y: 0},
                  size: {width:pickerResult.width, height: pickerResult.height},
                  display: {width : wantedWidth, height: wantedheight},
                  resizeMode: 'contain'
                },
                uri => resolve(uri),
                () => reject()
              );
         });
         let uploadUrl = await firebaseSDK.uploadImage(resizedUri);
         this.setState({avatar: uploadUrl})
         await firebaseSDK.updateAvatar(uploadUrl);
        }
     }catch (err) {
       console.log('onImageUpload error:' + err.message);
       alert('Upload image error:' + err.message)
     }
    };
    render() {
      return (
        <View style={styles.container}>
            <Logo/>
            <TextInput style={styles.inputBox} underlineColorAndroid='white' placeholder="Username"
              fontStyle='italic'
              value={this.state.name}
              onChangeText={this.onChangeTextName}
              />
            <TextInput style={styles.inputBox} underlineColorAndroid='white' placeholder="Email" 
              selectionColor='black'
              keyboardType="email-address"
              fontStyle='italic'
              onChangeText={this.onChangeTextEmail}
              value={this.state.email}
              onSubmitEditing={()=> this.password.focus()}
               />
              <TextInput style={styles.inputBox} underlineColorAndroid='white' placeholder="Password"
              secureTextEntry={true}
              fontStyle='italic'
              onChangeText={this.onChangeTextPassword}
              value={this.state.password}
              ref={(input) => this.password = input}
              />
            <TouchableOpacity style={styles.button} onPress={this.onPresSignUp}>
               <Text style={styles.buttonText}>SIGNUP</Text>
</TouchableOpacity>
<Button
					title="Upload Avatar"
					onPress={this.onImageUpload}
				/>
            <View style={styles.signupTextCont}>
              <Text style={styles.signupText}>Already have an account</Text>
              <TouchableOpacity onPress={this.login}>
              <Text style={styles.signupButton}>Signin</Text>
              </TouchableOpacity>
            </View>
            </View>
        )
    }
  }
const styles = 
StyleSheet.create({
  container : {
    backgroundColor:'#800000',
    flex: 1,
    alignItems : 'center',
    justifyContent : 'center'
  },
  signupTextCont :{
    flexGrow: 1,
    alignItems : 'flex-end',
    justifyContent : 'center',
    paddingVertical: 30,
    flexDirection:'row'
  },
  signupText :{
    color:'white',
    fontSize: 15
  },
  signupButton: {
    color:'gold',
    fontWeight: '500',
    fontSize: 16
  },
  buttonText:{ 
    fontSize: 16,
    fontWeight:'500',
    color:'black',
    textAlign: 'center'
},
button: {
  width:300,
  backgroundColor:'gold',
  borderRadius:25,
  marginVertical:10,
  paddingVertical: 13
},
inputBox: {
  width:300,
  backgroundColor:'white',
  borderRadius:25,
  paddingHorizontal:16,
  fontSize:15,
  color:'black',
  marginVertical:10,

},

});
