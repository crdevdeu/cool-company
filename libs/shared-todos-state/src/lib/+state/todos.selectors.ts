import { createFeatureSelector, createSelector } from '@ngrx/store';
import { TODOS_FEATURE_KEY, State, todosAdapter } from './todos.reducer';

// Lookup the 'Todos' feature state managed by NgRx
export const getTodosState = createFeatureSelector<State>(TODOS_FEATURE_KEY);

const { selectAll, selectEntities } = todosAdapter.getSelectors();

export const getTodosLoaded = createSelector(
  getTodosState,
  (state: State) => state.loaded
);

export const getTodosError = createSelector(
  getTodosState,
  (state: State) => state.error
);

export const getAllTodos = createSelector(getTodosState, (state: State) =>
  selectAll(state)
);

export const getTodosEntities = createSelector(getTodosState, (state: State) =>
  selectEntities(state)
);

export const getSelectedId = createSelector(
  getTodosState,
  (state: State) => state.selectedId
);

export const getSelected = createSelector(
  getTodosEntities,
  getSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
