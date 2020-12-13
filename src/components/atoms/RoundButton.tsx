import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

// 얘가 번역하자
type Props = {
  size: string;
  text?: string;
  isActive: boolean;
  handleStatus?: (text: string, active: boolean) => void;
};

const RoundButton: React.FC<Props> = ({size, text, isActive, handleStatus}) => {
  const onClick = () => {
    handleStatus(text, !isActive);
  };

  const getStyle = (type: string, size: string, isActive: boolean): string => {
    const sizeStr = size.charAt(0).toUpperCase() + size.slice(1);
    const isActiveStr = isActive ? 'Active' : 'Inactive';
    return type + sizeStr + isActiveStr;
  };

  return (
    <TouchableOpacity
      style={styles[getStyle('button', size, isActive)]}
      onPress={onClick}>
      {text ? (
        <Text style={styles[getStyle('text', size, isActive)]}> {text} </Text>
      ) : null}
    </TouchableOpacity>
  );
};
export default RoundButton;

const buttonSize = {
  small: 11,
  medium: 33,
  large: 55,
};

const buttonColor = {
  true: '#51845E',
  false: '#ECE7E6',
};

const buttonBase = {
  alignItems: 'center',
  justifyContent: 'center',
  color: 'black',
  borderRadius: 100,
};

const fontSize = {
  small: 6,
  medium: 15,
  large: 20,
};

const fontColor = {
  true: 'white',
  false: 'black',
};

const styles = StyleSheet.create({
  buttonSmallInactive: {
    ...buttonBase,
    width: buttonSize.small,
    height: buttonSize.small,
    backgroundColor: buttonColor.false,
  },
  buttonSmallActive: {
    ...buttonBase,
    width: buttonSize.small,
    height: buttonSize.small,
    backgroundColor: buttonColor.true,
  },
  buttonMediumInactive: {
    ...buttonBase,
    width: buttonSize.medium,
    height: buttonSize.medium,
    backgroundColor: buttonColor.false,
  },
  buttonMediumActive: {
    ...buttonBase,
    width: buttonSize.medium,
    height: buttonSize.medium,
    backgroundColor: buttonColor.true,
  },
  buttonLargeInactive: {
    ...buttonBase,
    width: buttonSize.large,
    height: buttonSize.large,
    backgroundColor: buttonColor.false,
  },
  buttonLargeActive: {
    ...buttonBase,
    width: buttonSize.large,
    height: buttonSize.large,
    backgroundColor: buttonColor.true,
  },
  textSmallInactive: {
    fontSize: fontSize.small,
    color: fontColor.false,
  },
  textSmallActive: {
    fontSize: fontSize.small,
    color: fontColor.true,
  },
  textMediumInactive: {
    fontSize: fontSize.medium,
    color: fontColor.false,
  },
  textMediumActive: {
    fontSize: fontSize.medium,
    color: fontColor.true,
  },
  textLargeInactive: {
    fontSize: fontSize.large,
    color: fontColor.false,
  },
  textLargeActive: {
    fontSize: fontSize.large,
    color: fontColor.true,
  },
});

// const styles = StyleSheet.create({
//   button: {
//     small: {
//       true: {
//         ...buttonBase,
//         width: buttonSize.small,
//         height: buttonSize.small,
//         backgroundColor: buttonColor.true,
//       },
//       false: {
//         ...buttonBase,
//         width: buttonSize.small,
//         height: buttonSize.small,
//         backgroundColor: buttonColor.false,
//       },
//     },
//     medium: {
//       true: {
//         ...buttonBase,
//         width: buttonSize.medium,
//         height: buttonSize.medium,
//         backgroundColor: buttonColor.true,
//       },
//       false: {
//         ...buttonBase,
//         width: buttonSize.medium,
//         height: buttonSize.medium,
//         backgroundColor: buttonColor.false,
//       },
//     },
//     large: {
//       true: {
//         ...buttonBase,
//         width: buttonSize.large,
//         height: buttonSize.large,
//         backgroundColor: buttonColor.true,
//       },
//       false: {
//         ...buttonBase,
//         width: buttonSize.large,
//         height: buttonSize.large,
//         backgroundColor: buttonColor.false,
//       },
//     },
//   },
//   text: {
//     small: {
//       true: {
//         fontSize: fontSize.small,
//         color: fontColor.true,
//       },
//       false: {
//         fontSize: fontSize.small,
//         color: fontColor.false,
//       },
//     },
//     medium: {
//       true: {
//         fontSize: fontSize.medium,
//         color: fontColor.true,
//       },
//       false: {
//         fontSize: fontSize.medium,
//         color: fontColor.false,
//       },
//     },
//     large: {
//       true: {
//         fontSize: fontSize.large,
//         color: fontColor.true,
//       },
//       false: {
//         fontSize: fontSize.large,
//         color: fontColor.false,
//       },
//     },
//   },
// });
