import axios, { AxiosPromise } from 'axios';
import { backendUrl } from '../../../store/Utils';

export const getAllToDos = (): AxiosPromise => {
  return axios({
    baseURL: backendUrl,
    url: '/api/todos',
    method: 'GET',
    timeout: 10000,
  });
}
