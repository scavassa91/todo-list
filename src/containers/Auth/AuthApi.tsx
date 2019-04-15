import axios, { AxiosPromise } from 'axios';
import { backendUrl } from '../../store/Utils';

export const getToken = (): AxiosPromise => {
  return axios({
    baseURL: backendUrl,
    url: '/api/session',
    method: 'POST',
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

export const refreshToken = (): AxiosPromise => {
  return axios({
    baseURL: backendUrl,
    url: '/api/session',
    method: 'PATCH',
    timeout: 10000,
  });
};