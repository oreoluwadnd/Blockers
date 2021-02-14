import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from "../pages/Login";
import Welcome from "../pages/Welcome";
import SignUp from "../pages/Signup";
import UserIcon from "../icons/UserIcon";
import Gender from "../pages/Gender";
import HomeScreen from "../Homescreen";
import Forgot from "../components/Forgot";
import Category from "../components/Category";
import SwipeScreen from "../screens/SwipeScreen";
import DiscoverScreen from "../screens/DiscoverScreen";
import LikesScreen from "../screens/LikesScreen";
import MatchesScreen from "../screens/MatchesScreen";
import AboutScreen from "../screens/AboutScreen";
import ChatScreen from "../screens/ChatScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SwipesScreen from "../screens/SwipesScreen";
import logo from "../components/Logo";
import Logo from "../components/Profilepage";
import Feeds from "../schbag app/Feeds";
import SchbagHome from "../schbag app/SchbagHome";
import Schbagdrawer from '../schbag app/Schbagdrawer';
import Spaces from '../schbag app/Spaces';
import Saved from '../schbag app/Saved';
import SchbagProfile from '../schbag app/SchbagProfile';
import Notifications from "../schbag app/Notifications";
import HomeTabs from '../schbag app/HomeTabs';
import Settings from '../schbag app/Settings'
export default createStackNavigator(
  {
    Welcome: Welcome,
    Login: Login,
    Gender: Gender,
    SignUp: SignUp,
    MatchesScreen: MatchesScreen,
    DiscoverScreen: DiscoverScreen,
    HomeScreen: HomeScreen,
    Forgot: Forgot,
    SwipeScreen: SwipeScreen,
    Category: Category,
    ChatScreen: ChatScreen,
    ProfileScreen: ProfileScreen,
    SwipesScreen: SwipesScreen,
    Logo: Logo,
    Feeds: Feeds,
    Notifications: Notifications,
    SchbagHome: SchbagHome,
    Schbagdrawer: Schbagdrawer,
    Spaces : Spaces,
    Saved : Saved,
    SchbagProfile : SchbagProfile,
    UserIcon: UserIcon,
    HomeTabs : HomeTabs,
    Settings : Settings
  },
  { initialRouteName: "Schbagdrawer", navigationOptions: { header: null } }
);
