import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';
import { refreshToken } from '../containers/Auth/AuthAction';

let isAlreadyRefreshed: boolean = false;

export default {
  requestInterceptor: () => {
    axios.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        config.headers["sessionId"] = localStorage.getItem('token') || '';
        return config;
      },
      (error: AxiosError) => {
        console.log(error);
      }
    );
  },
  responseInterceptor: (store: any) => {
    axios.interceptors.response.use(
      (respose: AxiosResponse) => respose,
      (error) => {
        const { config, response: { status } } = error;
        const originalRequest = config;
        if (status === 401) {
          if (!isAlreadyRefreshed) {
            isAlreadyRefreshed = true;
            store.dispatch(refreshToken()).then(() => {
              isAlreadyRefreshed = true;
            });
          }

          const retryOriginalRequest = new Promise((resolve) => {
            resolve(axios(originalRequest))
          })
          return retryOriginalRequest
        }
        return Promise.reject(error);
      }
    );
  }
}