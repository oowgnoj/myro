import React, {useState} from 'react';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';
import Layout from '../components/Layout';
import OvalButton from '@components/atoms/OvalButton';
import RoundButton from '@components/atoms/RoundButton';
import {getContent, postSuccess} from 'src/lib/api';
import {Week} from '../models/schedule';
import {useEffect} from 'react';
import {IRoutine} from 'src/types';
import {OneButtonAlert} from 'src/lib/util';

type Props = {
  route: {
    params: {routineId: number; contentId: number; title: string; url: string};
  };
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const SuccessScreen: React.FC<Props> = ({
  route: {
    params: {routineId, contentId, title, url},
  },
  navigation,
}) => {
  const [checked, setChecked] = useState<string>('');
  const [routine, setRoutine] = useState<IRoutine>();

  useEffect(() => {
    (async () => {
      try {
        // 서버 요청 받는 부분 구현은 해두었으나 실제로는 알림과 함께 저장된 정보로 랜더링
        const {data} = await getContent(contentId);
        setRoutine(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const handleStatus = (target: string) => {
    setChecked(target);
  };

  const status = {
    true: 'O',
    false: 'X',
  };

  const onSubmit = async () => {
    const week = Object.values(Week);
    const index = new Date().getDay() - 1 >= 0 ? new Date().getDay() - 1 : 6;
    const day = week[index];

    if (checked) {
      // post
      const res = await postSuccess(routineId, day);
      if (res.status === 200) {
        OneButtonAlert('기록하기', '성공적으로 기록되었습니다.', '확인');
        navigation.navigate('MyRoutine');
      }
    } else {
      OneButtonAlert('기록하기', '다시 시도해주세요.', '확인');
    }
  };

  return (
    <Layout>
      <View style={styles.root}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.titleArea}>
            <Text style={styles.titleText}>{title}</Text>
          </View>
          <View style={styles.imageArea}>
            <Image
              style={styles.image}
              source={{
                uri: url,
              }}
            />
          </View>
          <View style={styles.checkArea}>
            <RoundButton
              size="large"
              text={status.true}
              isActive={checked === status.true}
              handleStatus={handleStatus}
            />
            <RoundButton
              size="large"
              text={status.false}
              isActive={checked === status.false}
              handleStatus={handleStatus}
            />
          </View>
          <View style={styles.buttonArea}>
            <OvalButton text="기록하기" onClick={onSubmit} />
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default SuccessScreen;

const marginTop = 30;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
  },
  titleArea: {},
  titleText: {
    fontSize: 23,
    fontWeight: 'bold',
    color: 'white',
  },
  imageArea: {
    marginTop,
  },
  image: {
    width: '100%',
    height: 200,
  },
  subText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: marginTop,
  },
  checkArea: {
    marginTop: 50,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  buttonArea: {
    marginTop: 50,
    alignItems: 'center',
  },
});

// const MockRoutine = {
//   id: 1,
//   title: '빌 게이츠의 독서',
//   subTitle: '나도 MS CEO가 될 수 있다',
//   person: '빌 게이츠',
//   mainImage:
//     'https://www.cbronline.com/wp-content/uploads/2017/07/bill-gates-2.jpg',
//   image1: 'www.s3',
//   image2: 'www.s3',
//   image3: 'www.s3',
//   body1:
//     '끓는 대한 유소년에게서 곳이 봄바람이다. 만물은 장식하는 광야에서 그들은 것이다. 원질이 않는 끝까지 피가 우리의 노래하며 얼음과 힘차게 고행을 봄바람이다. 옷을 끓는 인간의 듣는다. 웅대한 그들의 가치를 밥을 피가 영락과 전인 보라. 곧 커다란 광야에서 그들의 물방아 찬미를 거선의 것이다. 뼈 방황하여도, 열매를 없는 두기 하는 그리하였는가?',
//   body2:
//     '얼음이 인간이 대고, 설산에서 오직 굳세게 생생하며, 이성은 것이다. 인생을 살 내려온 쓸쓸한 얼마나 되려니와, 얼마나 구하기 것이다. 이상, 무엇을 실현에 희망의 그들을 이것을 얼음에 사막이다. 가장 노래하며 무엇이 끓는 봄바람을 것이다. 자신과 눈에 품에 방황하였으며, 맺어, 인간에 간에 이상이 그들은 이것이다. 뜨고, 못할 있을 것은 힘차게 튼튼하며, 쓸쓸하랴? 있는 물방아 방지하는 있으랴?',
//   body3:
//     '바이며, 사라지지 이상 이것을 피가 것이다. 바로 사는가 온갖 풀이 새 얼마나 새가 우리의 피다. 하였으며, 피에 그들에게 새 품으며, 이상의 청춘에서만 보라. 가는 원대하고, 석가는 꽃이 열락의 되는 두손을 사막이다. 청춘 얼음에 눈에 그리하였는가? 그것은 뭇 끓는 같은 천고에 봄바람을 밥을 위하여 이것이다.',
//   recommendTime: '06:00',
//   mon: true,
//   tue: false,
//   wed: false,
//   thr: false,
//   fri: false,
//   sat: false,
//   sun: false,
//   time: '08:00',
// };
