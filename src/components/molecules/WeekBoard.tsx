import React from 'react';
import {View, StyleSheet} from 'react-native';
import RoundButton from '@components/atoms/RoundButton';
import {Week, Schedule} from '../../models/schedule';

type Props = {
  schedule: Schedule;
  handleSchedule?: (text: string, active: boolean) => void;
};

const WeekEntry: React.FC<Props> = ({schedule, handleSchedule}) => {
  const handleStatus = (text: string, active: boolean) => {
    handleSchedule(text, active);
  };

  const weekTexts = Object.keys(Week);

  return (
    <View style={styles.wrapper}>
      {weekTexts.map((day, i) => {
        const status = schedule[Week[day]];
        return (
          <RoundButton
            size="medium"
            text={day}
            isActive={status}
            handleStatus={handleStatus}
            key={i}
          />
        );
      })}
    </View>
  );
};
export default WeekEntry;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Image: {
    flex: 1,
  },
  TitleText: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  TitleDesc: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 15,
  },
});
