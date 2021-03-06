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
};
const Mypage: React.FC<Props> = ({navigation}) => {
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
        <View style={styles.header}>
          <Text style={styles.titleText}>MYPAGE</Text>
          <Image
            style={{width: 130, height: 130}}
            source={require('../assets/logo/pic.png')}
          />
          <Button onPress={requestLogout} title="로그이웃"></Button>
        </View>
      </View>
    </Layout>
  );
};

export default Mypage;

const styles = StyleSheet.create({
  root: {flex: 1, justifyContent: 'center'},
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
