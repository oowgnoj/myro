import React, {useState} from 'react';
import {StyleSheet, Image, View, Text, TextInput, Button} from 'react-native';
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
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const handleEmail = (email) => setEmail(email);
  const handlePwd = (pwd) => setPassword(pwd);
  const MoveToSignup = () => navigation.navigate('Signup');
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
          placeholderTextColor="#fff"
          style={styles.textinput}
          onChangeText={(email) => handleEmail(email)}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          style={styles.textinput}
          onChangeText={(pwd) => handlePwd(pwd)}
          placeholderTextColor="#fff"
        />
        <Button
          onPress={() => console.log('hello')}
          title="continue"
          color={globalstyle.MAIN_GREEN}
        />
        <Button
          onPress={MoveToSignup}
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
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  textinput: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    height: 30,
    color: '#fff',
    marginBottom: 30,
  },
});
