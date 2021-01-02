import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {Schedule} from 'models/schedule';
import {getTargetDates, days} from 'src/lib/util';

const showNotification = (title, message) => {
  PushNotificationIOS.presentLocalNotification({
    alertTitle: title,
    alertBody: message,
  });
};
const setNotificationCategories = () => {
  PushNotificationIOS.setNotificationCategories([
    {
      id: 'success',
      actions: [
        {
          id: 'YES',
          title: '했다',
          options: {foreground: true},
        },
        {
          id: 'NO',
          title: '안했다',
          options: {foreground: true},
        },
      ],
    },
  ]);
};

const setRoutineNotification = (
  contentId: number,
  routineId: number,
  title: string,
  url: string,
  schedule: Schedule,
  time: string,
) => {

  const targetDates = getTargetDates(schedule, time);
  console.log('#### target date', targetDates);
  PushNotificationIOS.removeAllPendingNotificationRequests();

  targetDates.forEach((date: Date) => {
    const day = days[date.getDay()];
    PushNotificationIOS.scheduleLocalNotification({
      fireDate: date.toISOString(),
      alertTitle: title,
      userInfo: {contentId, routineId, day, title, url},
      alertBody: "실천해볼까요?",
      category: 'success',
    });
  });
};

export {showNotification, setRoutineNotification, setNotificationCategories};
