import React, {useEffect, useState, useContext} from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  ActivityIndicator,
} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import Layout from '@components/Layout';
import Banner from '@atoms/ImageWithText';
import ContentsList from '@organisms/ContentsList';
import authContext from '@hooks/authContext';

import {getContents, getRoutines} from 'src/lib/api';
import {IContent, IRoutine} from 'src/types';

type Props = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};
const Index: React.FC<Props> = ({navigation}) => {
  const [contents, setContents] = useState<IContent[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);
  const {token} = useContext(authContext);

  useEffect(() => {
    (async () => {
      try {
        const {data} = await getContents(token);
        setContents(data);
        setHasError(false);
      } catch (error) {
        console.error(error);
        setHasError(true);
      }
    })();
  }, [token]);

  if (contents.length === 0 || hasError) {
    return <ActivityIndicator />;
  }
  return (
    <Layout>
      <View style={styles.root}>
        <ScrollView>
          <View style={styles.TextArea}>
            <Text style={styles.titleText}>Habit</Text>
          </View>
          <View style={styles.BannerArea}>
            <Banner
              image={contents[0].mainImage}
              titleText={contents[0].title}
              description={contents[0].subTitle}
              onClick={() =>
                navigation.navigate('Routine', {id: contents[0].id})
              }
            />
          </View>
          <View style={styles.ContentsArea}>
            <ContentsList Contents={contents} />
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Index;

const styles = StyleSheet.create({
  root: {flex: 1},
  TextArea: {
    marginBottom: 30,
  },
  BannerArea: {
    height: 300,
    marginBottom: 30,
  },
  ContentsArea: {},
  titleText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
