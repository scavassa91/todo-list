import { Auth } from "../../interfaces/Auth";

export const tokenFlow: string = 'auth/TOKEN_FLOW';
export const tokenFinish: string = 'auth/TOKEN_FINISH';
export const tokenError: string = 'auth/TOKEN_ERROR';
export const tokenLoading: string = 'auth/TOKEN_LOADING';

export const logoutFlow: string = 'auth/LOGOUT_FLOW';
export const logoutLoading: string = 'auth/LOGOUT_LOADING';
export const logoutFinish: string = 'auth/LOGOUT_FINISH';

export const refreshTokenFlow: string = 'auth/REFRESH_TOKEN_FLOW';
export const refreshTokenFinish: string = 'auth/REFRESH_TOKEN_FINISH';
export const refreshTokenError: string = 'auth/REFRESH_TOKEN_ERROR';
export const refreshTokenLoading: string = 'auth/REFRESH_TOKEN_LOADING';

export const INITIAL_STATE: Auth = {
  isLoged: false,
  isLoginRunning: false,
  isLogoutRunning: false,
  token: '',
};