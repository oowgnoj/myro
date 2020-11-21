import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import OnOffCircle from '@atoms/OnOffCircle';
import Thumbnail from '@atoms/Image';
import globalstyle from '@constants/style';
import {IRoutine} from 'src/types';
type Props = {routine: IRoutine};

const RoutineEntry: React.FC<Props> = ({routine}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.text}>
        <Text style={styles.TitleText}>{routine.content.title}</Text>
        <Text style={styles.TitleText}>{routine.alarmTime}</Text>
        <View style={styles.days}>
          <OnOffCircle isOn={routine.mon} />
          <OnOffCircle isOn={routine.tue} />
          <OnOffCircle isOn={routine.wed} />
          <OnOffCircle isOn={routine.thu} />
          <OnOffCircle isOn={routine.fri} />
          <OnOffCircle isOn={routine.sat} />
          <OnOffCircle isOn={routine.sun} />
        </View>
      </View>
      <View style={styles.image}>
        <Thumbnail url={routine.content.mainImage} />
      </View>
    </View>
  );
};
export default RoutineEntry;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    flex: 0.6,
    justifyContent: 'center',
  },
  image: {
    flex: 0.4,
    aspectRatio: 1 / 1,
  },
  days: {
    flexDirection: 'row',
  },
  TitleText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: globalstyle.MAIN_WHITE,
    marginBottom: 5,
  },
  TitleDesc: {
    color: globalstyle.MAIN_WHITE,
    fontSize: 15,
    marginBottom: 5,
  },
});
