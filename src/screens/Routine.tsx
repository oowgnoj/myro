import React, {useState, useEffect} from 'react';
import {
  NavigationParams,
  NavigationScreenProp,
  NavigationState,
} from 'react-navigation';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import Layout from '../components/Layout';
import WeekEntry from '@components/molecules/WeekEntry';
import {Week} from '../models/schedule';
import OvalButton from '@components/atoms/OvalButton';
import TimePickerModal from 'react-native-modal-datetime-picker';
import {RouteProp} from '@react-navigation/native';
import {getContent} from 'src/lib/api';
import {IContent} from 'src/types';
import {postRoutine} from 'src/lib/api';
import _ from 'lodash';
import {useContext} from 'react';
import authContext from '@hooks/authContext';
import Globalstyle from '@constants/style';
import {
  setRoutineNotification,
  setNotificationCategories,
} from '../lib/notification';
import {Platform} from 'react-native';
import { OneButtonAlert } from 'src/lib/util';

type RoutineScreenRouteProp = RouteProp<string, 'Routine'>;

type Props = {
  route: RoutineScreenRouteProp;
  navigation: NavigationScreenProp<NavigationState, NavigationParams>;
};

const Routine: React.FC<Props> = ({route, navigation}) => {
  const [routine, setRoutine] = useState<IContent>();
  const [enroll, setEnroll] = useState(false);
  const [custom, setCustom] = useState(false);
  const [isPickerVisible, setDatePickerVisibility] = useState(false);
  const [time, setTime] = useState('');
  const [schedule, setSchedule] = useState({
    mon: true,
    tue: false,
    wed: false,
    thu: true,
    fri: false,
    sat: false,
    sun: false,
  });


  useEffect(() => {
    (async () => {
      try {
        const {id} = route.params;
        const {data} = await getContent(id);
        setRoutine(data);
        console.log(data)
        setTime(data.recommendTime);
      } catch (err) {
        console.log(err);
      }
    })();
    // IOS notification category 설정
    Platform.OS === 'ios' && setNotificationCategories();
  }, []);

  const showPicker = () => {
    setDatePickerVisibility(true);
  };

  const hidePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    let hour = date.getHours().toString();
    hour = hour.length > 1 ? hour : `0${hour}`;

    let minute = date.getMinutes().toString();
    minute = minute.length > 1 ? minute : `0${minute}`;

    setTime(`${hour}:${minute}`);
    hidePicker();

    if (!custom) {
      setCustom(true);
    }
  };

  const onSubmit = async () => {
    if (enroll) {
      try {
        const res = await postRoutine(routine.id, schedule, time);
        if (res.status === 200) {
          setRoutineNotification(
            routine.id,
            res.data.id,
            routine.title,
            routine.mainImage,
            schedule,
            time,
          );
          navigation.navigate('MyRoutine');
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      OneButtonAlert('abc.', '이미 등록한 습관입니다', '돌아가기')
      _.isEmpty(routine.routines) && setEnroll(true);
    }
  };

  const handleSchedule = (text: string, active: boolean) => {
    const newSchedule = {...schedule};
    newSchedule[Week[text]] = active;
    setSchedule(newSchedule);

    if (!custom) {
      setCustom(true);
    }
  };
  if (_.isEmpty(routine)) {
    return (
      <Layout>
        <View style={styles.test}></View>
      </Layout>
    );
  }
  return (
    <Layout>
      <View style={styles.root}>
        <ScrollView>
          <View style={styles.titleArea}>
            <Text style={styles.titleText}>{routine.title}</Text>
          </View>
          <View style={styles.imageArea}>
            <Image
              style={styles.image}
              source={{
                uri: routine.mainImage,
              }}
            />
          </View>
          {enroll ? (
            <View style={styles.selectArea}>
              <Text style={styles.selectText}>
                {custom
                  ? '기억하실 수 있게 \n알람을 보내드려요.'
                  : '미로에서 \n추천해드리는 일정이에요.'}
              </Text>
              <WeekEntry schedule={schedule} handleSchedule={handleSchedule} />
              <View style={styles.selectForm}>
                <View style={styles.selectTime}>
                  <TouchableOpacity onPress={showPicker}>
                    <Text style={styles.selectTimeText}>{time}</Text>
                  </TouchableOpacity>
                </View>
                <TimePickerModal
                  isVisible={isPickerVisible}
                  mode="time"
                  onConfirm={handleConfirm}
                  onCancel={hidePicker}
                />
              </View>
            </View>
          ) : (
            <View style={styles.contentArea}>
              <Text style={styles.contentText}>{routine.body1}</Text>
            </View>
          )}
          <View style={styles.buttonArea}>
            <OvalButton text="습관 등록하기" onClick={onSubmit} />
          </View>
        </ScrollView>
      </View>
    </Layout>
  );
};

export default Routine;

const marginTop = 30;

const styles = StyleSheet.create({
  test: {
    height: '100%',
    backgroundColor: Globalstyle.MAIN_DARK,
  },
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
  contentArea: {
    marginTop,
  },
  contentText: {
    fontSize: 17,
    color: 'white',
    lineHeight: 30,
  },
  selectArea: {
    marginTop,
  },
  selectForm: {
    alignItems: 'center',
  },
  selectText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: marginTop,
  },
  selectTime: {
    marginTop,
    height: 55,
    width: '90%',
    borderRadius: 30,
    borderColor: 'gray',
    borderStyle: 'solid',
    borderWidth: 1,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectTimeText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  buttonArea: {
    marginTop,
    alignItems: 'center',
  },
});
