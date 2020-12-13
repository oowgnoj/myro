/**
 * @format
 */

import {AppRegistry, Platform} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import PushNotification from 'react-native-push-notification';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {postSuccess} from 'src/lib/api';
import * as RootNavigation from 'src/RootNavigation';

export const channelId = 'channel-myro';

PushNotification.createChannel(
  {
    channelId: channelId, // (required)
    channelName: 'Myro Channel', // (required)
    channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
    soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
    importance: 4, // (optional) default: 4. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
  },
  (created) => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
);

PushNotification.configure({
  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function (token) {
    console.log('TOKEN:', token);
  },

  // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: async function (notification) {
    console.log('NOTIFICATION:', notification);
<<<<<<< HEAD

    const {routineId, contentId, day} = notification.data;

    // 안드로이드와 같은 방식으로 동작
    if (Platform.OS === 'ios') {
      if (notification.data.actionIdentifier === 'YES') {
        const token = await AsyncStorage.getItem('userToken');
        await postSuccess(token, routineId, day);
      }
      if (notification.data.actionIdentifier === 'NO') {
        console.log('no');
      }
    }

    if (Platform.OS === 'android') {
      if (notification.action === 'YES') {
        const token = await AsyncStorage.getItem('userToken');
        await postSuccess(token, routineId, day);
        // yes 는 main 으로 보내기
      }

      if (notification.action !== 'YES' && notification.action !== 'NO') {
        console.log('!');
        // 했다 안했다로 보내기
      }
=======
    const {routineId, contentId, day, title, url} = notification.data;

    if (notification.action === 'YES') {
      const token = await AsyncStorage.getItem('userToken');
      await postSuccess(token, routineId, day);
    }

    if (notification.action !== 'YES' && notification.action !== 'NO') {
      RootNavigation.navigate('Success', {
        data: {routineId, contentId, title, url},
      });
>>>>>>> 6996db2a5505cc2e06ab3b0e21c7623231eaeeb5
    }

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    // notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
  onAction: function (notification) {
    console.log('ACTION:', notification.action);
    console.log('NOTIFICATION:', notification);

    // process the action
  },

  // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
  onRegistrationError: function (err) {
    console.error(err.message, err);
  },

  // IOS ONLY (optional): default: all - Permissions to register.

  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
   * (optional) default: true
   * - Specified if permissions (ios) and token (android and ios) will requested or not,
   * - if not, you must call PushNotificationsHandler.requestPermissions() later
   * - if you are not using remote notification or do not have Firebase installed, use this:
   *     requestPermissions: Platform.OS === 'ios'
   */

  requestPermissions: Platform.OS === 'ios',
});

AppRegistry.registerComponent(appName, () => App);
