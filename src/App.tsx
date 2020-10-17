import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Button,
  Text,
  StatusBar,
} from 'react-native';

const Index: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.halfHeight}>
        <Text>안녕하세요</Text>
      </View>
      <View style={styles.halfHeight}>
        <Text>안녕하세요</Text>
      </View>
      <View style={styles.halfHeight}>
        <Text>안녕하세요</Text>
      </View>
    </View>
  );
};
export default Index;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  halfHeight: {
    flex: 0.5,
    backgroundColor: '#FF3366',
  },
  quarterHeight: {
    flex: 0.25,
    backgroundColor: '#000',
  },
});
