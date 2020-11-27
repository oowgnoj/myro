import React, {useState, useContext} from 'react';
import {StyleSheet, Image, View, Text, Button} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import Layout from '../components/Layout';
import globalstyle from '@constants/style';
import authContext from '@hooks/authContext';

type Props = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
  message: string;
  label: string;
  onClick: () => void;
};
const Error: React.FC<Props> = ({navigation, message, onClick, label}) => {
  const {token, saveToken} = useContext(authContext);
  const requestLogout = async () => {
    try {
      await saveToken('');
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <View style={styles.root}>
        <Image
          style={{width: 130, height: 130}}
          source={require('../assets/logo/pic.png')}
        />
        <Text style={styles.titleText}>{message}</Text>
        <Button onPress={onClick} title={label}></Button>
      </View>
    </Layout>
  );
};

export default Error;

const styles = StyleSheet.create({
  root: {flex: 1, justifyContent: 'center', flexDirection: 'column'},
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: 50,
  },
  titleText: {
    color: globalstyle.MAIN_WHITE,
    fontSize: 30,
    fontWeight: 'bold',
  },
  textinput: {
    borderBottomColor: globalstyle.MAIN_WHITE,
    borderBottomWidth: 1,
    height: 30,
    color: globalstyle.MAIN_WHITE,
    marginBottom: 30,
  },
});
