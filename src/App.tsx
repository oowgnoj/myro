import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import IndexScreen from './screens/Main';
import LayoutScreen from './screens/Layout';
import Globalstyle from '@constants/style';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Globalstyle.MAIN_DARK,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Home" component={IndexScreen} />
        <Stack.Screen name="Layout" component={LayoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
