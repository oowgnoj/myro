import PushNotificationIOS from '@react-native-community/push-notification-ios';
import dayjs from 'dayjs';
import {Schedule} from 'models/schedule';
import {getTargetDates} from 'src/lib/util';

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

const enrollRoutineNotification = (
  contentId: number,
  routineId: number,
  title: string,
  schedule: Schedule,
  time: string,
) => {
  const targetDates = getTargetDates(schedule, time);
  // console.log('### schedule', schedule);
  // console.log('#### time', time);
  // console.log('###### target date', targetDates);
  PushNotificationIOS.removeAllPendingNotificationRequests();

  targetDates.forEach((date: Date) => {
    const day = date.toISOString();
    PushNotificationIOS.scheduleLocalNotification({
      fireDate: date.toISOString(),
      alertTitle: title,
      userInfo: {contentId, routineId, day},
      alertBody: date.toISOString(),
      category: 'success',
    });
  });
};

export {showNotification, enrollRoutineNotification, setNotificationCategories};
