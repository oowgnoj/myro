import React, {useState, useContext} from 'react';
import {StyleSheet, Image, View, Text, TextInput, Button} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import Layout from '../components/Layout';
import authContext from '../hooks/authContext';
import globalstyle from '@constants/style';
import {postLogin} from 'src/lib/api';
import {OneButtonAlert} from 'src/lib/util';

type Props = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};
const Login: React.FC<Props> = ({navigation}) => {
  const {token, saveToken} = useContext(authContext);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async () => {
    try {
      const {data} = await postLogin(email, password);
      await saveToken(data.accessToken);
      console.log('############ login 성공', data.accessToken);
      navigation.navigate('Home');
    } catch (error) {
      OneButtonAlert('로그인', '회원 정보를 확인해주세요.', 'cancel');
    }
  };
  return (
    <Layout>
      <View style={styles.root}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator ={false}>
        <View style={styles.header}>
          <Text style={styles.titleText}>Login</Text>
          <Image
            style={{width: 130, height: 130}}
            source={require('../assets/logo/pic.png')}
          />
        </View>
        <TextInput
          placeholder="Email or Username"
          placeholderTextColor={globalstyle.MAIN_WHITE}
          style={styles.textinput}
          onChangeText={(email) => setEmail(email)}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          style={styles.textinput}
          onChangeText={(pwd) => setPassword(pwd)}
          placeholderTextColor={globalstyle.MAIN_WHITE}
        />
        <Button
          onPress={handleSubmit}
          title="continue"
          color={globalstyle.MAIN_GREEN}
        />
        <Button
          onPress={() => navigation.navigate('Signup')}
          title="register"
          color={globalstyle.MAIN_GREEN}
        />
      </KeyboardAwareScrollView>
      </View>
    </Layout>
  );
};

export default Login;

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
