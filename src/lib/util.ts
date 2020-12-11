import {Alert} from 'react-native';

export const OneButtonAlert = (
  title: string,
  body: string,
  buttonText: string,
  onClick?: Function,
) => {
  Alert.alert(
    title,
    body,
    [
      {
        text: buttonText,
        onPress: () => console.log('No Pressed'),
        style: 'cancel',
      },
    ],
    {cancelable: false},
  );
};
