import axios, {AxiosResponse} from 'axios';
import {DOMAIN_API} from '@constants/common';
import {Schedule} from 'models/schedule';

// AUTH
export const postLogin = async (email: string, password: string) => {
  return axios.post(`${DOMAIN_API}/login`, JSON.stringify({email, password}), {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
export const postSignup = async (
  email: string,
  password: string,
  name: string,
) => {
  return axios.post(
    `${DOMAIN_API}/signup`,
    JSON.stringify({email, password, name}),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
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

export const getRoutines = async (token) => {
  return axios.get(`${DOMAIN_API}/routines`, {
    headers: {'x-access-token': token},
  });
};

export const postRoutine = async (
  token: string,
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
    {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
    },
  );
};

export const postSuccess = async (
  token: string,
  routineId: number,
  day: string,
) => {
  return await axios.post(
    `${DOMAIN_API}/success`,
    JSON.stringify({
      routineId,
      day,
    }),
    {
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
    },
  );
};
