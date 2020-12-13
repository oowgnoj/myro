import dayjs from 'dayjs';

export const days = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];

import {Schedule} from 'models/schedule';
import {Alert} from 'react-native';

export const OneButtonAlert = (
  title: string,
  body: string,
  buttonText: string,
  onClick?: Function,
) => {
  Alert.alert(
    title,
    body,
    [
      {
        text: buttonText,
        onPress: () => onClick,
        style: 'cancel',
      },
    ],
    {cancelable: false},
  );
};

export const getTargetDates = (schedule: Schedule, time: string) => {
  const activeDays = [];
  for (const day in schedule) {
    if (schedule[day]) {
      activeDays.push(days.indexOf(day));
    }
  }

  const targetDates = [];
  const policy = 2; // 2주
  const hour = Number(time.slice(0, 2));
  const minute = Number(time.slice(3));

  let now = dayjs();
  for (let i = 0; i < policy; i++) {
    activeDays.forEach((day) => {
      const computed = now.day(day).hour(hour).minute(minute).second(0);
      // 계산된 값이 지금보다 나중일 경우 등록
      if (computed.isAfter(dayjs())) {
        targetDates.push(computed.toDate());
      }
    });
    // question!!!!!
    now = now.add(1, 'week');
  }

  return targetDates;
};
