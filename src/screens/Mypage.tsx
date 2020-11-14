import React, {useState} from 'react';
import {StyleSheet, Image, View, Text, AsyncStorage} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';

import Layout from './Layout';
import globalstyle from '@constants/style';

type Props = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};
const MyHabits: React.FC<Props> = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.root}>
        <View style={styles.header}>
          <Text style={styles.titleText}>MYPAGE</Text>
          <Image
            style={{width: 130, height: 130}}
            source={require('../assets/logo/pic.png')}
          />
        </View>
      </View>
    </Layout>
  );
};

export default MyHabits;

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
