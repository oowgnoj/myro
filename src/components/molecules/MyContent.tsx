import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import OnOffCircle from '@atoms/OnOffCircle';
import Thumbnail from '@atoms/Image';
import globalstyle from '@constants/style';
type Props = {habit: any};

const SquarePictures: React.FC<Props> = ({habit}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.text}>
        <Text style={styles.TitleText}>{habit.content.title}</Text>
        <Text style={styles.TitleText}>{habit.alarmTime}</Text>
        <View style={styles.days}>
          <OnOffCircle isOn={habit.mon} />
          <OnOffCircle isOn={habit.tue} />
          <OnOffCircle isOn={habit.wed} />
          <OnOffCircle isOn={habit.thu} />
          <OnOffCircle isOn={habit.fri} />
          <OnOffCircle isOn={habit.sat} />
          <OnOffCircle isOn={habit.sun} />
        </View>
      </View>
      <View style={styles.image}>
        <Thumbnail url={habit.content.mainImage} />
      </View>
    </View>
  );
};
export default SquarePictures;

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
