import axios from 'axios';
import { backendUrl } from '../../../store/Utils';

export const getAllToDos = () => {
  return axios({
    baseURL: backendUrl,
    url: '/api/todos',
    method: 'GET',
    timeout: 10000,
  });
}
