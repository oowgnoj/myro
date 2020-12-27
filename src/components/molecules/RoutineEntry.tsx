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
      <View style={styles.textWrapper}>
      <View style={styles.text}>
        <Text style={styles.TitleText}>{routine.contents.title}</Text>
        <Text style={styles.TitleText}>{routine.alarmTime}</Text>
        <View style={styles.days}>
          <OnOffCircle isOn={routine.sun} text="S"/>
          <OnOffCircle isOn={routine.mon} text="M" />
          <OnOffCircle isOn={routine.tue} text="T"/>
          <OnOffCircle isOn={routine.wed} text="W"/>
          <OnOffCircle isOn={routine.thu} text="T"/>
          <OnOffCircle isOn={routine.fri} text="F"/>
          <OnOffCircle isOn={routine.sat} text="S"/>
        </View>
      </View>
      </View>
      <View style={styles.image}>
        <Thumbnail url={routine.contents.mainImage} />
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
  textWrapper: {
    flex: 0.6,
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    paddingRight: 20,
    justifyContent: 'center',
  },
  image: {
    flex: 0.4,
  },
  days: {
    flexDirection: 'row',
    paddingRight: 20,
    justifyContent:'space-between'

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
