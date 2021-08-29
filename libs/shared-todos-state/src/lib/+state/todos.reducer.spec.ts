import { Action } from '@ngrx/store';

import * as TodosActions from './todos.actions';
import { TodosEntity } from './todos.models';
import { State, initialState, reducer } from './todos.reducer';

describe('Todos Reducer', () => {
  const createTodosEntity = (id: string, name = ''): TodosEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Todos actions', () => {
    it('loadTodosSuccess should return the list of known Todos', () => {
      const todos = [
        createTodosEntity('PRODUCT-AAA'),
        createTodosEntity('PRODUCT-zzz'),
      ];
      const action = TodosActions.loadTodosSuccess({ todos });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
