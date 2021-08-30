import { createAction, props } from '@ngrx/store';
import { TodosEntity } from './todos.models';

export const init = createAction('[Todos Page] Init');

export const loadTodosSuccess = createAction(
  '[Todos/API] Load Todos Success',
  props<{ todos: TodosEntity[] }>()
);

export const loadTodosFailure = createAction(
  '[Todos/API] Load Todos Failure',
  props<{ error: any }>()
);

export const createTodo = createAction(
  '[Todos/API] Create todo',
  props<{ todo: any }>()
);

export const createTodoSuccess = createAction(
  '[Todos/API] Create todo success',
  props<{ todo: any }>()
);

export const createTodoError = createAction(
  '[Todos/API] Create todo error',
  props<{ error: any }>()
);
