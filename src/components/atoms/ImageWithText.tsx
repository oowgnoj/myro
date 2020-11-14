import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import globalstyle from '@constants/style';
interface Props {
  image?: string;
  titleText: string;
  description?: string;
  onClick?: () => void;
}

const App: React.FC<Props> = ({image, titleText, description, onClick}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onClick}>
      <ImageBackground source={{uri: image}} style={styles.image}>
        <Text style={styles.text}>{titleText}</Text>
        <Text style={styles.text}>{description}</Text>
      </ImageBackground>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },
  text: {
    color: globalstyle.MAIN_WHITE,
    marginLeft: 10,
    marginBottom: 30,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default App;
