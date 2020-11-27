import React from 'react';
import {View, StyleSheet} from 'react-native';
import MyContent from '@components/molecules/RoutineEntry';
import {IRoutine} from 'src/types';
type Props = {routines: IRoutine[]};

const App: React.FC<Props> = ({routines}) => {
  return (
    <View style={styles.wrapper}>
      {routines.map((item) => {
        return (
          <View style={styles.entry} key={item.id}>
            <MyContent key={item.id} routine={item} />
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
