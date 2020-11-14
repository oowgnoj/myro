import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import Layout from './Layout';
import Banner from '@atoms/ImageWithText';
import ContentsList from '@organisms/ContentsList';

const MockBanner = {
  image:
    'https://www.cbronline.com/wp-content/uploads/2017/07/bill-gates-2.jpg',
  title: '무의식의 힘',
  description: '빌게이츠의 독서',
};

const Contents = new Array(10).fill(MockBanner);

type Props = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};
const Index: React.FC<Props> = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.root}>
        <ScrollView>
          <View style={styles.TextArea}>
            <Text style={styles.titleText}>Habit</Text>
          </View>
          <View style={styles.BannerArea}>
            <Banner
              image={MockBanner.image}
              titleText={MockBanner.title}
              description={MockBanner.description}
              onClick={() => navigation.navigate('MyHabits')}
            />
          </View>
          <View style={styles.ContentsArea}>
            <ContentsList Contents={Contents} />
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
