import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Content from '@molecules/ContentEntry';
import {IContent} from 'src/types';
import _ from 'lodash';
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
              isSubscribed={!_.isEmpty(item.routines)}
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
    marginBottom: 10,
  },
});

export default App;
