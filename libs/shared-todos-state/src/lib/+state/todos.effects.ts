import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { TodoService } from '../services/todo.service';
import { map } from 'rxjs/operators';

import * as TodosActions from './todos.actions';
import * as TodosFeature from './todos.reducer';

@Injectable()
export class TodosEffects {
  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.init),
      fetch({
        run: (action) => {
          return this.todoService.getTodos().pipe(
            map((todos: any) => {
              const todosArr = todos.map((todo: any) => {
                return {
                  name: todo.data.message,
                  id: todo.ref['@ref'].id,
                };
              });
              console.log(todosArr);
              return TodosActions.loadTodosSuccess({ todos: todosArr });
            })
          );
        },
        onError: (action, error) => {
          console.error('Error', error);
          return TodosActions.loadTodosFailure({ error });
        },
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private todoService: TodoService
  ) {}
}
