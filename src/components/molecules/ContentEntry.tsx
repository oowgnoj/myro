import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import globalstyle from '@constants/style';
import {useNavigation} from '@react-navigation/native';

type Props = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const ContentEntry: React.FC<Props> = ({id, image, title, description}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => navigation.navigate('Routine', {id})}>
      <Image
        style={styles.Image}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.TitleText}>{title}</Text>
      <Text style={styles.TitleDesc}>{description}</Text>
    </TouchableOpacity>
  );
};
export default ContentEntry;

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
