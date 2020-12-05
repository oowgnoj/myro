/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';

// NOTIFICAFION SETUP
PushNotification.configure({
  onRegister: function (token) {
    console.log('TOKEN: ', token);
  },
  onNotification: function (notification) {
    console.log('NOTIFICATION:', notification);
  },
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
  popInitialNotification: true,
  // asking IOS permission
  requestPermissions: Platform.OS === 'ios',
});

AppRegistry.registerComponent(appName, () => App);
