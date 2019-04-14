import {
  takeLatest,
  put,
  call
} from 'redux-saga/effects';
import * as actions from './AuthAction'
import { AuthLoginFlow } from "../../interfaces/Auth";
import { tokenFlow } from './constants';
import { AuthResponse } from '../../interfaces/AuthResponse';

export function* login (action: AuthLoginFlow) {
  yield put(actions.tokenRunning(true));
  try {
    const resp: AuthResponse = yield call(action.api);
    if (resp.status >= 200 || resp.status < 300) {
      yield put(actions.tokenFinish(resp.data.sessionId));
    } else {
      yield put(actions.tokenError());
    }
    console.log(resp);
  } catch (e) {
    yield put(actions.tokenError());
  } finally {
    yield put(actions.tokenRunning(false));
  }
}

export default function* root() {
  yield takeLatest(tokenFlow, login);
}