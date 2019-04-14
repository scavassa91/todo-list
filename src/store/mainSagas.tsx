import { all } from 'redux-saga/effects';

import AuthSaga from '../containers/Auth/AuthSaga';

export default function*() {
  yield all([
    AuthSaga(),
  ]);
}
