import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as TodosActions from './todos.actions';
import { TodosEntity } from './todos.models';

export const TODOS_FEATURE_KEY = 'todos';

export interface State extends EntityState<TodosEntity> {
  selectedId?: string | number;
  loaded: boolean;
  error?: string | null;
}

export interface TodosPartialState {
  readonly [TODOS_FEATURE_KEY]: State;
}

export const todosAdapter: EntityAdapter<TodosEntity> =
  createEntityAdapter<TodosEntity>();

export const initialState: State = todosAdapter.getInitialState({
  loaded: false,
});

const todosReducer = createReducer(
  initialState,
  on(TodosActions.init, (state) => ({ ...state, loaded: false, error: null })),
  on(TodosActions.loadTodosSuccess, (state, { todos }) =>
    todosAdapter.setAll(todos, { ...state, loaded: true })
  ),
  on(TodosActions.loadTodosFailure, (state, { error }) => ({
    ...state,
    error,
  })),
  on(TodosActions.createTodoSuccess, (state, { todo }) =>
    todosAdapter.addOne(todo, state)
  ),
  on(TodosActions.getTodoSuccess, (state, { todo }) => ({
    ...state,
    selectedId: todo.id,
  })),
  on(TodosActions.deleteTodoSuccess, (state, { todo }) =>
    todosAdapter.removeOne(todo.id, state)
  )
);

export function reducer(state: State | undefined, action: Action) {
  return todosReducer(state, action);
}
