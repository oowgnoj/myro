import React, {useState, useEffect, useContext} from 'react';
import {StyleSheet, ScrollView, View, Text, } from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import _ from 'lodash';

import Layout from '@components/Layout';
import RoutineCard from '@components/molecules/RoutineCard';
import {ErrorScreen} from '@screens';
import authContext from 'src/hooks/authContext';
import RoutineContext from '@hooks/routineContext';
import RoundButton from '@components/atoms/RoundButton';
import {Alert} from 'react-native';

type Props = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const MyRoutine: React.FC<Props> = ({navigation}) => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [hasError, setHasError] = useState<Boolean>(false);
  const {token, saveToken} = useContext(authContext);
  const {routines, requestRoutine} = useContext(RoutineContext);
  useEffect(() => {
    setLoading(true);
    async function fetchRoutine() {
      try {
        await requestRoutine();
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setHasError(true);
      }
    }
    fetchRoutine();
  }, [token]);


  const logout = async ()=>{
    await saveToken('');
    navigation.navigate('Home');
  }

  const requestLogout = () => {
    Alert.alert('로그아웃','로그아웃 하시겠습니까?',[{text: '취소'}, {text:'로그아웃', onPress: logout}])
  }


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
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.topbar}>
            <Text style={styles.title}>My Routines</Text>
            
            <RoundButton size={'medium'} isActive={false} text="👤" handleStatus={()=>  requestLogout()}/>
          </View>
          <View style={styles.ContentsArea}>
            {routines.map((routine) => (
              <View style={styles.entry}>
              <RoutineCard
                days={routine.days}
                alarmTime={routine.alarmTime}
                title={routine.contents.title}
                mainImage={routine.contents.mainImage}
                onClick={() =>navigation.navigate('Routine', {id: routine.contents.id})}
              />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default MyRoutine;

const styles = StyleSheet.create({
  root: {flex: 1},
  topbar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
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
  entry: {
    width: '100%',
    height: 120,
    marginBottom: 50,
  },
});
