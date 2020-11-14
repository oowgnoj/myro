import React from 'react';
import {Image, TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = {text: string; onClick?: () => void};

const OvalButton: React.FC<Props> = ({text, onClick}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      <Image style={styles.icon} source={require('../../assets/clock.png')} />
      <Text style={styles.text}> {text} </Text>
    </TouchableOpacity>
  );
};
export default OvalButton;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ECE7E6',
    color: 'black',
    borderRadius: 30,
    width: '90%',
    height: 55,
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
  },
  icon: {
    width: 18,
    height: 18,
  },
});
