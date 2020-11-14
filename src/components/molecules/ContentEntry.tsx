import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import globalstyle from '@constants/style';
type Props = {image: string; title: string; description: string};

const SquarePictures: React.FC<Props> = ({image, title, description}) => {
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.Image}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.TitleText}>{title}</Text>
      <Text style={styles.TitleDesc}>{description}</Text>
    </View>
  );
};
export default SquarePictures;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  Image: {
    flex: 1,
  },
  TitleText: {
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
    color: globalstyle.MAIN_WHITE,
  },
  TitleDesc: {
    color: globalstyle.MAIN_WHITE,
    textAlign: 'center',
    fontSize: 15,
  },
});
