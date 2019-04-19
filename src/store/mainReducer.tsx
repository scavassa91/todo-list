import { combineReducers, Store, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { SagaMiddleware } from '@redux-saga/core';
import mainSagas from './mainSagas';

import AuthReducer from '../containers/Auth/AuthReducer';
import TodosReducer from '../containers/Todos/redux/TodosReducer';
import TodoReducer from '../containers/TodoDetails/redux/TodoReducer';

const reducers = combineReducers({
  auth: AuthReducer,
  todos: TodosReducer,
  todo: TodoReducer,
});

const sagaMiddleware: SagaMiddleware = createSagaMiddleware();

const store: Store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

export default store;

sagaMiddleware.run(mainSagas)