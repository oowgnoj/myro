import PushNotificationIOS from '@react-native-community/push-notification-ios';

const showNotification = (title, message) => {
  PushNotificationIOS.presentLocalNotification({
    alertTitle: title,
    alertBody: message,
  });
};

const handleScheduleNotification = (title, message) => {
  const date = new Date();
  date.setSeconds(date.getSeconds() + 5);
  PushNotificationIOS.scheduleLocalNotification({
    alertTitle: title,
    alertBody: message,
    fireDate: date.toISOString(),
    actions: [
      {id: 'open', title: 'Open', options: {foreground: true}},
      {
        id: 'ignore',
        title: 'Desruptive',
        options: {foreground: true, destructive: true},
      },
      {
        id: 'text',
        title: 'Text Input',
        options: {foreground: true},
        textInput: {buttonTitle: 'Send'},
      },
    ],
  });
};

const handleCancel = () => {
  PushNotificationIOS.removeAllDeliveredNotifications();
};

export {showNotification, handleCancel, handleScheduleNotification};
