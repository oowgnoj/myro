import React from 'react';
import {
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';

type Props = {icon?: ImageSourcePropType; text: string; onClick?: () => void};

const OvalButton: React.FC<Props> = ({icon, text, onClick}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onClick}>
      {icon ? <Image style={styles.icon} source={icon} /> : null}
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
    fontSize: 18,
  },
  icon: {
    marginRight: 10,
    width: 18,
    height: 18,
  },
});
