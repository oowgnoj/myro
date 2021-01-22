import React, {useState, useEffect, useContext} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import _ from 'lodash';
import Layout from '@components/Layout';
import {ErrorScreen} from '@screens';
import authContext from 'src/hooks/authContext';
import {getStats} from 'src/lib/api';
import {IStatistics} from 'src/types';
import RoutineEntry from '@components/molecules/RoutineEntry';

type Props = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const Search: React.FC<Props> = ({navigation}) => {
  const [loading, setLoading] = useState<Boolean>(true);
  const [hasError, setHasError] = useState<Boolean>(false);
  const {token} = useContext(authContext);
  const [statistics, setStatistics] = useState<IStatistics[]>([]);
  useEffect(() => {
    setLoading(true);
    async function fetchStats() {
      try {
        const res = await getStats();
        setStatistics(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setHasError(true);
      }
    }

    fetchStats();
  }, [token]);

  if (loading) {
    return (
      <Layout>
        <View style={styles.root}></View>
      </Layout>
    );
  }
  if (statistics.length === 0) {
    return (
      <ErrorScreen
        message="현재 준비중입니다."
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
          <View style={styles.textArea}>
            <Text style={styles.title}>추천 컨텐츠</Text>
          </View>
          <View style={styles.contentsArea}>
            {statistics
              .filter((el) => el.contents.length >= 1)
              .map((element) => (
                <View style={styles.contentArea}>
                  <Text style={styles.subTitle}>{element.title}</Text>
                  {element.contents.map((content) => (
                    <View style={styles.contentArea}>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Routine', {
                            id: content.id,
                          });
                        }}>
                        <RoutineEntry
                          alarmTime={content.recommendTime}
                          mainImage={content.mainImage}
                          title={content.title}
                          sun={content.sun}
                          mon={content.mon}
                          tue={content.tue}
                          wed={content.wed}
                          thu={content.thr}
                          fri={content.fri}
                          sat={content.sat}
                        />
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              ))}
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Search;

const styles = StyleSheet.create({
  root: {flex: 1},

  textArea: {
    marginBottom: 30,
  },

  contentsArea: {},
  contentArea: {
    marginBottom: 15,
  },

  title: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },

  subTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
});
