import {
  takeLatest,
  put,
  call
} from 'redux-saga/effects';
import * as actions from './AuthAction'
import { AuthLoginFlow, AuthLogoutFlow } from "../../interfaces/Auth";
import { tokenFlow, logoutFlow } from './constants';
import { AuthResponse } from '../../interfaces/AuthResponse';

export function* login (action: AuthLoginFlow) {
  yield put(actions.tokenRunning(true));
  try {
    const resp: AuthResponse = yield call(action.api);
    if (resp.status >= 200 || resp.status < 300) {
      localStorage.setItem('token', resp.data.sessionId);
      yield put(actions.tokenFinish(resp.data.sessionId));
    } else {
      yield put(actions.tokenError());
    }
  } catch (e) {
    yield put(actions.tokenError());
  } finally {
    yield put(actions.tokenRunning(false));
  }
}

export function* logout (action: AuthLogoutFlow) {
  yield put(actions.logoutRunning(true));
  try {
    try {
      const resp = yield call(action.refresh);
      if (resp.status < 200 || resp.status >= 300) {
        yield put(actions.refreshTokenError());
      }
    } catch(e) {
      yield put(actions.refreshTokenError());
    }
    const resp: AuthResponse = yield call(action.api);
    if (resp.status >= 200 || resp.status < 300) {
      yield put(actions.logoutFinish());
    }
  } catch(e) {
    
  } finally {
    yield put(actions.logoutRunning(false));
  }
}

export default function* root() {
  yield takeLatest(tokenFlow, login);
  yield takeLatest(logoutFlow, logout);
}