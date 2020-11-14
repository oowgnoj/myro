import React, {useState} from 'react';
import {StyleSheet, Image, View, Text, TextInput, Button} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import Layout from './Layout';
import useAuth from '../hooks/useAuth';
import globalstyle from '@constants/style';

type Props = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};
const MyHabits: React.FC<Props> = ({navigation}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const {saveToken} = useAuth();
  const handleEmail = (email) => setEmail(email);
  const handlePwd = (pwd) => setPassword(pwd);
  const moveToSignup = () => navigation.navigate('Signup');
  const signInAsync = async () => {
    await saveToken('abc');
    navigation.navigate('Main');
  };
  return (
    <Layout>
      <View style={styles.root}>
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
          onChangeText={(email) => handleEmail(email)}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          style={styles.textinput}
          onChangeText={(pwd) => handlePwd(pwd)}
          placeholderTextColor={globalstyle.MAIN_WHITE}
        />
        <Button
          onPress={signInAsync}
          title="continue"
          color={globalstyle.MAIN_GREEN}
        />
        <Button
          onPress={moveToSignup}
          title="register"
          color={globalstyle.MAIN_GREEN}
        />
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
