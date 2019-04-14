import axios, { AxiosPromise } from 'axios';
import { backendUrl } from '../../store/Utils';

export const getToken = (): AxiosPromise => {
  return axios({
    baseURL: backendUrl,
    url: '/api/session',
    method: 'POST',
    data: JSON.stringify({
      "errorRate": 50
    }),
    timeout: 10000,
  });
};

export const logout = (): AxiosPromise => {
  return axios({
    baseURL: backendUrl,
    url: '/api/session',
    method: 'DELETE',
    timeout: 10000,
  });
};