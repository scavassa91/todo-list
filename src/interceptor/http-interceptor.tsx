import axios, { AxiosRequestConfig, AxiosError } from 'axios';

let isAlreadyRefreshed: boolean = false;

export default {
  requestInterceptor: () => {
    axios.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        config.headers["Content-Type"] = "application/json";
        config.headers["sessionId"] = localStorage.getItem('token') || '';
        return config;
      },
      (error: AxiosError) => {
        console.log(error);
      }
    );
  },
}