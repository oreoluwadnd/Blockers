import React, {Component} from 'react';
import App from '../pages/Welcome';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import Welcome from './pages/Welcome';
import Routes from './src/Routes';
import Homescreen from './src/Homescreen';
AppRegistry.registerComponent('NavigateApp', () => App)