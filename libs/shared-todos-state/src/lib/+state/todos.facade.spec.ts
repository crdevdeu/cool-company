import { NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule, Store } from '@ngrx/store';
import { NxModule } from '@nrwl/angular';
import { readFirst } from '@nrwl/angular/testing';

import * as TodosActions from './todos.actions';
import { TodosEffects } from './todos.effects';
import { TodosFacade } from './todos.facade';
import { TodosEntity } from './todos.models';
import {
  TODOS_FEATURE_KEY,
  State,
  initialState,
  reducer,
} from './todos.reducer';
import * as TodosSelectors from './todos.selectors';

interface TestSchema {
  todos: State;
}

describe('TodosFacade', () => {
  let facade: TodosFacade;
  let store: Store<TestSchema>;
  const createTodosEntity = (id: string, name = ''): TodosEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('used in NgModule', () => {
    beforeEach(() => {
      @NgModule({
        imports: [
          StoreModule.forFeature(TODOS_FEATURE_KEY, reducer),
          EffectsModule.forFeature([TodosEffects]),
        ],
        providers: [TodosFacade],
      })
      class CustomFeatureModule {}

      @NgModule({
        imports: [
          NxModule.forRoot(),
          StoreModule.forRoot({}),
          EffectsModule.forRoot([]),
          CustomFeatureModule,
        ],
      })
      class RootModule {}
      TestBed.configureTestingModule({ imports: [RootModule] });

      store = TestBed.inject(Store);
      facade = TestBed.inject(TodosFacade);
    });

    /**
     * The initially generated facade::loadAll() returns empty array
     */
    it('loadAll() should return empty list with loaded == true', async () => {
      let list = await readFirst(facade.allTodos$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      facade.init();

      list = await readFirst(facade.allTodos$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(true);
    });

    /**
     * Use `loadTodosSuccess` to manually update list
     */
    it('allTodos$ should return the loaded list; and loaded flag == true', async () => {
      let list = await readFirst(facade.allTodos$);
      let isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(0);
      expect(isLoaded).toBe(false);

      store.dispatch(
        TodosActions.loadTodosSuccess({
          todos: [createTodosEntity('AAA'), createTodosEntity('BBB')],
        })
      );

      list = await readFirst(facade.allTodos$);
      isLoaded = await readFirst(facade.loaded$);

      expect(list.length).toBe(2);
      expect(isLoaded).toBe(true);
    });
  });
});
