import React from 'react';
import {Image, Text, StyleSheet, TouchableOpacity} from 'react-native';

type Props = {url: string; onClick?: () => void};

const SquarePictures: React.FC<Props> = ({url, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <Image
        style={styles.image}
        source={{
          uri: url,
        }}
      />
    </TouchableOpacity>
  );
};
export default SquarePictures;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});
