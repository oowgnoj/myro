import React, {useState} from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = {
  text: string;
  isActive: boolean;
  handleStatus?: (text: string, active: boolean) => void;
};

const RoundButton: React.FC<Props> = ({text, isActive, handleStatus}) => {
  // const [active, setActive] = useState(isActive);
  const onClick = () => {
    handleStatus(text, !isActive);
  };

  return (
    <TouchableOpacity
      style={isActive ? styles.buttonActive : styles.buttonInactive}
      onPress={onClick}>
      <Text style={isActive ? styles.textActivate : styles.textInactiate}>
        {text}{' '}
      </Text>
    </TouchableOpacity>
  );
};
export default RoundButton;

const buttonBase = {
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  borderRadius: 100,
  width: 33,
  height: 33,
};

const textBase = {
  fontSize: 15,
};

const styles = StyleSheet.create({
  buttonInactive: {
    ...buttonBase,
    backgroundColor: '#ECE7E6',
  },
  buttonActive: {
    ...buttonBase,
    backgroundColor: '#51845E',
  },
  textInactiate: {
    ...textBase,
    color: 'black',
  },
  textActivate: {
    ...textBase,
    color: 'white',
  },
});
