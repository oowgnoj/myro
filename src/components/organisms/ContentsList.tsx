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
import {IContent} from 'src/types';
type Props = {Contents: IContent[]};

const App: React.FC<Props> = ({Contents}) => {
  return (
    <View style={styles.wrapper}>
      {Contents.map((item) => {
        return (
          <View style={styles.entry} key={item.id}>
            <Content
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.mainImage}
              description={item.subTitle}
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
