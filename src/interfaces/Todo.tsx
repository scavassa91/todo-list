export interface Todo {
  id?: string;
  text: string;
  created?: string;
  updated?: string;
  isCompleted: boolean;
  urgency: number;
}

export interface ITodo<T> {
  [id: string]: T;
}

export interface TodosState {
  todos: ITodo<Todo>;
  isRunning: boolean;
  saveEditstatus: number;
  deleteStatus: number;
  getStatus: number;
};
