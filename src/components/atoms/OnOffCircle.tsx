import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import globalstyle from '@constants/style';
type Props = {isOn: boolean};

const OnOffCircle: React.FC<Props> = ({isOn}) => {
  const on = Boolean(isOn);
  return (
    <View
      style={{
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        backgroundColor: on ? globalstyle.MAIN_GREEN : '#fff',
      }}
    />
  );
};
export default OnOffCircle;
