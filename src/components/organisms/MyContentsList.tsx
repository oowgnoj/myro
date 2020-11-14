import React from 'react';
import {View, StyleSheet} from 'react-native';
import MyContent from '@molecules/MyContent';

type Props = {Contents: any};

const App: React.FC<Props> = ({Contents}) => {
  return (
    <View style={styles.wrapper}>
      {Contents.map((item) => {
        return (
          <View
            style={styles.entry}
            key={Math.random()} // 임시 key
          >
            <MyContent
              key={Math.random()} // 임시 key
              habit={item}
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
    width: '100%',
    height: 120,
    marginBottom: 50,
  },
});

export default App;
