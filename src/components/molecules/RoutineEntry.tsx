import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import OnOffCircle from '@atoms/OnOffCircle';

import Thumbnail from '@atoms/Image';
import globalstyle from '@constants/style';
import {IContent, IRoutine} from 'src/types';

type Props = {
  title: string;
  alarmTime: string;
  sun: Boolean;
  mon: Boolean;
  tue: Boolean;
  wed: Boolean;
  thu: Boolean;
  fri: Boolean;
  sat: Boolean;
  mainImage: string;
};

const RoutineEntry: React.FC<Props> = ({
  title,
  alarmTime,
  sun,
  mon,
  tue,
  wed,
  thu,
  fri,
  sat,
  mainImage,
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.textWrapper}>
        <View style={styles.text}>
          <Text style={styles.TitleText}>{title}</Text>
          <Text style={styles.alarmText}>{alarmTime}</Text>
          <View style={styles.days}>
            <OnOffCircle isOn={sun} text="S" />
            <OnOffCircle isOn={mon} text="M" />
            <OnOffCircle isOn={tue} text="T" />
            <OnOffCircle isOn={wed} text="W" />
            <OnOffCircle isOn={thu} text="T" />
            <OnOffCircle isOn={fri} text="F" />
            <OnOffCircle isOn={sat} text="S" />
          </View>
        </View>
      </View>
      <View style={styles.image}>
        <Thumbnail url={mainImage} />
      </View>
    </View>
  );
};
export default RoutineEntry;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 120
  },
  textWrapper: {
    flex: 0.6,
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
    justifyContent: 'space-between',
  },
  
  TitleText: {
    fontSize: 21,
    fontWeight: 'bold',
    color: globalstyle.MAIN_WHITE,
    marginBottom: 5,
    justifyContent: 'center',
  },
  alarmText: {
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
