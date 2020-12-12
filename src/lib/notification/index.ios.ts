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
          id: 'did',
          title: '했다',
          options: {foreground: true},
        },
        {
          id: 'not',
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
  console.log('### schedule', schedule);
  console.log('#### time', time);
  console.log('###### target date', targetDates);
  PushNotificationIOS.removeAllPendingNotificationRequests();

  targetDates.forEach((date: Date) => {
    PushNotificationIOS.scheduleLocalNotification({
      fireDate: date.toISOString(),
      alertTitle: title,
      alertBody: date.toISOString(),
      category: 'success',
    });
  });
  PushNotificationIOS.getScheduledLocalNotifications((a) =>
    console.log('알림 등록', a),
  );
};

export {showNotification, enrollRoutineNotification, setNotificationCategories};
