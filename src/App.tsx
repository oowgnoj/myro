import 'react-native-gesture-handler';
import React, {useEffect, useState, useMemo, useCallback, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  LoginScreen,
  SignupScreen,
  SearchScreen,
  MyRoutineScreen,
  MainScreen,
  RoutineScreen,
} from '@screens';

import AuthContext from '@hooks/authContext';
import RoutineContext, {RoutineProvider} from '@hooks/routineContext';
import Globalstyle from '@constants/style';
import Icon from 'react-native-vector-icons/FontAwesome';
import {navigationRef} from './RootNavigation';
import SuccessScreen from '@screens/Success';

const Tab = createBottomTabNavigator();

const App = () => {
  const [token, setToken] = useState('');
  
  useEffect(() => {
    (async () => {
      const token = await AsyncStorage.getItem('userToken');
      token && setToken(token);
    })();
  }, []);

  const saveToken = async (token) => {
    await AsyncStorage.setItem('userToken', token);
    setToken(token);
  };
  const authProviderValue = useMemo(() => ({token, saveToken}), [token]);
  return (
    <AuthContext.Provider value={authProviderValue}>
      <RoutineProvider>
        <NavigationContainer ref={navigationRef}>
          <Tab.Navigator
            tabBarOptions={{
              style: {
                backgroundColor: Globalstyle.MAIN_DARK,
              },
              activeTintColor: Globalstyle.MAIN_WHITE,
              inactiveTintColor: Globalstyle.MAIN_WHITE,
            }}>
            <Tab.Screen
              name="Home"
              component={RoutineStackScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Icon name="home" size={20} color="#fff" />
                ),
              }}
            />
            <Tab.Screen
              name="Search"
              component={SearchScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Icon name="list-alt" size={20} color="#fff" />
                ),
              }}
            />
            <Tab.Screen
              name="MyPage"
              component={token ? MyRoutineScreen : AuthStackScreen}
              options={{
                tabBarIcon: ({color, size}) => (
                  <Icon name="user" size={20} color="#fff" />
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </RoutineProvider>
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
      <RoutineStack.Screen name="Success" component={SuccessScreen} />
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
