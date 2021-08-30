import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { fetch } from '@nrwl/angular';
import { TodoService } from '../services/todo.service';
import { map } from 'rxjs/operators';

import * as TodosActions from './todos.actions';

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
                  name: todo.data.name,
                  description: todo.data.description,
                  id: todo.ref['@ref'].id,
                  task: {
                    name: todo.data.task.name,
                    description: todo.data.task.description,
                    id: todo.ref['@ref'].id,
                  },
                };
              });
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

  createTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.createTodo),
      fetch({
        run: (action) => {
          return this.todoService.createTodo(action.todo).pipe(
            map((todo: any) => {
              const { name, description, task } = todo.data;
              const id = todo.ref['@ref'].id;

              const newTodo = {
                id,
                name,
                description,
                task: { ...task, id },
              };

              return TodosActions.createTodoSuccess({ todo: newTodo });
            })
          );
        },
        onError: (action, error) => {
          return TodosActions.createTodoError({ error });
        },
      })
    )
  );

  getTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.getTodo),
      fetch({
        run: (action) => {
          return this.todoService.getTodo(action.id).pipe(
            map((todo: any) => {
              const { name, description, task } = todo.data;
              const id = todo.ref['@ref'].id;

              const newTodo = {
                id,
                name,
                description,
                task: { ...task, id },
              };

              return TodosActions.getTodoSuccess({ todo: newTodo });
            })
          );
        },
        onError: (action, error) => {
          return TodosActions.getTodoError({ error });
        },
      })
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodosActions.deleteTodo),
      fetch({
        run: (action) => {
          return this.todoService.deleteTodo(action.id).pipe(
            map((todo: any) => {
              const { name, description, task } = todo.data;
              const id = todo.ref['@ref'].id;

              const newTodo = {
                id,
                name,
                description,
                task: { ...task, id },
              };

              return TodosActions.deleteTodoSuccess({ todo: newTodo });
            })
          );
        },
        onError: (action, error) => {
          return TodosActions.deleteTodoError({ error });
        },
      })
    )
  );

  constructor(
    private readonly actions$: Actions,
    private todoService: TodoService
  ) {}
}
