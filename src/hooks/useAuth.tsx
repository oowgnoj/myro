import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useAuth() {
  const [token, setToken] = useState<string>('');
  useEffect(() => {
    (async () => await getAuth())();
  }, []);

  const getAuth = async () => {
    setToken(await AsyncStorage.getItem('userToken'));
  };

  const saveToken = async (token) => {
    await AsyncStorage.setItem('userToken', token);
  };

  return {token, saveToken};
}
