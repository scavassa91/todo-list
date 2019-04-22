import { Todo } from "../../../interfaces/Todo";
import axios, { AxiosPromise } from "axios";
import { backendUrl } from "../../../store/Utils";

export const getAllToDos = (): AxiosPromise => {
  return axios({
    baseURL: backendUrl,
    url: '/api/todos',
    method: 'GET',
    timeout: 10000,
  });
}

export const saveTodo = (todo: Todo): AxiosPromise => {
  return axios({
    baseURL: backendUrl,
    url: '/api/todos',
    method: 'POST',
    data: JSON.stringify(todo),
    timeout: 10000,
  });
}

export const editTodo = (id: string, todo: Todo): AxiosPromise => {
  return axios({
    baseURL: backendUrl,
    url: `/api/todos/${id}`,
    method: 'PATCH',
    data: JSON.stringify(todo),
    timeout: 10000,
  });
}

export const deleteTodo = (id: string): AxiosPromise => {
  return axios({
    baseURL: backendUrl,
    url: `/api/todos/${id}`,
    method: 'DELETE',
    timeout: 10000,
  });
}