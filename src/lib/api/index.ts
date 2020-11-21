import axios, {AxiosResponse} from 'axios';
import {DOMAIN_API} from '@constants/common';
export const postLogin = async (email: string, password: string) => {
  return axios.post(
    `http://54.180.44.68:5000/login`,
    JSON.stringify({email, password}),
    {
      headers: {
        'Content-Type': 'application/json',
      },
    },
  );
};
