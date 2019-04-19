import {
  takeLatest,
  put,
  call
} from 'redux-saga/effects';
import { saveTodoFlow, editTodoFlow } from './constants';
import {
  saveTodoRunning,
  editTodoRunning,
  saveTodoFinish,
  editTodoFinish,
} from './TodoActions';
import { TodoSaveFlow, TodoEditFlow } from '../../../interfaces/TodoEditSaveRedux';
import { AxiosResponse } from 'axios';

export function* saveTodo(action: TodoSaveFlow) {
  yield put(saveTodoRunning(true));
  try {
    const resp: AxiosResponse = yield call(action.api, action.data);
    yield put(saveTodoFinish(resp.status));
  } catch(e) {
    yield put(saveTodoFinish(e.status));
  } finally {
    yield put(saveTodoRunning(false));
  }
};

export function* editTodo(action: TodoEditFlow) {
  yield put(editTodoRunning(true));
  try {
    const resp: AxiosResponse = yield call(action.api, action.id, action.data);
    yield put(editTodoFinish(resp.status));
  } catch(e) {
    yield put(editTodoFinish(e.status));
  } finally {
    yield put(editTodoRunning(false));
  }
}

export default function* root() {
  yield takeLatest(saveTodoFlow, saveTodo);
  yield takeLatest(editTodoFlow, editTodo);
}