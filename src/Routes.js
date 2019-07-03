import React, { Component } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Welcome from './pages/Welcome';
import Homescreen from './Homescreen';
import Forgot from './components/Forgot';
import DiscoverScreen from './screens/DiscoverScreen'
import ChatScreen from './screens/ChatScreen';
import MatchesSceen from './screens/MatchesScreen'
import ProfileScreen from './screens/ProfileScreen';
import Profile2 from './screens/Profile2'
import SwipeScreen from './screens/SwipeScreen';
import LogoutIcon from './icons/LogoutIcon'
import Gender from './pages/Gender'
export default class Routes extends Component<{}> {
    render() {
        return (
            <Router>
    <Stack key="root" hideNavBar={true}>
    <Scene key="welcome" component={Welcome} title="Welcome"/>
    <Scene key="login" component={Login} title="Login"/>
    <Scene key="signup" component={Signup} title="Register"/>
    <Scene key="homescreen" component={Homescreen} title="Homesreen"/>
    <Scene key="profile" component={ProfileScreen} title="Profile"/>
    <Scene key="swipe" component={SwipeScreen} title="Swipe"/>
    <Scene key="forgot" component={Forgot} title="Forgot"/>
    <Scene key="discover" component={DiscoverScreen} title="Discover"/>
    <Scene key="profile2" component={Profile2} title="profile"/>
    <Scene key="gender" component={Gender} title="gender"/>
    <Scene key="chat" component={ChatScreen} title="chat"/>
      </Stack>
  </Router>
        );
    }
}