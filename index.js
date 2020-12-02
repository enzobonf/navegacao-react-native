/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Navegacao from './src/navegacao';
import {name as appName} from './app.json';

 // React native crypto import via require (React Native)
/*  if (!crypto && typeof require === 'function') {
    try {
        crypto = require('react-native-crypto');
    } catch (err) {}
} */

console.log('a');

AppRegistry.registerComponent(appName, () => Navegacao);
