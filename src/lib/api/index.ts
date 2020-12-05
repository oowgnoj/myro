import axios, {AxiosResponse} from 'axios';
import {DOMAIN_API} from '@constants/common';

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
export const getRoutine = async (id) => {
  return axios.get(`${DOMAIN_API}/content`, {params: {id}});
};

export const getRoutines = async (token) => {
  return axios.get(`${DOMAIN_API}/routines`, {
    headers: {'x-access-token': token},
  });
};