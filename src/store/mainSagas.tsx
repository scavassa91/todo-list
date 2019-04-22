import { all } from 'redux-saga/effects';

import AuthSaga from '../containers/Auth/AuthSaga';
import TodoSaga from '../containers/TodoDetails/redux/TodoSaga';

export default function*() {
  yield all([
    AuthSaga(),
    TodoSaga(),
  ]);
}
