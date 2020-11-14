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
import Layout from './Layout';
import globalstyle from '@constants/style';

type Props = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};
const Signup: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const handleEmail = (email) => setEmail(email);
  const handlePwd = (pwd) => setPassword(pwd);

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
          onChangeText={(email) => handleEmail(email)}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          style={styles.textinput}
          onChangeText={(pwd) => handlePwd(pwd)}
          placeholderTextColor={globalstyle.MAIN_WHITE}
        />
        <TextInput
          placeholder="username"
          secureTextEntry={true}
          style={styles.textinput}
          onChangeText={(pwd) => handlePwd(pwd)}
          placeholderTextColor={globalstyle.MAIN_WHITE}
        />
        <Button
          onPress={() => console.log('hello')}
          title="continue"
          color={globalstyle.MAIN_GREEN}
          accessibilityLabel="Learn more about this purple button"></Button>
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
