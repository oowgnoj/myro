import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TextInput,
  Button,
  AsyncStorage,
} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import Layout from '../components/Layout';
import globalstyle from '@constants/style';
import {postSignup} from 'src/lib/api';
import {OneButtonAlert} from 'src/lib/util';

type Props = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};
const Signup: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const handleSubmit = async () => {
    try {
      await postSignup(email, password, username);
      navigation.navigate('Login');
      OneButtonAlert('로그인', '로그인 해주세요', 'OK');
    } catch (error) {
      OneButtonAlert(
        '회원가입',
        '입력해주신 정보를 다시 확인해주세요',
        '뒤로가기',
      );
    }
  };
  return (
    <Layout>
      <View style={styles.root}>
        <View style={styles.header}>
          <Text style={styles.titleText}>Signup</Text>
          <Image
            style={{width: 130, height: 130}}
            source={require('../assets/logo/pic.png')}
          />
        </View>
        <TextInput
          placeholder="Email"
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
        <TextInput
          placeholder="username"
          secureTextEntry={true}
          style={styles.textinput}
          onChangeText={(username) => setUsername(username)}
          placeholderTextColor={globalstyle.MAIN_WHITE}
        />
        <Button
          onPress={handleSubmit}
          title="continue"
          color={globalstyle.MAIN_GREEN}></Button>
      </View>
    </Layout>
  );
};

export default Signup;

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
