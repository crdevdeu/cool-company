import { TodosEntity } from './todos.models';
import { todosAdapter, TodosPartialState, initialState } from './todos.reducer';
import * as TodosSelectors from './todos.selectors';

describe('Todos Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getTodosId = (it: TodosEntity) => it.id;
  const createTodosEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as TodosEntity);

  let state: TodosPartialState;

  beforeEach(() => {
    state = {
      todos: todosAdapter.setAll(
        [
          createTodosEntity('PRODUCT-AAA'),
          createTodosEntity('PRODUCT-BBB'),
          createTodosEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Todos Selectors', () => {
    it('getAllTodos() should return the list of Todos', () => {
      const results = TodosSelectors.getAllTodos(state);
      const selId = getTodosId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = TodosSelectors.getSelected(state) as TodosEntity;
      const selId = getTodosId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getTodosLoaded() should return the current "loaded" status', () => {
      const result = TodosSelectors.getTodosLoaded(state);

      expect(result).toBe(true);
    });

    it('getTodosError() should return the current "error" state', () => {
      const result = TodosSelectors.getTodosError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
