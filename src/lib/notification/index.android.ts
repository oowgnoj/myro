import dayjs from 'dayjs';
import {Schedule} from 'models/schedule';
import PushNotification from 'react-native-push-notification';
import {channelId} from '../../../index';
import {Image} from 'react-native';

// 도메인 일주일과 JS 네이티브 Date 객체 일주일을 매핑하기 위한 배열
const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

const getTargetDates = (schedule: Schedule, time: string) => {


  const targetDates = [];
  const policy = 2; // 2주
  const hour = Number(time.slice(0, 2));
  const minute = Number(time.slice(3));

  let now = dayjs();
  for (let i = 0; i < policy; i++) {
    schedule.forEach((day) => {
      const computed = now.day(day).hour(hour).minute(minute).second(0);
      if (computed.isAfter(now)) {
        targetDates.push(computed.toDate());
      }
    });
    now = now.add(1, 'week');
  }

  return targetDates;
};

export const setRoutineNotification = (
  contentId: number,
  routineId: number,
  title: string,
  url: string,
  schedule: Schedule,
  time: string,
) => {
  const targetDates = getTargetDates(schedule, time);
  targetDates.forEach((date: Date) => {
    const day = days[date.getDay()];

    PushNotification.localNotificationSchedule({
      channelId,
      title,
      date,
      userInfo: {contentId, routineId, day, title, url},
      actions: ['YES', 'NO'],
      message: '실천해볼까요?',
    });
  });
};
