import React from 'react';
import {View,  StyleSheet, Text} from 'react-native';
import RoundButton from '@atoms/RoundButton';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import Thumbnail from '@atoms/ClickableImage';
import globalstyle from '@constants/style';

type Props = {
  days: Array<Number>;
  title: string;
  alarmTime: string;
  mainImage: string;
  onClick: ()=>void
};

const RoutineCard: React.FC<Props> = ({
  title,
  alarmTime,
  mainImage,
  days,
  onClick
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.textWrapper}>
        <View style={styles.text}>
          <Text style={styles.TitleText}>{title}</Text>
          <Text style={styles.alarmText}>{alarmTime}</Text>
          <View style={styles.days}>
            {days.map(day => <RoundButton size="small" isActive={Boolean(day)}></RoundButton>)}
          </View>
        </View>
      </View>
      <View style={styles.image}>
        <Thumbnail url={mainImage} onClick={onClick} />
      </View>
    </View>
  );
};
export default RoutineCard;

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
