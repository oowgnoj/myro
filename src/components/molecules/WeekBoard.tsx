import React from 'react';
import {View, StyleSheet} from 'react-native';
import RoundButton from '@components/atoms/RoundButton';
import {Week, Schedule} from '../../models/schedule';
import {daysInKorean} from '../../lib/util';

type Props = {
  days: Array<Number>;
  handleSchedule?: (day: number) => void;
};

const WeekEntry: React.FC<Props> = ({days, handleSchedule}) => {
  return (
    <View style={styles.wrapper}>
      {days.map((isActive, i) => {
        return (
          <RoundButton
            size="medium"
            text={daysInKorean[i]}
            isActive={Boolean(isActive)}
            handleStatus={() => handleSchedule(i)}
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
