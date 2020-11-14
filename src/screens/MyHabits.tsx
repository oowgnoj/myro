import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
  NavigationContainer,
} from 'react-navigation';
import Layout from './Layout';
import MyContentsList from '@organisms/MyContentsList';
const MockContent = {
  id: 1,
  title: '빌 게이츠의 독서',
  subTitle: '나도 MS CEO가 될 수 있다',
  person: '빌 게이츠',
  mainImage:
    'https://www.cbronline.com/wp-content/uploads/2017/07/bill-gates-2.jpg',
  image1: 'www.s3',
  image2: 'www.s3',
  image3: 'www.s3',
  body1:
    '끓는 대한 유소년에게서 곳이 봄바람이다. 만물은 장식하는 광야에서 그들은 것이다. 원질이 않는 끝까지 피가 우리의 노래하며 얼음과 힘차게 고행을 봄바람이다. 옷을 끓는 인간의 듣는다. 웅대한 그들의 가치를 밥을 피가 영락과 전인 보라. 곧 커다란 광야에서 그들의 물방아 찬미를 거선의 것이다. 뼈 방황하여도, 열매를 없는 두기 하는 그리하였는가?',
  body2:
    '얼음이 인간이 대고, 설산에서 오직 굳세게 생생하며, 이성은 것이다. 인생을 살 내려온 쓸쓸한 얼마나 되려니와, 얼마나 구하기 것이다. 이상, 무엇을 실현에 희망의 그들을 이것을 얼음에 사막이다. 가장 노래하며 무엇이 끓는 봄바람을 것이다. 자신과 눈에 품에 방황하였으며, 맺어, 인간에 간에 이상이 그들은 이것이다. 뜨고, 못할 있을 것은 힘차게 튼튼하며, 쓸쓸하랴? 있는 물방아 방지하는 있으랴?',
  body3:
    '바이며, 사라지지 이상 이것을 피가 것이다. 바로 사는가 온갖 풀이 새 얼마나 새가 우리의 피다. 하였으며, 피에 그들에게 새 품으며, 이상의 청춘에서만 보라. 가는 원대하고, 석가는 꽃이 열락의 되는 두손을 사막이다. 청춘 얼음에 눈에 그리하였는가? 그것은 뭇 끓는 같은 천고에 봄바람을 밥을 위하여 이것이다.',
  recommendTime: '06:00',
  mon: false,
  tue: false,
  wed: false,
  thr: false,
  fri: false,
  sat: false,
  sun: false,
  time: '08:00',
};

const MockData = {
  id: 1,
  content: MockContent,
  mon: true,
  tue: true,
  wed: false,
  thr: false,
  fri: false,
  sat: true,
  sun: false,
  alarmTime: '00:00',
  isAlarm: true,
  isActive: true,
};

const Contents = new Array(10).fill(MockData);

type Props = {
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const MyHabits: React.FC<Props> = ({navigation}) => {
  return (
    <Layout>
      <View style={styles.root}>
        <ScrollView>
          <View style={styles.TextArea}>
            <Text style={styles.titleText}>My Habits</Text>
          </View>
          <View style={styles.ContentsArea}>
            <MyContentsList Contents={Contents} />
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default MyHabits;

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
