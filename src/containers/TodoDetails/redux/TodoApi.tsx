import { Todo } from "../../../interfaces/Todo";
import axios, { AxiosPromise } from "axios";
import { backendUrl } from "../../../store/Utils";

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