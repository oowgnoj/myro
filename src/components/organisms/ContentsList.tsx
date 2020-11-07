import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import Content from '@molecules/ContentEntry';

type Props = {Contents: any};

const App: React.FC<Props> = ({Contents}) => {
  return (
    <View style={styles.wrapper}>
      {Contents.map((item) => {
        return (
          <View style={styles.entry}>
            <Content
              title={item.title}
              image={item.image}
              description={item.description}
            />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  entry: {
    width: '45%',
    height: 200,
    paddingBottom: 10,
  },
});

export default App;
