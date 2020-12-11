import 'react-native-gesture-handler';
import React, {useEffect, useState, useMemo, useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  LoginScreen,
  SignupScreen,
  MypageScreen,
  MyRoutineScreen,
  MainScreen,
  RoutineScreen,
} from '@screens';

import AuthContext from '@hooks/authContext';
import Globalstyle from '@constants/style';

const Tab = createBottomTabNavigator();

const App = () => {
  console.log('####### APP 재실행 ');
  const [token, setToken] = useState(null);

  useEffect(() => {
    console.log('#########  APP 재실행', token);
    (async () => setToken(await AsyncStorage.getItem('userToken')))();
  }, [token]);

  const saveToken = async (token) => {
    await AsyncStorage.setItem('userToken', token);
    setToken(token);
  };
  const authProviderValue = useMemo(() => ({token, saveToken}), [token]);

  return (
    <AuthContext.Provider value={authProviderValue}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            style: {
              backgroundColor: Globalstyle.MAIN_DARK,
            },
            activeTintColor: Globalstyle.MAIN_WHITE,
            inactiveTintColor: Globalstyle.MAIN_WHITE,
          }}>
          <Tab.Screen name="Home" component={RoutineStackScreen} />
          <Tab.Screen name="MyRoutine" component={MyRoutineScreen} />
          <Tab.Screen
            name="Info"
            component={token ? MypageScreen : AuthStackScreen}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
export default App;

const RoutineStack = createStackNavigator();
function RoutineStackScreen() {
  return (
    <RoutineStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Globalstyle.MAIN_DARK,
        },
        headerTintColor: Globalstyle.MAIN_WHITE,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <RoutineStack.Screen name="Home" component={MainScreen} />
      <RoutineStack.Screen name="Routine" component={RoutineScreen} />
    </RoutineStack.Navigator>
  );
}

const AuthStack = createStackNavigator();
function AuthStackScreen() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Globalstyle.MAIN_DARK,
        },
        headerTintColor: Globalstyle.MAIN_WHITE,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
  );
}
