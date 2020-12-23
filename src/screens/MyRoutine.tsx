import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
  NavigationContainer,
} from 'react-navigation';
import _ from 'lodash';
import Layout from '@components/Layout';
import MyContentsList from '@components/organisms/RoutineList';
import {ErrorScreen} from '@screens';
import {getRoutines} from 'src/lib/api';
import {IRoutine} from 'src/types';
import authContext from 'src/hooks/authContext';
type Props = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const MyRoutine: React.FC<Props> = ({navigation}) => {
  const [routines, setRoutines] = useState<IRoutine[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [hasError, setHasError] = useState<Boolean>(false);
  const {token} = useContext(authContext);
  useEffect(() => {
    setLoading(true);
    async function fetchRoutine () {
      try {
        const {data} = await getRoutines();
        setRoutines(data);
        console.log('good',data)
        setLoading(false);
      } catch (error) {
        setRoutines([])
        setLoading(false);
        setHasError(true);
      }
    }
    
    fetchRoutine()
  }, [token]);

  if (loading) {
    return (
      <Layout>
        <View style={styles.root}></View>
      </Layout>
    );
  }
  if (routines.length === 0) {
    return (
      <ErrorScreen
        message="현재 구독중인 루틴이 없습니다."
        label="루틴 보러가기"
        onClick={() => navigation.navigate('Home')}
        navigation={navigation}
      />
    );
  }
  return (
    <Layout>
      <View style={styles.root}>
        <ScrollView>
          <View style={styles.textArea}>
            <Text style={styles.title}>My Routines</Text>
          </View>
          <View style={styles.ContentsArea}>
            <MyContentsList routines={routines} />
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default MyRoutine;

const styles = StyleSheet.create({
  root: {flex: 1},

  textArea: {
    marginBottom: 30,
  },
  BannerArea: {
    height: 300,
    marginBottom: 30,
  },
  ContentsArea: {},
  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
