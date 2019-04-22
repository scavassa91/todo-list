import {
  takeLatest,
  put,
  call
} from 'redux-saga/effects';
import {
  saveTodoFlow,
  editTodoFlow,
  deleteTodoFlow,
  getTodosFlow
} from './constants';
import {
  saveTodoRunning,
  saveTodoFinish,
  editTodoRunning,
  editTodoFinish,
  deleteTodoRunning,
  deleteTodoFinish,
  getTodosFinish,
  getTodosRunning,
} from './TodoActions';
import {
  TodoSaveFlow,
  TodoEditFlow
} from '../../../interfaces/TodoEditSave';
import { AxiosResponse } from 'axios';
import { GetTodosFlow } from '../../../interfaces/GetTodos';
import { DeleteTodoFlow } from '../../../interfaces/DeleteTodo';

export function* getTodos(action: GetTodosFlow) {
  yield put(getTodosRunning(true));
  try {
    const resp: AxiosResponse<any> = yield call(action.api);
    if (resp.status >= 200 || resp.status < 300) {
      yield put(getTodosFinish(resp.status, resp.data.todos));
    } else {
      yield put(getTodosFinish(resp.status, {}));
    }
  } catch(e) {
    yield put(getTodosFinish(e.status, {}));
  } finally {
    yield put(getTodosRunning(false));
  }
}

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

export function* deleteTodo(action: DeleteTodoFlow) {
  yield put(deleteTodoRunning(true));
  try {
    const resp: AxiosResponse = yield call(action.api, action.id);
    if (resp.status >= 200 || resp.status < 300) {
      yield put(deleteTodoFinish(resp.status, resp.data.todos));
    } else {
      yield put(deleteTodoFinish(resp.status, {}));
    }
  } catch(e) {
    yield put(deleteTodoFinish(e.status, {}));
  } finally {
    yield put(deleteTodoRunning(false));
  }
}

export default function* root() {
  yield takeLatest(getTodosFlow, getTodos);
  yield takeLatest(saveTodoFlow, saveTodo);
  yield takeLatest(editTodoFlow, editTodo);
  yield takeLatest(deleteTodoFlow, deleteTodo);
}