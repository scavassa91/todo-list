import { Todo } from "./Todo";

export interface TodoEditSaveState {
  isRunning: boolean;
  status: number;
};

export interface TodoSaveFlow {
  type: string;
  api: any;
  data: Todo;
};

export interface TodoEditFlow {
  type: string;
  api: any;
  id: number;
  data: Todo;
};

export interface TodoEditSaveRunning {
  type: string;
  payload: boolean;
};

export interface TodoEditSaveStatus {
  type: string;
  payload: number;
};
