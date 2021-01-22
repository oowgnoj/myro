import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import globalstyle from '@constants/style';
type Props = {isOn: Boolean, text: string};

const OnOffCircle: React.FC<Props> = ({isOn, text}) => {
  const on = Boolean(isOn);
  return (
    <View
      style={{
        display:'flex',
        width: 20,
        height: 20,
        borderRadius: 20 / 2,
        backgroundColor: on ? globalstyle.MAIN_GREEN : globalstyle.MAIN_WHITE,
        alignItems:'center',
        justifyContent:'center'

      }}>
      <Text
        style={{color: on ? globalstyle.MAIN_WHITE : globalstyle.MAIN_GREEN, fontWeight:'bold', fontSize:11}}>
        {text}
      </Text>
    </View>
  );
};
export default OnOffCircle;
