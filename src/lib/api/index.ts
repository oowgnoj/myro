import axios, {AxiosResponse} from 'axios';
import {DOMAIN_API} from '@constants/common';
import {Schedule} from 'models/schedule';
import AsyncStorage from '@react-native-async-storage/async-storage';

axios.interceptors.request.use(
  async (config) => {
    const token = (await AsyncStorage.getItem('userToken')) || '';
    config.headers['x-access-token'] = token;
    config.headers['Content-Type'] = 'application/json';
    return config;
  },
  (error) => Promise.reject(error),
);

// AUTH
export const postLogin = async (email: string, password: string) => {
  return axios.post(`${DOMAIN_API}/login`, JSON.stringify({email, password}));
};
export const postSignup = async (
  email: string,
  password: string,
  name: string,
) => {
  return axios.post(
    `${DOMAIN_API}/signup`,
    JSON.stringify({email, password, name}),
  );
};

// CONTENTS
export const getContents = async () => {
  return axios.get(`${DOMAIN_API}/contents`);
};

// ROUTINE
export const getContent = async (id) => {
  return axios.get(`${DOMAIN_API}/content`, {params: {id}});
};

export const getRoutines = async () => {
  return axios.get(`${DOMAIN_API}/routines`);
};

export const postRoutine = async (
  contents: number,
  schedule: Schedule,
  alarmTime: string,
) => {
  const {mon, tue, wed, thu, fri, sat, sun} = schedule;
  return await axios.post(
    `${DOMAIN_API}/routine`,
    JSON.stringify({
      contents,
      mon,
      tue,
      wed,
      thu,
      fri,
      sat,
      sun,
      alarmTime,
    }),
  );
};

export const postSuccess = async (
  routineId: number,
  day: string,
) => {
  return await axios.post(
    `${DOMAIN_API}/success`,
    JSON.stringify({
      routineId,
      day,
    }),
  );
};



// Statistics
export const getStats = async () => {
  return axios.get(`${DOMAIN_API}/statistic`);
};