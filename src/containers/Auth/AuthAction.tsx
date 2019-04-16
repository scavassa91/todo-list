import * as constants from './constants';
import {
  getToken,
  logout as logoutApi,
  refreshToken as refreshTokenApi
} from './AuthApi';
import {
  AuthLoginFlow,
  AuthLoginRunning,
  AuthLoginError,
  AuthLogoutFlow,
  AuthLogouRunning,
  AuthLoginFinish,
  AuthLogouFinish,
  AuthRefreshTokenError
} from "../../interfaces/Auth";

export function login(): AuthLoginFlow {
  return {
    type: constants.tokenFlow,
    api: getToken
  };
};

export function tokenRunning(isLoginRunning: boolean): AuthLoginRunning {
  return {
    type: constants.tokenLoading,
    payload: isLoginRunning
  };
};

export function tokenFinish(token: string): AuthLoginFinish {
  return {
    type: constants.tokenFinish,
    payload: token
  };
};

export function tokenError(): AuthLoginError {
  return {
    type: constants.tokenError
  };
};

export function logout(): AuthLogoutFlow {
  return {
    type: constants.logoutFlow,
    api: logoutApi,
    refresh: refreshTokenApi
  };
};

export function logoutRunning(isLogoutRunning: boolean): AuthLogouRunning {
  return {
    type: constants.logoutLoading,
    payload: isLogoutRunning
  };
};

export function logoutFinish(): AuthLogouFinish {
  return {
    type: constants.logoutFinish
  };
};

export function refreshTokenError(): AuthRefreshTokenError {
  return {
    type: constants.refreshTokenError
  };
};
