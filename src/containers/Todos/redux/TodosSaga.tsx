import {
  takeLatest,
  put,
  call
} from 'redux-saga/effects';
import { listTasksFlow } from './constants';
import { TodoFlowAction } from '../../../interfaces/Todo';
import { listTodosRunning, listTodosFinish, listTodosError } from './TodosActions';
import { AxiosResponse } from 'axios';

export function* getTodos(action: TodoFlowAction) {
  yield put(listTodosRunning(true));
  try {
    const resp: AxiosResponse<any> = yield call(action.api);
    if (resp.status >= 200 || resp.status < 300) {
      yield put(listTodosFinish(resp.data.todos));
    } else {
      yield put(listTodosError());
    }
  } catch(e) {
    yield put(listTodosError());
  } finally {
    yield put(listTodosRunning(false));
  }
}

export default function* root() {
  yield takeLatest(listTasksFlow, getTodos);
}