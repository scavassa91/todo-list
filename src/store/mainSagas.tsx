import { all } from 'redux-saga/effects';

import AuthSaga from '../containers/Auth/AuthSaga';
import TodosSaga from '../containers/Todos/redux/TodosSaga';

export default function*() {
  yield all([
    AuthSaga(),
    TodosSaga(),
  ]);
}
