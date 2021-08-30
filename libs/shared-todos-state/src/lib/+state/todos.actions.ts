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

export const getTodo = createAction(
  '[Todos/API] Get todo',
  props<{ id: any }>()
);

export const getTodoSuccess = createAction(
  '[Todos/API] Get todo success',
  props<{ todo: any }>()
);

export const getTodoError = createAction(
  '[Todos/API] Get todo error',
  props<{ error: any }>()
);

export const deleteTodo = createAction(
  '[Todos/API] Delete todo',
  props<{ id: any }>()
);

export const deleteTodoSuccess = createAction(
  '[Todos/API] Delete todo success',
  props<{ todo: any }>()
);

export const deleteTodoError = createAction(
  '[Todos/API] Delete todo error',
  props<{ error: any }>()
);

export const editTodo = createAction(
  '[Todos/API] Edit todo',
  props<{ id: any; todo: any }>()
);

export const editTodoSuccess = createAction(
  '[Todos/API] Edit todo success',
  props<{ todo: any }>()
);

export const editTodoError = createAction(
  '[Todos/API] Edit todo error',
  props<{ error: any }>()
);
