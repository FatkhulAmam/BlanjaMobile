import {default as axios} from 'axios';
import {API_URL} from '@env';

export default (token = null) => {
  const headers = {};
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  return axios.create({
    baseURL: API_URL,
    headers,
  });
};
