import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IndexScreen from './screens/Main';
import LoginScreen from './screens/Login';
import SignupScreen from './screens/Signup';
import MyHabits from './screens/MyHabits';
import Globalstyle from '@constants/style';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          style: {
            backgroundColor: Globalstyle.MAIN_DARK,
          },
          activeTintColor: '#fff',
          inactiveTintColor: '#fff',
        }}>
        <Tab.Screen name="Home" component={IndexScreen} />
        <Tab.Screen name="MyHabit" component={MyHabits} />
        <Tab.Screen name="Info" component={AuthStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
export default App;

const AuthStack = createStackNavigator();

function AuthStackScreen() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Globalstyle.MAIN_DARK,
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Signup" component={SignupScreen} />
    </AuthStack.Navigator>
  );
}
