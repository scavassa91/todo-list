import {
  tokenFlow,
  tokenLoading,
  tokenFinish,
  tokenError,
  logoutFlow,
  logoutLoading,
  logoutFinish,
  refreshTokenError
} from '../containers/Auth/constants';

export interface Auth {
  isLoged: boolean;
  isLoginRunning: boolean;
  isLogoutRunning: boolean;
  token: string;
}

export interface AuthLoginFlow {
  type: typeof tokenFlow;
  api: any;
}

export interface AuthLoginRunning {
  type: typeof tokenLoading;
  payload: boolean;
}

export interface AuthLoginFinish {
  type: typeof tokenFinish;
  payload: string;
}

export interface AuthLoginError {
  type: typeof tokenError,
}

export interface AuthLogoutFlow {
  type: typeof logoutFlow;
  api: any;
  refresh: any;
}

export interface AuthLogouRunning {
  type: typeof logoutLoading;
  payload: boolean;
}

export interface AuthLogouFinish {
  type: typeof logoutFinish;
}

export interface AuthRefreshTokenError {
  type: typeof refreshTokenError;
}
