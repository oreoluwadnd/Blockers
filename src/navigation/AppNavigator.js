
import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Login from '../pages/Login'
import Welcome from '../pages/Welcome'
import SignUp from '../pages/Signup'
import Gender from '../pages/Gender'
import HomeScreen from '../Homescreen'
import Forgot from '../components/Forgot'
import Category from '../components/Category'
import SwipeScreen from '../screens/SwipeScreen'
import DiscoverScreen from '../screens/DiscoverScreen'
import LikesScreen from '../screens/LikesScreen'
import MatchesScreen from '../screens/MatchesScreen';
import AboutScreen from '../screens/AboutScreen' 
import ChatScreen from '../screens/ChatScreen'
import ProfileScreen from '../screens/ProfileScreen'
export default createStackNavigator({
    Welcome : Welcome,
    Login: Login,
    Gender: Gender,
    SignUp : SignUp,
    DiscoverScreen : DiscoverScreen,
    HomeScreen :HomeScreen,
    Forgot : Forgot,
    SwipeScreen : SwipeScreen,
    Category : Category
},
{ initialRouteName:'HomeScreen',
navigationOptions :
{ header: null }
  });
  